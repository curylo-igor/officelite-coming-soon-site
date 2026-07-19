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

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".custom-select-wrapper");
  const trigger = document.querySelector(".custom-select-trigger");
  const selectedText = document.querySelector(".selected-text");
  const options = document.querySelectorAll(".custom-option");
  const hiddenInput = document.querySelector("#plan-picker");

  trigger.addEventListener("click", () => {
    wrapper.classList.toggle("open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selectedText.innerHTML = option.innerHTML;

      hiddenInput.value = option.getAttribute("data-value");

      wrapper.classList.remove("open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      wrapper.classList.remove("open");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("fname");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phonenumber");
  const companyInput = document.getElementById("company");

  const nameRegex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s\-]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{9}$/;
  const companyRegex = /^.{3,}$/;

  function validate(input, regex) {
    const value = input.value.trim();

    if (value === "") {
      input.classList.remove("valid", "invalid");
      return;
    }

    if (regex.test(value)) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  }

  if (nameInput)
    nameInput.addEventListener("input", () => validate(nameInput, nameRegex));
  if (emailInput)
    emailInput.addEventListener("input", () =>
      validate(emailInput, emailRegex),
    );
  if (phoneInput)
    phoneInput.addEventListener("input", () =>
      validate(phoneInput, phoneRegex),
    );
  if (companyInput)
    companyInput.addEventListener("input", () =>
      validate(companyInput, companyRegex),
    );
});
