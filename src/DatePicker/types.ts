import type { IDaysStyles } from "./Days/types";
import type { IHeaderStyles } from "./Header/types";
import type { ISelectStyles } from "./Select/types";

export type IStyles = {
  primarycolor?: string;
  secondarycolor?: string;
  tertiarycolor?: string;
  inputStyles?: React.CSSProperties | undefined;
  calendarWrapperStyles?: React.CSSProperties | undefined;
  headerStyles?: IHeaderStyles;
  days?: IDaysStyles;
  select?: ISelectStyles;
};

export interface IArrowHeaderAria {
  prevYear?: string;
  prevMonth?: string;
  nextMonth?: string;
  nextYear?: string;
  customSelectMonth?: string;
  customSelectYear?: string;
}
export type AriaLabels = {
  input?: string;
  ariaArrow?: IArrowHeaderAria;
};
export interface IDisplayMonthOrYear {
  isVisibleMonth: boolean;
  isVisibleYear: boolean;
}
// types of the props of the datepicker
export interface IDatePickerProps {
  id: string;
  value: Date;
  onChange: React.Dispatch<React.SetStateAction<Date>>;
  name: string;
  formatDate?: string;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  ariaRequired?: boolean;
  iso?: boolean;
  formatDay?: string;
  formatMonth?: string;
  formatYear?: string;
  ariaLabels?: AriaLabels;
  styles?: IStyles;
  withPrefix?: boolean;
  withSuffix?: boolean;
}
