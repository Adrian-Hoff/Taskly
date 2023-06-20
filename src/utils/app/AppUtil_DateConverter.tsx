//types
import { Type_AppUtil_DateConverter } from "../../types/@utils/auth/Type_AppUtil_DateConverter/Type_AppUtil_DateConverter";

export function AppUtil_DateConverter(utc: Type_AppUtil_DateConverter) {
  const date = new Date(utc);
  const fullYear = date.getFullYear();
  const monthIndex = date.getMonth();
  const weekDayIndex = date.getDay();
  const dayNumber = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const shortDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const shortMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function MonthTwoDigits() {
    return monthIndex > 8 ? monthIndex + 1 : 0 + "" + (monthIndex + 1);
  }
  function DayTwoDigits() {
    return dayNumber > 9 ? dayNumber : 0 + "" + dayNumber;
  }

  function HourTwoDigits() {
    return hour > 9 ? hour : 0 + "" + hour;
  }
  function MinuteTwoDigits() {
    return minute > 9 ? minute : 0 + "" + minute;
  }

  function DateFormats() {
    return {
      dbPath: `${String(date.getUTCDate()).padStart(2, "0")}-${String(
        date.getUTCMonth() + 1
      ).padStart(2, "0")}-${date.getUTCFullYear()}`,
      stringDMY: `${month[monthIndex]} ${DayTwoDigits()}, ${fullYear}`,
      stringDM: `${month[monthIndex]} ${DayTwoDigits()}`,
      stringMY: `${month[monthIndex]}, ${fullYear}`,
      "dd/mm/yyyy": `${DayTwoDigits()}/${MonthTwoDigits()}/${fullYear}`,
      "dd/mm/yy": `${DayTwoDigits()}/${MonthTwoDigits()}/${fullYear % 100}`,
    };
  }
  function Year() {
    return {
      number: date.getFullYear(),
      lastTwoDigits: date.getFullYear() % 100,
    };
  }
  function Month() {
    return {
      number: MonthTwoDigits(),
      fullString: month[date.getMonth()],
      shorString: shortMonth[date.getMonth()],
    };
  }
  function Day() {
    return {
      number: DayTwoDigits(),
      fullString: day[weekDayIndex],
      shorString: shortDay[weekDayIndex],
    };
  }
  function Hour() {
    return { number: HourTwoDigits() };
  }

  function Minute() {
    return { number: MinuteTwoDigits() };
  }

  function GetUTCTime() {
    const time = `${String(date.getUTCHours()).padStart(2, "0")}:${String(
      date.getUTCMinutes()
    ).padStart(2, "0")}`;

    return time;
  }

  return { DateFormats, Year, Month, Day, Hour, Minute, GetUTCTime };
}
