import React, { useCallback } from "react";
import {
  SHeader,
  SvgButtonRightMonth,
  SvgButtonLeftMonth,
  SvgButtonLeftYear,
  SvgButtonRightYear,
  ButtonStyed,
} from "./styled";
import NavButton from "./NavButton";
import {
  subMonths,
  addMonths,
  subYears,
  addYears,
  isBefore,
  isAfter,
  format,
} from "date-fns";
import type { IHeaderProps } from "./types";
const Header = ({
  value,
  onChange,
  minDate,
  maxDate,
  primarycolor,
  setDisplayMonthOrYear,
  displaySelectMonthOrYear,
  ariaArrow,
  formatMonth = "LLLL",
  formatYear = "yyy",
  styles,
}: IHeaderProps) => {
  const prevMonth = useCallback(() => {
    onChange(subMonths(value, 1));
  }, [onChange, value]);
  const nextMonth = useCallback(() => {
    onChange(addMonths(value, 1));
  }, [onChange, value]);
  const prevYear = useCallback(() => {
    onChange(subYears(value, 1));
  }, [onChange, value]);
  const nextYear = useCallback(() => {
    onChange(addYears(value, 1));
  }, [onChange, value]);

  return (
    <SHeader className="calendar__header" style={{ ...styles?.header }}>
      <NavButton
        onClick={prevYear}
        disabled={
          minDate !== undefined ? isBefore(subYears(value, 1), minDate) : false
        }
        styles={styles?.ArrowButtonStyles}
        primarycolor={primarycolor}
        dataTestid="prev-year"
        ariaLabel={ariaArrow?.prevYear ?? "go to previous year"}
        size={styles?.arrowButtonSize}
      >
       {styles?.childrens?.[0] ??<SvgButtonLeftYear />}

      </NavButton>
      <NavButton
        onClick={prevMonth}
        disabled={
          minDate !== undefined ? isBefore(subMonths(value, 1), minDate) : false
        }
        styles={styles?.ArrowButtonStyles}
        primarycolor={primarycolor}
        dataTestid="prev-month"
        ariaLabel={ariaArrow?.prevMonth ?? "go to previous month"}
        size={styles?.arrowButtonSize}
      >
       {styles?.childrens?.[1] ??  <SvgButtonLeftMonth />}
      </NavButton>

      <ButtonStyed
        type="button"
        onClick={() =>
          setDisplayMonthOrYear({
            isVisibleYear: false,
            isVisibleMonth: !displaySelectMonthOrYear.isVisibleMonth,
          })
        }
        aria-haspopup="listbox"
        aria-controls={"month_dropdown"}
        aria-expanded={displaySelectMonthOrYear.isVisibleMonth}
        primarycolor={primarycolor}
        className="select-button"
        data-testid="month-select"
        style={{ ...styles?.selectButton }}
      >
        {format(value, formatMonth)}
      </ButtonStyed>
      <ButtonStyed
        type="button"
        onClick={() =>
          setDisplayMonthOrYear({
            isVisibleMonth: false,
            isVisibleYear: !displaySelectMonthOrYear.isVisibleYear,
          })
        }
        aria-haspopup="listbox"
        aria-controls={"year_dropdown"}
        aria-expanded={displaySelectMonthOrYear.isVisibleYear}
        primarycolor={primarycolor}
        className="select-button"
        data-testid="year-select"
        style={{ ...styles?.selectButton }}

      >
        {format(value, formatYear)}
      </ButtonStyed>

      <NavButton
        onClick={nextMonth}
        disabled={maxDate !== undefined && isAfter(value, maxDate)}
        primarycolor={primarycolor}
        styles={styles?.ArrowButtonStyles}
        dataTestid="next-month"
        ariaLabel={ariaArrow?.nextMonth ?? "go to next month"}
        size={styles?.arrowButtonSize}

      >
      { 
      styles?.childrens?.[3] ??  <SvgButtonRightMonth />}
      </NavButton>
      <NavButton
        onClick={nextYear}
        disabled={maxDate !== undefined && isAfter(addYears(value, 1), maxDate)}
        primarycolor={primarycolor}
        styles={styles?.ArrowButtonStyles}
        dataTestid="next-year"
        ariaLabel={ariaArrow?.nextYear ?? "go to next year"}
        size={styles?.arrowButtonSize}
      >
        {styles?.childrens?.[3] ?? <SvgButtonRightYear />}
      </NavButton>
    </SHeader>
  );
};

export default Header;
