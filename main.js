const houresHand = document.querySelector(".houres-hand");
const minutesHand = document.querySelector(".minutes-hand");
const secondesHand = document.querySelector(".secondes-hand");
const goToDigital = document.querySelector(".go-to-digital");

function setDate() {
  const now = new Date();
  // Houres
  const houres = now.getHours();
  const houresDegress = (houres / 12) * 360 + 90;
  houresHand.style.transform = `rotate(${houresDegress}deg)`;
  // Minutes
  const minutes = now.getMinutes();
  const minutesDegress = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegress}deg)`;
  // Secondes
  const secondes = now.getSeconds();
  const secondesDegress = (secondes / 60) * 360 + 90;
  secondesHand.style.transform = `rotate(${secondesDegress}deg)`;
}

setInterval(setDate, 1000);
setDate();
