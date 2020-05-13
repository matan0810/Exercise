window.onload = () => {
    showTime();
};

function clockHandle() {
    if (document.getElementsByClassName("clockButton")[0].innerText === "התחל") {
        clockInterval = setInterval(showTime, 1000);
        document.getElementsByClassName("clockButton")[0].innerText = "הפסק";
    }
    else {
        clearTimeout(clockInterval)
        document.getElementsByClassName("clockButton")[0].innerText = "התחל";
    }
}

function showTime() {
    let currentDate = new Date();

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    minutes = adjustTime(minutes);
    seconds = adjustTime(seconds);

    document.getElementsByClassName("clockText")[0].innerText = hours + ":" + minutes + ":" + seconds;
}

// add zero before the number if needed
function adjustTime(number) {
    if (number < 10) {
        number = "0" + number;
    }

    return number;
}