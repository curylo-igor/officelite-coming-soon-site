const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 30);

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

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();

  const distance = targetDate.getTime() - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const padNumber = (number) => (number < 10 ? `0${number}` : number);

  document.getElementById("days").innerText = padNumber(days);
  document.getElementById("hours").innerText = padNumber(hours);
  document.getElementById("minutes").innerText = padNumber(minutes);
  document.getElementById("seconds").innerText = padNumber(seconds);

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
  }
}, 1000);
