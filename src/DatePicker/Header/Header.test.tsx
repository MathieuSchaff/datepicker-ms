import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import DatePickerFns from "../DatePicker";
import userEvent from "@testing-library/user-event";
import { format, setDate } from "date-fns";
import React from "react";

const FORMAT_OF_DATE = "yyyy-MM-dd";

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

afterEach(() => {
  document.body.innerHTML = "";
});
describe("Date picker FNS test", () => {
  test("it sould render the input of the date picker", () => {
    render(<Higher date={new Date()} />);
    // get the input with the test id "datepicker-input"
    const datePickerTextInput = screen.getByTestId("datepicker-input");
    expect(datePickerTextInput).toBeInTheDocument();
  });
  test("it should render the buttons inside the header of the calendar to go in past or future of the current data", async () => {
    const user = userEvent.setup();
    render(<Higher date={new Date(2023, 1, 1)} />);
    const datePickerTextInput = screen.getByTestId("datepicker-input");
    await user.click(datePickerTextInput);
    const prevYearButton = screen.getByTestId("prev-year");
    const prevMonthButton = screen.getByTestId("prev-month");
    const nextMonthButton = screen.getByTestId("next-month");
    const nextYearButton = screen.getByTestId("next-year");
    expect(prevYearButton).toBeInTheDocument();
    expect(prevMonthButton).toBeInTheDocument();
    expect(nextMonthButton).toBeInTheDocument();
    expect(nextYearButton).toBeInTheDocument();
  });
  test("it should change the month select text content when clicked on arrow previous months or next months", async () => {
    const user = userEvent.setup();
    render(<Higher date={new Date(2023, 1, 1)} />);
    const datePickerTextInput = screen.getByTestId("datepicker-input");
    await user.click(datePickerTextInput);
    const prevMonthButton = screen.getByTestId("prev-month");
    expect(prevMonthButton).toBeInTheDocument();
    await user.click(prevMonthButton);
    const monthCustomSelect = screen.getByTestId("month-select");
    expect(monthCustomSelect).toHaveTextContent("January");
    const nextMonthButton = screen.getByTestId("next-month");
    expect(nextMonthButton).toBeInTheDocument();
    await user.click(nextMonthButton);
    expect(monthCustomSelect).toHaveTextContent("February");
  });
  test("it should change the year select text content when clicked on arrow previous year or next year", async () => {
    const user = userEvent.setup();
    render(<Higher date={new Date(2023, 1, 1)} />);
    const datePickerTextInput = screen.getByTestId("datepicker-input");
    await user.click(datePickerTextInput);
    const prevYearButton = screen.getByTestId("prev-year");
    expect(prevYearButton).toBeInTheDocument();
    await user.click(prevYearButton);
    const monthCustomSelect = screen.getByTestId("year-select");
    expect(monthCustomSelect).toHaveTextContent("2022");
    const nextYearButton = screen.getByTestId("next-year");
    expect(nextYearButton).toBeInTheDocument();
    await user.click(nextYearButton);
    expect(monthCustomSelect).toHaveTextContent("2023");
  });
});
