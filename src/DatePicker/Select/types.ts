import type { IArrowHeaderAria, IDisplayMonthOrYear } from "../types";

export interface ISelectStyles {
  selectContainer?: React.CSSProperties | undefined;
  selectOptions?: React.CSSProperties | undefined;
}
export interface IButtonSelect {
  key: string;
  onClick: (monthOrYaer: number) => void;
  disabled?: boolean;
  primarycolor?: string;
  secondarycolor?: string;
}
export interface Option {
  value: string;
  idx: string;
}
interface IMonthOrYearIsSameThanValue {
  sameYearOrMonth: boolean;
}
export type IMonthOrYearFormated = Option & IMonthOrYearIsSameThanValue;
export interface ISelectProps {
  value: Date;
  maxDate?: Date;
  minDate?: Date;
  onChange: React.Dispatch<React.SetStateAction<Date>>;
  type: "year" | "month";
  primarycolor?: string;
  secondarycolor?: string;
  tertiarycolor?: string;
  formatMonth?: string;
  formatYear?: string;
  ariaArrow?: IArrowHeaderAria;
  setDisplayMonthOrYear: React.Dispatch<
    React.SetStateAction<IDisplayMonthOrYear>
  >;
  formatDate?: string;
  iso?: boolean;
  styles?: ISelectStyles;
}
