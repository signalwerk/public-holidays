import moment from 'moment';

export function relativeDate(year, month, day, weekday) {
  let date = moment.utc({
    year: year,
    month: month - 1,
    day: day
  });

  let delta = weekday - date.weekday();

  return date.add(delta, "days");
}
// // from here
// // https://github.com/ChrLipp/calendar-standalone/blob/master/src/calendar/CalendarHelper.ts
//         /**
//          * Calculates a date relative to a given reference date. The result date is specified
//          * by the weekday and the amount of weeks between reference date and result date.
//          * E.g. calculate the first sunday before December, 25th will calculate the
//          * 4th Advent with the following call:
//          *      calcDateByNthWeekdayRelativeToDate(25, 12, 2015, -1, Weekday.Sunday);
//          * @param day       day of reference date
//          * @param month     month of reference date
//          * @param year      year of reference date
//          * @param weekCount amount of weeks relative to the reference date
//          * @param weekday   the Weekday of the result
//          * @returns {{day, month, year}|CalendarDay}
//          */
//         calcDateByNthWeekdayRelativeToDate => (day, month, year, weekCount, weekday) {
//             if (weekCount == 0)
//                 throw new Error("weekCount must not be 0");
//             // set the reference date
//             var dateReference = {
//                 day: day,
//                 month: month,
//                 year: year
//             };
//             // adjust to the given week day and the week
//             var delta = weekday - CalendarHelper.getWeekday(dateReference);
//             if ((weekCount < 0) && (delta < 0)) {
//                 weekCount++;
//             }
//             else if ((weekCount > 0) && (delta > 0)) {
//                 weekCount--;
//             }
//             return CalendarHelper.addDays(dateReference, delta + weekCount * 7);
//         };
