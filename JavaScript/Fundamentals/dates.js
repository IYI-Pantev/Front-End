const now = new Date();

const date2 = new Date(2025, 1, 14, 9, 0); // month 0, 1...; 9 am; 0 min;

const year = now.getFullYear();
console.log(year);
console.log(now.toDateString());
// common use in web app
now.toISOString();
