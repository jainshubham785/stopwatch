let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let stopBtn = document.getElementById("stop");

function start() {
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    stopBtn.disabled = false;
    intervalManager(true, incrementTimer, 1000);
}

var intervalId = null;

function intervalManager(flag, incrementTimer, time) {
    if (flag)
        intervalId = setInterval(incrementTimer, time);
    else
        clearInterval(intervalId);
}


function incrementTimer() {
    if (seconds.textContent == "60") {
        seconds.textContent = "00";
        minutes.textContent = Number(minutes.textContent) + 1;
        if (Number(minutes.textContent) < 10) {
            minutes.textContent = "0" + Number(minutes.textContent);
        }
    }
    if (minutes.textContent == "60") {
        minutes.textContent = "00";
        hours.textContent = Number(hours.textContent) + 1;
        if (Number(hours.textContent) < 10) {
            hours.textContent = "0" + Number(hours.textContent);
        }
    }
    seconds.textContent = Number(seconds.textContent) + 1;
    if (Number(seconds.textContent) < 10) {
        seconds.textContent = "0" + Number(seconds.textContent);
    }
}


function pause() {
    let text = pauseBtn.textContent;
    if (text == "pause") {
        intervalManager(false);
        pauseBtn.textContent = "continue";
    }
    if (text == "continue") {
        intervalManager(true, incrementTimer, 1000);
        pauseBtn.textContent = "pause";
    }
}

function stop() {
    pauseBtn.disabled = true;
    stopBtn.disabled = true;
    startBtn.disabled = false;
    intervalManager(false);
    createTimeStamp();
    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";
}

function createTimeStamp() {
    let node = document.getElementById("timestamp");
    let node1 = document.createElement("li");
    node.appendChild(node1);
    node1.textContent = hours.textContent + ":" + minutes.textContent + ":" + seconds.textContent;
}
