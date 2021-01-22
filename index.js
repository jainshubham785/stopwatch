let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let miliSeconds = document.getElementById("miliSeconds");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let stopBtn = document.getElementById("stop");

let curr_second = 0;
let curr_minute = 0;
let curr_hour = 0;
let curr_miliSec = 0;

function start() {
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    stopBtn.disabled = false;
    curr_second = seconds.textContent;
    curr_minute = minutes.textContent;
    curr_hour = hours.textContent;
    curr_miliSec = miliSeconds.textContent;
    intervalManager(true, incrementTimer, 10);
}

var intervalId = null;

function intervalManager(flag, incrementTimer, time) {
    if (flag)
        intervalId = setInterval(incrementTimer, time);
    else
        clearInterval(intervalId);
}


function incrementTimer() {
    curr_miliSec++;
    if (curr_miliSec == 100) {
        curr_miliSec = 0;
        curr_second++;
        if (curr_second == 60) {
            curr_second = 0;
            curr_minute++;
            if (curr_minute == 60) {
                curr_minute = 0;
                curr_hour++;
                if (curr_hour < 10)
                    hours.textContent = "0" + curr_hour;
                else
                    hours.textContent = curr_hour;
            }
            if (curr_minute < 10)
                minutes.textContent = "0" + curr_minute;
            else
                minutes.textContent = curr_minute;
        }
        if (curr_second < 10)
            seconds.textContent = "0" + curr_second;
        else
            seconds.textContent = curr_second;
    }
    if (curr_miliSec < 10)
            miliSeconds.textContent = "0" + curr_miliSec;
        else
            miliSeconds.textContent = curr_miliSec;


}


function pause() {
    let text = pauseBtn.textContent;
    if (text == "pause") {
        intervalManager(false);
        pauseBtn.textContent = "continue";
    }
    if (text == "continue") {
        intervalManager(true, incrementTimer, 10);
        pauseBtn.textContent = "pause";
    }
}

function stop() {
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
    startBtn.disabled = false;
    pauseBtn.innerText = "pause";
    createTimeStamp();
    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";
    miliSeconds.textContent = "00"
    intervalManager(false);
}

function createTimeStamp() {
    let node = document.getElementById("timestamp");
    let node1 = document.createElement("li");
    node.appendChild(node1);
    node1.textContent = hours.textContent + ":" + minutes.textContent + ":" + seconds.textContent + ":" + miliSeconds.textContent;
}