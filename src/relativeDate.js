import moment from "moment";

export function relativeDate(year, month, day, weekday) {
  let date = moment.utc({
    year: year,
    month: month - 1,
    day: day
  });

  let delta = weekday - date.weekday();

  return date.add(delta, "days");
}
