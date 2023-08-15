import { format, isAfter, isBefore, isSameDay, setDate } from 'date-fns';
import React, { useMemo } from 'react';
import styled from 'styled-components';
export const WrapperDayButtons = styled.div`
  overflow: hidden;
`;
export interface TypedButtonDay {
  onClick: () => void;
  className: string;
  primarycolor?: string;
  secondarycolor?: string;
  tertiarycolor?: string;
  mainArray?: boolean;
}

const ButtonDayStyled = styled.button<TypedButtonDay>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  aspect-ratio: 1/1;
  margin: 2px;
  padding: 0;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  color: ${props => props.primarycolor || 'teal'};
  border: 2px solid transparent;
  opacity: ${props => (props.mainArray ? 1 : 0.5)};
  &::after {
    position: absolute;
    content: '';
    pointer-events: none;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    filter: blur(4px);
    z-index: -1;
    display: none;
    opacity: 0.4;
    background-color: ${props => props.primarycolor || 'teal'};
  }
  &:hover {
    color: ${props => props.tertiarycolor || 'white'};
    background-color: ${props => props.primarycolor || 'teal'};
    border-color: ${props => props.primarycolor || 'teal'};
    &::after {
      display: block;
    }
  }
  &:disabled {
    opacity: 0.5;
  }
  &&.button-active {
    background-color: ${props => props.primarycolor || 'teal'};
    color: white;
    &:hover {
      opacity: 0.5;
    }
  }
`;
export interface IButtonDay {
  children: number;
  onChange: (date: Date) => void;
  value: Date;
  mainArray?: boolean;
  primarycolor?: string;
  tertiarycolor?: string;
  secondarycolor?: string;
  dayNumber: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  formatDate: string;
  minDate?: Date;
  maxDate?: Date;
  testId?: string;
  styles?: React.CSSProperties | undefined;
  suffix?: boolean;
  prefix?: boolean;
}
const ButtonDay = ({
  children,
  onChange,
  value,
  primarycolor,
  secondarycolor,
  tertiarycolor,
  dayNumber,
  mainArray,
  setIsOpen,
  setInputText,
  formatDate,
  minDate,
  maxDate,
  testId,
  styles,
  suffix,
  prefix,
}: IButtonDay) => {
  const myDay = setDate(value, dayNumber);
  const sameDay = mainArray && isSameDay(myDay, value);
  const buttonDayClass = useMemo(() => {
    if (prefix) return 'button-day button-day-prefix';
    if (suffix) return 'button-day button-day-suffix';
    return sameDay ? 'button-active button-day' : 'button-day';
  }, [prefix, sameDay, suffix]);
  const handleClick = () => {
    onChange(myDay);
    setInputText(format(myDay, formatDate));
    setIsOpen(false);
  };
  // so if myDay is before minDate => will return true
  // every button day that is greater than minDate is not disabled ( so false)
  const isMyDayAfterMinimumDate =
    minDate !== undefined && isBefore(myDay, minDate);
  // if the dateis after the maxDate, will return true
  const isMyDayBeforeMinimumDate =
    maxDate !== undefined && isAfter(myDay, maxDate);
  //if the date is between the minimum date and the maximum date
  const isBetWeen = isMyDayAfterMinimumDate || isMyDayBeforeMinimumDate;

  return (
    <ButtonDayStyled
      onClick={() => handleClick()}
      className={buttonDayClass}
      primarycolor={primarycolor}
      secondarycolor={secondarycolor}
      tertiarycolor={tertiarycolor}
      disabled={isBetWeen}
      aria-selected={sameDay}
      data-testid={testId}
      mainArray={mainArray}
      style={{ ...styles }}
    >
      {children}
    </ButtonDayStyled>
  );
};

export default ButtonDay;
