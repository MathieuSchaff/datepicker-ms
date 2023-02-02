import React, { useCallback, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { format } from 'date-fns';
import Header from './Header/Header';
import { DatePickerWrapper, CalendarWrapper, InputDatePicker } from './styled';
import Days from './Days/Days';
import Select from './Select/Select';
import { IDatePickerProps } from './types';

/**
 * Component to create a date picker
 *
 * ## Usage
 *
 * ```tsx
 *     <DatePicker value={selectedDate}
      onChange={setSelectedDate} name="datepicker" id="datepicker"/>
 * ```
 *
 *
 */
export const DatePicker = ({
  id,
  minDate,
  maxDate,
  onChange,
  value,
  placeholder,
  formatDate = 'yyyy-MM-dd',
  name,
  ariaRequired,
  iso = false,
  formatDay = 'EEE',
  formatMonth = 'LLLL',
  formatYear = 'yyy',
  ariaLabels,
  styles,
  withPrefix = true,
  withSuffix = true,
}: IDatePickerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRefModal = useRef<HTMLDivElement>(null);
  const container = useRef(null);
  // display the month or year dropdown select
  const [displaySelectMonthOrYear, setDisplayMonthOrYear] = useState<{
    isVisibleMonth: boolean;
    isVisibleYear: boolean;
  }>({
    isVisibleMonth: false,
    isVisibleYear: false,
  });
  // the value of the input
  const [inputText, setInputText] = useState<string>('');

  // set the value of the input when the value of the date picker change
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
    },
    []
  );
  const handleSetValueDate = useCallback(() => {
    // if the calendar is not displayed , then no need to set any date => return
    if (!isOpen) {
      return;
    }
    // create an new Date with the text of the input
    const newDate = new Date(inputText);
    // check new Date is a valid datez
    if (newDate instanceof Date && !isNaN(newDate.getTime())) {
      // will set the input text manually to be to the good format ( if format is desired)
      setInputText(format(newDate, formatDate));
      // will change the state declared outside of the component
      onChange(newDate);
    } else {
      // if invalid set text input to be empty string
      // setInputText(format(new Date(), formatDate));
      setInputText('');
      //set the higher state to be the date of the day
      onChange(new Date());
    }
    setIsOpen(false);
  }, [formatDate, inputText, isOpen, onChange]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (
        e.code === 'Enter' ||
        e.code === 'NumpadEnter' ||
        e.code === 'Escape'
      ) {
        handleSetValueDate();
      }
    },
    [handleSetValueDate]
  );

  // open the calendar when the input is clicked
  const handleClick = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true);
    }
  }, [isOpen]);
  // used when click outside of the or when enter is pressed inside the input
  useOnClickOutside(container, handleSetValueDate);
  return (
    <DatePickerWrapper ref={container}>
      <InputDatePicker
        primarycolor={styles?.primarycolor}
        type="text"
        className="datepicker__input"
        id={id}
        value={inputText}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        onClick={handleClick}
        name={name}
        data-testid="datepicker-input"
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label={ariaLabels?.input ?? 'date of birth of the user'}
        aria-required={ariaRequired}
        aria-autocomplete="none"
        style={{ ...styles?.inputStyles }}
      />
      {isOpen && (
        <CalendarWrapper
          ref={containerRefModal}
          aria-modal="true"
          aria-label="Choose Date"
          role="dialog"
          primarycolor={styles?.primarycolor}
          className="calendar"
          style={{ ...styles?.calendarWrapperStyles }}
          data-testid="calendar-wrapper"
        >
          <Header
            value={value}
            onChange={onChange}
            minDate={minDate}
            maxDate={maxDate}
            primarycolor={styles?.primarycolor}
            formatMonth={formatMonth}
            formatYear={formatYear}
            ariaArrow={ariaLabels?.ariaArrow}
            styles={styles?.headerStyles}
            displaySelectMonthOrYear={displaySelectMonthOrYear}
            setDisplayMonthOrYear={setDisplayMonthOrYear}
          />
          {!displaySelectMonthOrYear.isVisibleYear &&
          !displaySelectMonthOrYear.isVisibleMonth ? (
            <Days
              value={value}
              setIsOpen={setIsOpen}
              setInputText={setInputText}
              onChange={onChange}
              formatDate={formatDate}
              minDate={minDate}
              maxDate={maxDate}
              iso={iso}
              formatDay={formatDay}
              styles={styles}
              withPrefix={withPrefix}
              withSuffix={withSuffix}
            />
          ) : null}
          {displaySelectMonthOrYear.isVisibleMonth && (
            <Select
              value={value}
              setDisplayMonthOrYear={setDisplayMonthOrYear}
              onChange={onChange}
              formatDate={formatDate}
              minDate={minDate}
              maxDate={maxDate}
              iso={iso}
              primarycolor={styles?.primarycolor}
              secondarycolor={styles?.secondarycolor}
              tertiarycolor={styles?.tertiarycolor}
              formatMonth={formatMonth}
              type="month"
              styles={styles?.select}
            />
          )}
          {displaySelectMonthOrYear.isVisibleYear && (
            <Select
              value={value}
              setDisplayMonthOrYear={setDisplayMonthOrYear}
              onChange={onChange}
              minDate={minDate}
              maxDate={maxDate}
              primarycolor={styles?.primarycolor}
              secondarycolor={styles?.secondarycolor}
              tertiarycolor={styles?.tertiarycolor}
              formatMonth={formatMonth}
              formatYear={formatYear}
              styles={styles?.select}
              type="year"
            />
          )}
        </CalendarWrapper>
      )}
    </DatePickerWrapper>
  );
};
