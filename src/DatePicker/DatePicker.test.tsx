import { render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/react";
import DatePickerFns from "./DatePicker";
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
  test("it should render the calendar when click inside the input", async () => {
    const user = userEvent.setup();
    render(<Higher date={new Date(2023, 2, 1)} />);
    const datePickerTextInput = screen.getByTestId("datepicker-input");
    await user.click(datePickerTextInput);
    await screen.findByTestId("calendar-wrapper");
    expect(screen.getByTestId("calendar-wrapper")).toBeInTheDocument();
    const buttonDayS = screen.getAllByRole("button", { name: /^[0-9]{1,2}$/i });
    expect(buttonDayS).toHaveLength(42);
    //
  });

  test("should change the input text when clicking on a button day in the calendar", async () => {
    const user = userEvent.setup();
    const valueDate = new Date(2023, 1, 1);
    render(<Higher date={valueDate} />);
    const datePickerTextInput = screen.getByTestId("datepicker-input");
    await user.click(datePickerTextInput);
    const buttonDay20 = screen.getByTestId("20");
    expect(buttonDay20).toBeInTheDocument();
    await user.click(buttonDay20);
    // as the format is "yyyy-MM-dd"
    const changeDayInDate = setDate(valueDate, 20);
    expect(datePickerTextInput).toHaveValue(
      format(changeDayInDate, FORMAT_OF_DATE)
    );
  });
});
