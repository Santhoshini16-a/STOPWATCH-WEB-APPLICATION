let minutes = 0, seconds = 0, milliseconds = 0;
let timer;
let running = false;

// DOM Elements
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
const msEl = document.getElementById("milliseconds");
const lapsEl = document.getElementById("laps");

function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(updateTime, 10);
  }
}

function pauseTimer() {
  running = false;
  clearInterval(timer);
}

function resetTimer() {
  running = false;
  clearInterval(timer);
  minutes = 0; seconds = 0; milliseconds = 0;
  updateDisplay();
  lapsEl.innerHTML = ""; // clear laps
}

function lapTime() {
  if (running) {
    const lap = document.createElement("li");
    lap.textContent = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
    lapsEl.appendChild(lap);
  }
}

function updateTime() {
  milliseconds++;
  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  updateDisplay();
}

function updateDisplay() {
  minEl.textContent = formatTime(minutes);
  secEl.textContent = formatTime(seconds);
  msEl.textContent = formatTime(milliseconds);
}

function formatTime(unit) {
  return unit < 10 ? "0" + unit : unit;
}

// Button Event Listeners
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", lapTime);
