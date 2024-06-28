// Типізуйте функцію isWeekend яка приймає день тижня з
// enumDayOfWeek і повертає boolean значення, що вказує,
// чи це день робочий чи вихідний.

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  console.log(day === DayOfWeek.Saturday || day === DayOfWeek.Sunday);
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

isWeekend(DayOfWeek.Monday);
isWeekend(DayOfWeek.Saturday);
