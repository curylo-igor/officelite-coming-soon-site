const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 45);

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const formattedDate = `${targetDate.getDate()} ${months[targetDate.getMonth()]} ${targetDate.getFullYear()}`;

document.getElementById("target-date").innerText = formattedDate;
