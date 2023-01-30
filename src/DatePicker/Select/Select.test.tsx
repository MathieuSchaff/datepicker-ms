import { render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/react";
import DatePickerFns from "../DatePicker";
import userEvent from "@testing-library/user-event";
import { format, setDate, setDefaultOptions } from "date-fns";
import { fr } from "date-fns/locale";
import React from "react";

const FORMAT_OF_DATE = "yyyy-MM-dd";
setDefaultOptions({ locale: fr });

const Higher = ({ date }: { date: Date }) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(date);
  return (
    <DatePickerFns
      id="dateOfBirth"
      value={selectedDate}
      onChange={setSelectedDate}
      minDate={new Date(2018, 7, 22)}
      maxDate={new Date(2027, 2, 22)}
      formatDate={FORMAT_OF_DATE}
      name={"birthDate"}
    />
  );
};
// beforeEach(() => {
//   render(<Higher date={new Date()} />);
//   });
afterEach(() => {
  document.body.innerHTML = "";
});
test("should render the two custom select inside the calendar", async () => {
  const user = userEvent.setup();
  const valueDate = new Date(2023, 2, 1);
  render(<Higher date={valueDate} />);
  const datePickerTextInput = screen.getByTestId("datepicker-input");
  await user.click(datePickerTextInput);
  const monthCustomSelect = screen.getByTestId("month-select");
  const yearCustomSelect = screen.getByTestId("year-select");
  expect(monthCustomSelect).toBeInTheDocument();
  expect(yearCustomSelect).toBeInTheDocument();
  expect(monthCustomSelect).toHaveTextContent(format(valueDate, "LLLL"));
  expect(yearCustomSelect).toHaveTextContent(format(valueDate, "yyy"));
});
test("the custom select of the month should have 12 button inside", async () => {
  const user = userEvent.setup();
  const valueDate = new Date(2023, 2, 1);
  render(<Higher date={valueDate} />);
  const datePickerTextInput = screen.getByTestId("datepicker-input");

  await user.click(datePickerTextInput);
  const monthCustomSelect = screen.getByTestId("month-select");

  await user.click(monthCustomSelect);
  const monthBttons = screen.getAllByTestId("month-button");
  expect(monthBttons).toHaveLength(12);
});
test("the custom select of the year should have year max date minus year min date buttons", async () => {
  const user = userEvent.setup();
  // here we test the max date and min date as :
  // minDate={new Date(2018, 7, 22)}
  // maxDate={new Date(2027, 2, 22)}
  // 2027 - 2018 = 9
  const valueDate = new Date(2023, 2, 1);
  render(<Higher date={valueDate} />);
  const datePickerTextInput = screen.getByTestId("datepicker-input");

  await user.click(datePickerTextInput);
  const yearCustomSelect = screen.getByTestId("year-select");

  await user.click(yearCustomSelect);
  const monthBttons = screen.getAllByTestId("year-button");
  expect(monthBttons).toHaveLength(9);
});
test("should change the current year when clicking on a button inside the custom select year", async () => {
  const user = userEvent.setup();
  const valueDate = new Date(2023, 2, 1);
  render(<Higher date={valueDate} />);
  const datePickerTextInput = screen.getByTestId("datepicker-input");

  await user.click(datePickerTextInput);
  const yearCustomSelect = screen.getByTestId("year-select");

  await user.click(yearCustomSelect);
  const buttonYear2024 = screen.getByRole("option", { name: /2024/i });
  expect(buttonYear2024).toBeInTheDocument();
  await user.click(buttonYear2024);
  expect(screen.getByText(/2024/i)).toBeInTheDocument();
});
test("should change the current month when clicking on a button inside the custom select month", async () => {
  const user = userEvent.setup();
  const valueDate = new Date(2023, 2, 1);
  render(<Higher date={valueDate} />);
  const datePickerTextInput = screen.getByTestId("datepicker-input");

  await user.click(datePickerTextInput);
  const monthCustomSelect = screen.getByTestId("month-select");

  await user.click(monthCustomSelect);
  const monthBttons = screen.getAllByTestId("month-button");
  await user.click(monthBttons[0]);
  const buttonMonthFirstMonth = screen.getByText(/JANV/i);
  expect(buttonMonthFirstMonth).toBeInTheDocument();
});
