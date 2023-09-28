const targetDate = new Date("2023-11-17T00:00:00").getTime();
const timer = document.getElementById("timer");
const container = document.getElementById("container");
const dayElement = document.getElementById("day");
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");

function updateCountdown() {
const currentDate = new Date().getTime();
const timeDifference = targetDate - currentDate;

if (timeDifference <= 0) {
        timer.innerHTML = "Countdown expired!";
        container.style.backgroundImage = 'url("celebrate.gif")';
} 
else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        dayElement.innerHTML = days;
        hourElement.innerHTML = hours;
        minuteElement.innerHTML = minutes;
        secondElement.innerHTML = seconds;
}
}
setInterval(updateCountdown, 1000);
