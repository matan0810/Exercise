window.onload = () => {
    $(document).ready(function () {
        $("p").click(function () {
            $(this).hide();
        });
    });

    showTime();
};

// Starts or stops the clock interval
clockHandle = () => {
    if (document.getElementsByClassName("clockButton")[0].innerText === "התחל") {
        showTime()
        clockInterval = setInterval(showTime, 1000);
        document.getElementsByClassName("clockButton")[0].innerText = "הפסק";
    }
    else {
        clearTimeout(clockInterval)
        document.getElementsByClassName("clockButton")[0].innerText = "התחל";
    }
}

// Updates the clock text to current time
showTime = () => {
    let currentDate = new Date();

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    minutes = adjustTime(minutes);
    seconds = adjustTime(seconds);

    document.getElementsByClassName("clockText")[0].innerText = hours + ":" + minutes + ":" + seconds;
}

// Add zero before the number if needed
adjustTime = (number) => {
    if (number < 10) {
        number = "0" + number;
    }

    return number;
}

animal = [
    {
        'id': 1,
        'name': 'חתול',
        'cageId': 2,
        'legs': 4
    },
    {
        'id': 2,
        'name': 'כלב',
        'cageId': 1,
        'legs': 4
    },
     {
        'id': 3,
        'name': 'אריה',
        'cageId': 3,
        'legs': 4
    },
     {
        'id': 4,
        'name': 'נחש',
        'cageId': 2,
        'legs': 0
    },
]

cages = [{1: 'Fistook`s Home'}, {2: 'The Museum of Art, Tel Aviv'}, {3: 'The Knesset'}]
