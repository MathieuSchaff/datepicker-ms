import { IArrowHeaderAria, IDisplayMonthOrYear } from '../types';
interface IArrowButtonSize {
  size?: string;
}
interface IButtonChildrens {
  childrens?: JSX.Element[];
}
export type ArrowButtonType = (React.CSSProperties | undefined) &
  IButtonChildrens;

export interface IHeaderStyles {
  childrens?: JSX.Element[];
  ArrowButtonStyles?: React.CSSProperties | undefined;
  header?: React.CSSProperties | undefined;
  selectButton?: React.CSSProperties | undefined;
  arrowButtonSize?: string;
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
