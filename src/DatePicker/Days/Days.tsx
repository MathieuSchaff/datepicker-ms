import {
  addMonths,
  getDay,
  getDaysInMonth,
  getISODay,
  startOfMonth,
  subMonths,
} from 'date-fns';
import React, { useMemo } from 'react';
import ButtonDay, { WrapperDayButtons } from '../ButtonDay/ButtonDayStyled';
import { IStyles } from '../types';
import { getWeekDays, previousDaysArray } from '../utils/datepickerUtils';
import { DayName, SevenColGrid } from './styled';
interface IDays {
  minDate?: Date;
  maxDate?: Date;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  onChange: React.Dispatch<React.SetStateAction<Date>>;
  value: Date;
  formatDate: string;
  iso?: boolean;
  formatDay: string;
  styles?: IStyles;
  withPrefix?: boolean;
  withSuffix?: boolean;
}
const Days = ({
  minDate,
  maxDate,
  setIsOpen,
  setInputText,
  onChange,
  value,
  formatDate,
  iso = false,
  formatDay,
  styles,
  withPrefix,
  withSuffix,
}: IDays) => {
  const weekDays = getWeekDays(formatDay);
  // will get the name of the days ( depending on the locale)
  // will get the the first date of the month ( type: Date)
  const startDateOfMonth = startOfMonth(value);

  const numberOfDaysInMonth = getDaysInMonth(value);

  const indexOfFirstDayInWeek = useMemo(() => {
    if (iso) {
      // GET ISO DAY from 1 -7

      return getISODay(startDateOfMonth) - 1;
    } else {
      // GETDAY from 0-6

      return getDay(startDateOfMonth);
    }
  }, [iso, startDateOfMonth]);

  /////////////////////
  const suffixDays = 42 - numberOfDaysInMonth - indexOfFirstDayInWeek;

  const rangePrefix = previousDaysArray(
    getDaysInMonth(subMonths(value, 1)) - indexOfFirstDayInWeek,
    getDaysInMonth(subMonths(value, 1))
  );
  return (
    <>
      <SevenColGrid role="grid">
        {weekDays.map(day => (
          <DayName
            key={day}
            style={{ ...styles?.days?.dayname }}
            className="day-name"
          >
            {day}
          </DayName>
        ))}
      </SevenColGrid>
      <WrapperDayButtons>
        <SevenColGrid>
          {rangePrefix.map((day, index) => {
            if (withPrefix) {
              return (
                <ButtonDay
                  key={`prefix-${index}`}
                  onChange={onChange}
                  value={subMonths(value, 1)}
                  primarycolor={styles?.primarycolor}
                  secondarycolor={styles?.secondarycolor}
                  tertiarycolor={styles?.tertiarycolor}
                  dayNumber={day}
                  mainArray={false}
                  setIsOpen={setIsOpen}
                  setInputText={setInputText}
                  formatDate={formatDate}
                  minDate={minDate}
                  maxDate={maxDate}
                  styles={styles?.days?.buttonday}
                  prefix={true}
                >
                  {day}
                </ButtonDay>
              );
            } else {
              return <div></div>;
            }
          })}
          {Array.from({ length: numberOfDaysInMonth }).map((_, index) => {
            const date = index + 1;
            return (
              <ButtonDay
                key={`mainDays-${index}`}
                onChange={onChange}
                value={value}
                primarycolor={styles?.primarycolor}
                secondarycolor={styles?.secondarycolor}
                dayNumber={date}
                mainArray={true}
                setIsOpen={setIsOpen}
                setInputText={setInputText}
                formatDate={formatDate}
                minDate={minDate}
                maxDate={maxDate}
                testId={date.toString()}
                styles={styles?.days?.buttonday}
              >
                {date}
              </ButtonDay>
            );
          })}
          {suffixDays > 0
            ? Array.from({ length: suffixDays }).map((_, index) => {
                const date = index + 1;
                if (withSuffix) {
                  return (
                    <ButtonDay
                      key={`suffix-${index}`}
                      onChange={onChange}
                      value={addMonths(value, 1)}
                      primarycolor={styles?.primarycolor}
                      secondarycolor={styles?.secondarycolor}
                      dayNumber={date}
                      mainArray={false}
                      setIsOpen={setIsOpen}
                      setInputText={setInputText}
                      formatDate={formatDate}
                      minDate={minDate}
                      suffix={true}
                      maxDate={maxDate}
                      styles={styles?.days?.buttonday}
                    >
                      {date}
                    </ButtonDay>
                  );
                } else {
                  return <div></div>;
                }
              })
            : null}
        </SevenColGrid>
      </WrapperDayButtons>
    </>
  );
};
export default Days;
