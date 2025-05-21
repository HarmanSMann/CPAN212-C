import lodash from "lodash";

const holidays = [
  { name: "Christmas", date: new Date("2025-12-25") },
  { name: "Canada Day", date: new Date("2025-07-01") },
  { name: "New Years", date: new Date("2026-01-01") },
];

let today = new Date();
holidays.forEach((holiday) => {
  const difference = holiday.date - today;
  const inDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
  console.log(`${holiday.name} is in ${inDays} days`);
});

const randomHoliday = lodash.sample(holidays);
console.log(randomHoliday.name);

const indexOfChristmas = lodash.findIndex(holidays, { name: "Christmas" });
const indexOfCanada = lodash.findIndex(holidays, { name: "Canada Day" });
console.log(`Index of Christmas: ${indexOfChristmas}`);
console.log(`Index of Canada Day: ${indexOfCanada}`);
