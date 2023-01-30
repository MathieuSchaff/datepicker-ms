import React, { useEffect, useMemo, useRef } from "react";

import {
  format,
  getMonth,
  getYear,
  isAfter,
  isBefore,
  setMonth,
  setYear,
} from "date-fns";
import { getMonthsNames} from "../utils/datepickerUtils";
import { SButtonsContainer, StyledButtonSelect } from "./SelectStyled";
import type { ISelectProps, Option, IMonthOrYearFormated } from "./types";

const Select = ({
  value,
  type,
  minDate,
  maxDate,
  onChange,
  primarycolor,
  secondarycolor,
  tertiarycolor,
  formatMonth,
  formatYear,
  styles,
  setDisplayMonthOrYear,
}: ISelectProps) => {
  // REF OF THE OPTIONS
  const optionsRefs = useRef<any>([]);

  // I want to set the value of the higher state to be the month click or the year clicked
  const handleSetCurrent = (option: Option) => {
    console.log("option", option);
    if (type === "month") {
      onChange(setMonth(value, Number(option.idx) - 1));
    }
    if (type === "year") {
      onChange(setYear(value, Number(option.value)));
    }
    setDisplayMonthOrYear({
      isVisibleYear: false,
      isVisibleMonth: false,
    });
  };
  let options: IMonthOrYearFormated[] = useMemo(() => {
    if (type === "month") {
      const monthsNames = getMonthsNames(formatMonth);
      const newMonth = monthsNames.filter((month) => {
        const isBeforeMinDate =
          minDate !== undefined
            ? isBefore(setMonth(value, Number(month.idx)), minDate)
            : false;
        const isAfterDate =
          maxDate !== undefined
            ? isAfter(setMonth(value, Number(month.value)), maxDate)
            : false;
        return !(isBeforeMinDate || isAfterDate);
      });
      const formatedMonth = newMonth.map((month, index) => {
        return { ...month, sameYearOrMonth: getMonth(value) === index };
      });
      return formatedMonth as IMonthOrYearFormated[];
    } else {
      let end = maxDate ? Number(format(maxDate, formatYear as string)) : 2045;
      let start = minDate
        ? Number(format(minDate, formatYear as string))
        : 1900;
      let array = Array.from(Array(end - start).keys()).map(
        (year: number, index) => {
          return {
            value: (year + start).toString(),
            idx: index.toString(),
            sameYearOrMonth: getYear(value) === year,
          };
        }
      );
      return array as IMonthOrYearFormated[];
    }
  }, [formatMonth, formatYear, maxDate, minDate, type, value]);

  let testId = useMemo(() => {
    if (type === "month") {
      return "month-button";
    } else {
      return "year-button";
    }
  }, [type]);

  useEffect(() => {
    optionsRefs.current[0].focus();
  }, []);
  const handleKeyDownButton = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    option: IMonthOrYearFormated
  ) => {
    e.preventDefault();
    const idx = Number(option.idx) - 1;
    if (e.key === "Enter") {
      handleSetCurrent(option);
    }
    if (e.key === "ArrowLeft") {
      let idxArrowleft = idx !== 0 ? idx - 1 : optionsRefs.current.length - 1;
      optionsRefs.current[idxArrowleft].focus();
    }
    if (e.key === "ArrowRight") {
      let idxArrowRight = idx !== optionsRefs.current.length - 1 ? idx + 1 : 0;
      optionsRefs.current[idxArrowRight].focus();
    }
  };
  return (
    <SButtonsContainer
      primarycolor={primarycolor}
      secondarycolor={secondarycolor}
      role="listbox"
      aria-multiselectable={false}
      $type={type === "month" ? false : true}
      className="buttons_container"
      style={{ ...styles?.selectContainer }}
    >
      {options.map((option, index) => (
        <StyledButtonSelect
          ref={(el) => (optionsRefs.current[index] = el)}
          key={option.value}
          data-testid={testId}
          className={`${type}_select_button`}
          id={`${type}_element_${option.value}`}
          onClick={() => {
            handleSetCurrent(option);
          }}
          role="option"
          primarycolor={primarycolor}
          secondarycolor={secondarycolor}
          tertiarycolor={tertiarycolor}
          aria-selected={option.sameYearOrMonth}
          aria-disabled={false}
          aria-label={option.value}
          tabIndex={0}
          onKeyUp={(e) => {
            handleKeyDownButton(e, option);
          }}
          style={{ ...styles?.selectOptions }}
        >
          {option.value}
        </StyledButtonSelect>
      ))}
    </SButtonsContainer>
  );
};

export default Select;
