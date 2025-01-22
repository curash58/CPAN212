import _ from "lodash";

const holidays = [
  { name: "Christmas", date: "2025-12-25" },
  { name: "Canada Day", date: "2025-07-01" },
  { name: "New Year", date: "2026-01-01" },
  { name: "Halloween", date: "2025-10-31" },
  { name: "Thanksgiving", date: "2025-11-27" },
  { name: "Easter", date: "2026-04-12" },
  { name: "Valentine's Day", date: "2026-02-14" },
  { name: "St. Patrick's Day", date: "2026-03-17" },
  { name: "Labour Day", date: "2025-09-01" },
  { name: "Victoria Day", date: "2025-05-19" },
  { name: "Remembrance Day", date: "2025-11-11" },
  { name: "Family Day", date: "2025-02-17" },
  { name: "Good Friday", date: "2026-04-03" },
  { name: "Boxing Day", date: "2025-12-26" },
  { name: "Civic Holiday", date: "2025-08-04" },
  { name: "National Indigenous Peoples Day", date: "2025-06-21" },
  { name: "National Flag of Canada Day", date: "2025-02-15" },
  { name: "National Day for Truth and Reconciliation", date: "2025-09-30" },
];

function daysUntilHoliday(date) {
  const today = new Date();
  const holidayDate = new Date(date);
  const timeDiff = holidayDate - today;
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
}

console.log("Days until each holiday:");
holidays.forEach((holiday) => {
  console.log(`${holiday.name}: ${daysUntilHoliday(holiday.date)} days`);
});

const randomHoliday = _.sample(holidays);
console.log("\nRandom holiday:");
console.log(`${randomHoliday.name}: ${randomHoliday.date}`);

const holidayNames = holidays.map((holiday) => holiday.name);
console.log("\nIndexes of specific holidays:");
console.log(`Christmas: ${_.indexOf(holidayNames, "Christmas")}`);
console.log(`Canada Day: ${_.indexOf(holidayNames, "Canada Day")}`);

