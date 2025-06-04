// Target date: 4 July 2025
const countDownDate = new Date("July 4, 2025 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);
// JavaScript to handle active class toggle on navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('.nav-links a').forEach(nav => nav.classList.remove('active'));
    this.classList.add('active');
  });
});
