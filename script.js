let bSet = document.querySelector(".set");
let bStart = document.querySelector(".start");
let bStop = document.querySelector(".stop");
let bReset = document.querySelector(".reset");

let dParent = document.querySelector(".parent");

let elemMin = document.querySelector(".min");
let elemSec = document.querySelector(".sec");
let elemMsec = document.querySelector(".msec");

let min = +elemMin.textContent;
let sec = +elemSec.textContent;
let msec = +elemMsec.textContent;

let Interval;
let setArray = [];

bStart.onclick = function () {
  Interval = setInterval(timer, 10);
  bStart.classList.add("hidden");
  bStop.classList.remove("hidden");
};
bStop.onclick = function () {
  clearInterval(Interval);
  bStart.classList.remove("hidden");
  bStop.classList.add("hidden");
};
bReset.onclick = function () {
  clearInterval(Interval);
  setArray = [];
  dParent.innerHTML = "";
  min = "0".padStart(2, "0");
  sec = "00";
  msec = "00";
  elemMsec.innerHTML = msec;
  elemSec.innerHTML = sec;
  elemMin.innerHTML = sec;
  if (bStart.classList.contains("hidden")) {
    bStart.classList.remove("hidden");
    bStop.classList.add("hidden");
  }
};

function timer() {
  msec++;
  if (msec > 9) {
    elemMsec.innerHTML = msec;
  }
  if (msec > 99) {
    sec++;
    elemSec.innerHTML = "0" + sec;
    msec = 0;
    elemMsec.innerHTML = "0" + 0;
  }
  if (sec > 9) {
    elemSec.innerHTML = sec;
  }
  if (sec > 59) {
    min++;
    elemMin.innerHTML = "0" + min;
    sec = 0;
    elemSec.innerHTML = "0" + 0;
  }
  if (min > 9) {
    elemMin.innerHTML = min;
  }
}

bSet.onclick = function () {
  setArray.push({ min: min, sec: sec, msec: msec });
  dParent.innerHTML = "";
  setArray.map((item) => {
    let div = document.createElement("div");

    div.classList = "flex gap-3 text-center";
    dParent.appendChild(div);

    Object.values(item).forEach((value) => {
      const span = document.createElement("span");
      span.classList = "font-mono text-2xl p-2 bg-cyan-700 rounded-box text-neutral-content";
      span.innerHTML = value;
      div.appendChild(span);
    });
  });
  console.log(setArray);
};
