import {
  format,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  startOfYear,
  endOfYear,
  eachMonthOfInterval,
} from "date-fns";

/**
 *
 * @param formatDay .specifies the language and region to use for the formatting
 * @returns
 */
export const getWeekDays = (formatDay: string): string[] => {
  const now = new Date();
  const weekDays: string[] = [];
  const start = startOfWeek(now);
  const end = endOfWeek(now);
  eachDayOfInterval({ start, end }).forEach((day) => {
    weekDays.push(format(day, formatDay));
  });
  return weekDays;
};
export interface MonthOrYearProps {
  value: string;
  idx: string;
}
export const getMonthsNames = (formatMonth = "LLLL"): MonthOrYearProps[] => {
  const now = new Date();
  const monthsYear: MonthOrYearProps[] = [];
  const start = startOfYear(now);
  const end = endOfYear(now);
  eachMonthOfInterval({ start, end }).forEach((month) => {
    monthsYear.push({
      value: format(month, formatMonth), //janvier
      idx: format(month, "M"), //0
    });
  });
  return monthsYear;
};

// export const getWeekDays = ({ locale }: { locale: Locale}): string[] => {
//     const now = new Date();
//     const weekDays: string[] = [];
//     const start = startOfWeek(now, { locale });
//     const end = endOfWeek(now, { locale });
//     eachDayOfInterval({ start, end }).forEach(day => {
//         weekDays.push(format(day, "EEEEEE", { locale }));
//     });
//     return weekDays;
//   };
export const previousDaysArray = (start: number, end: number) => {
  const arr: number[] = [];
  for (let i = 1; i < end; i++) {
    if (i >= start) {
      arr.push(i);
    }
  }
  return arr;
};
export const isSameTime = (firstDate: Date, secondDate: Date): boolean => {
  return new Date(firstDate).getTime() === new Date(secondDate).getTime();
};
