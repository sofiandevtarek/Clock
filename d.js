function clock() {
  const date = new Date();

  let houres = date.getHours();
  let minutes = date.getMinutes();
  let secondes = date.getSeconds();
  let period = "Am";

  if (houres == 0) {
    houres = 12;
  } else if (houres >= 12) {
    houres= houres - 12;
    period = "Pm";
  }
  houres = houres < 10 ? "0" + houres : houres;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes <10 ? "0" + secondes : secondes;

  let time = `${houres} ⌚ ${minutes} ⌚ ${secondes} (${period})`;
  document.querySelector(".digital-clock").innerText = time;
}

setInterval(clock, 1000);
clock();
