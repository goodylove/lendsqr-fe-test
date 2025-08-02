import { format } from "date-fns";

export function dateFormatWithTime(
  date: Date,
  formater?: string
): { date: string; time: string } {
  return {
    date: format(date, formater || "MMM dd yyyy"),
    time: format(date, formater || "p"),
  };
}
