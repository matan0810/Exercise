cages = [
    {
        'id': 1,
        'name': 'Fistook`s Home'
    },
    {
        'id': 2,
        'name': 'Metzada'
    },
    {
        'id': 3,
        'name': 'The Knesset'
    }
]

animals = [
    {
        'id': 1,
        'name': 'רוס',
        'cageId': 2,
        'legs': 2
    },
    {
        'id': 2,
        'name': 'צנדלר',
        'cageId': 1,
        'legs': 4
    },
    {
        'id': 3,
        'name': 'פיבי',
        'cageId': 3,
        'legs': 3
    },
    {
        'id': 4,
        'name': 'ברני',
        'cageId': 2,
        'legs': 0
    },
]

window.onload = () => {
    showTime();

    loadTable();

    $(".garbageIcon").click(function () {
        $(this).closest('tr').toggleClass("removedRow");
    });
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

loadTable = () => {
    animals.forEach(animal => {
        rowToAdd = '<tr class="animalTableRow">' +
            '<th class="animalTableCell">' + animal.id + '</th>' +
            '<th class="animalTableCell">' + animal.name + '</th>' +
            '<th class="animalTableCell">' + getCageName(animal.cageId) + '</th>' +
            '<th class="animalTableCell">' + animal.legs + '</th>' +
            '<th class="animalTableCell"><img class="garbageIcon" src="./images/garbage.png"></th>' +
            '</tr>';

        $('.animalTable').append(rowToAdd);
    });
}

getCageName = (cageId) => {
    wantedCage = cages.find((cage) => cage.id == cageId);

    return wantedCage.name;
}