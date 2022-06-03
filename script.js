let bSet = document.querySelector(".set");
let bStart = document.querySelector(".start");
let bStop = document.querySelector(".stop");
let bReset = document.querySelector(".reset");

let dParent = document.querySelector(".parent");

let divSet = document.createElement("div");

let elemMin = document.querySelector(".min");
let elemSec = document.querySelector(".sec");
let elemMsec = document.querySelector(".msec");

let min = +elemMin.textContent;
let sec = +elemSec.textContent;
let msec = +elemMsec.textContent;

let Interval;

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
  let test = `<div class="grid grid-flow-col gap-5 text-center auto-cols-max">

    <div class="flex flex-col p-2 bg-green-800 rounded-box text-neutral-content">
        <span class="countdown font-mono text-2xl">
            <span style="--value:${min};"></span>
        </span>
        Min
    </div>
    <div class="flex flex-col p-2 bg-green-800 rounded-box text-neutral-content">
        <span class="countdown font-mono text-2xl">
            <span style="--value:${sec};"></span>
        </span>
        Sec
    </div>
    <div class="flex flex-col p-2 bg-green-800 rounded-box text-neutral-content">
        <span class="countdown font-mono text-2xl">
            <span style="--value:${msec};"></span>
        </span>
        Ms
    </div>
</div>
`;
  divSet.innerHTML = test;

  dParent.appendChild(divSet);
};
