const text = "Monke 🎃";
let i = 0;
let forward = true;
let delay = 200;
let pause = false;

function animateTitle() {
  if (!pause) {
    if (forward) {
      i++;
      if (i === text.length) {
        forward = false;
        pause = true;
        setTimeout(() => pause = false, 1000);
      }
    } else {
      i--;
      if (i === 0) {
        forward = true;
        pause = true;
        setTimeout(() => pause = false, 500);
      }
    }
    document.title = text.substring(0, i);
  }
}

setInterval(animateTitle, delay);
