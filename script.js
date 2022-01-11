document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change")
  })
});

const icons = document.querySelectorAll(".intro-icons i");
let i = 1;

setInterval(() => {
  i++;

  const icon = document.querySelector(".intro-icons .change");
  icon.classList.remove("change");

  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 4000);

// Countdown
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const countdownTwo = document.getElementById("countdown")

const currentYear = new Date().getFullYear()+1;

const celineBday = new Date(`July 31 ${currentYear} 00:00:00`);

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = celineBday - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
  1;
}

// Run every second
setInterval(updateCountdown, 1000);

// If I change the size of the window page will reload
// window.addEventListener("resize", () => {
//   window.location.reload();
// });