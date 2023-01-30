import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  position: relative;
  min-width: 250px;
  max-width: 300px;
`;
interface ICalendarWrapper {
  ref:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined;
  ['aria-modal']: string;
  ['aria-label']: string;
  role: string;
  primarycolor?: string;
  className: string;
}
export const CalendarWrapper = styled.div<ICalendarWrapper>`
  box-sizing: border-box;
  position: absolute;
  overflow: hidden;
  z-index: 10;
  background-color: white;
  margin-top: 10px;
  border: 1px solid red;
  border-color: ${({ primarycolor }) => primarycolor || 'teal'};
  color: ${({ primarycolor }) => primarycolor || 'black'};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
// interface IInputProps extends HTMLAttributes<HTMLInputElement> {
//   type?: React.HTMLInputTypeAttribute | undefined;
//   id?: string | undefined;
//   value?: string | number | readonly string[] | undefined;
//   onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
//   placeholder?: string | undefined;
//   onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
//   onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
//   onClick?: React.MouseEventHandler<HTMLInputElement> | undefined;
//   name?: string | undefined;
//   role?: React.AriaRole | undefined;
//   "aria-expanded"?: Boolean | undefined;
//   "aria-haspopup"?: string;
//   "aria-label"?: string | undefined;
//   "aria-required"?: boolean | undefined;
//   "aria-autocomplete"?: string;
//   inputStyles?: React.CSSProperties | undefined;
//   className: string;
//   primarycolor?: string;
// }

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  primarycolor?: string;
}

export const InputDatePicker = styled.input<IInputProps>`
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  border-style: solid;
  border-width: 2px;
  border-color: ${props => props.primarycolor || 'teal'};
  background-color: #ffffff;
  color: ${props => props.primarycolor || 'teal'};
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  outline: none;
  &:hover {
    outline: none;
  }
  &::placeholder {
    font-size: '1.2rem';
    font-weight: 500;
    opacity: 0.7;
  }
`;
