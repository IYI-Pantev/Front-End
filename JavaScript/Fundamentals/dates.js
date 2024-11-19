const now = new Date();
const date1 = new Date("November 15 2024 6:29");
const date2 = new Date(2025, 1, 14, 9, 0); // month 0, 1...; 9 am; 0 min;
console.log(date1);

const year = now.getFullYear();
console.log(year);
console.log(now.toDateString());
// common use in web app
now.toISOString();
