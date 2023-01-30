import { IArrowHeaderAria, IDisplayMonthOrYear } from "../types";
interface IArrowButtonSize {
  size?: string;
}
interface IButtonChildrens {
  childrens: JSX.Element[];
}
export type ArrowButtonType = (React.CSSProperties | undefined) &
  IArrowButtonSize &
  IButtonChildrens;

export interface IHeaderStyles {
  arrowButton?: ArrowButtonType;
  header: React.CSSProperties | undefined;
}

export interface IHeaderProps {
  value: any;
  onChange: React.Dispatch<React.SetStateAction<Date>>;
  minDate?: Date;
  maxDate?: Date;
  primarycolor?: string;
  formatMonth: string;
  formatYear: string;
  ariaArrow?: IArrowHeaderAria;
  displaySelectMonthOrYear: IDisplayMonthOrYear;
  setDisplayMonthOrYear: React.Dispatch<
    React.SetStateAction<IDisplayMonthOrYear>
  >;
  styles?: IHeaderStyles;
}
