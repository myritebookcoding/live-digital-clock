const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

const hh = document.getElementById("hh");
const mm = document.getElementById("mm");
const ss = document.getElementById("ss");

const hDot = document.querySelector(".h_dot");
const mDot = document.querySelector(".m_dot");
const sDot = document.querySelector(".s_dot");

function updateClock(){

    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let ap = h >= 12 ? "PM" : "AM";

    h = h % 12 || 12;

    hours.innerHTML = `${String(h).padStart(2,'0')}<span>Hours</span>`;
    minutes.innerHTML = `${String(m).padStart(2,'0')}<span>Minutes</span>`;
    seconds.innerHTML = `${String(s).padStart(2,'0')}<span>Seconds</span>`;

    ampm.innerHTML = ap;

    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    hDot.style.transform = `rotate(${h * 30}deg)`;
    mDot.style.transform = `rotate(${m * 6}deg)`;
    sDot.style.transform = `rotate(${s * 6}deg)`;
}

updateClock();
setInterval(updateClock, 1000);
