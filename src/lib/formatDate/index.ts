import { format } from "date-fns";

/**
 * Formats a date value to `LLL dd, y` format.
 *
 * @param date - date object
 * @returns date string in `LLL dd, y` format
 *
 * @example
 * formatDate(new Date("2024-08-14")) // returns "Aug 14, 2024"
 */
export const formatDate = (date: Date) => {
  return format(date, "LLL dd, y");
};
