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
    sideBarHandle()
    garbageIconHandle();
    rowDeleteHandle();
    specificDetailsHandle();
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

sideBarHandle = () => {
    $('.sideBarButton').click(function () {
        $('.visible').addClass('hidden');
        $('.visible').removeClass('visible');

        let chosenScreen = $(this).attr('rel');
        $("." + chosenScreen).removeClass('hidden');
        $("." + chosenScreen).addClass('visible');

        // Clears the specific details box
        $('.specificAnimalDetails').empty();
    });
}

loadTable = () => {
    animals.forEach(animal => {
        rowToAdd = '<tr class="animalTableRow">' +
            '<th class="animalTableCell">' + animal.id + '</th>' +
            '<th class="animalTableCell">' + animal.name + '</th>' +
            '<th class="animalTableCell">' + getCageName(animal.cageId) + '</th>' +
            '<th class="animalTableCell">' + animal.legs + '</th>' +
            '<th class="garbageTableCell"><img class="garbageIcon" src="./images/garbage.png"></th>' +
            '</tr>';

        $('.animalTable').append(rowToAdd);
    });
}

getCageName = (cageId) => {
    wantedCage = cages.find((cage) => cage.id == cageId);

    return wantedCage.name;
}

getAnimalById = (animalId) => {
    wantedAnimal = animals.find((animal) => animal.id == animalId);

    return wantedAnimal;
}

removeAnimalById = (animalId) => {
    animals = animals.filter((animal) => animal.id != animalId);
}

garbageIconHandle = () => {
    $(".garbageIcon").click(function () {
        $(this).closest('tr').toggleClass("removedRow");

        if (!$(".animalTableRow").hasClass('removedRow')) {
            $('.saveAnimalButton').attr('disabled', 'disabled'); s
        }
        else {
            $('.saveAnimalButton').removeAttr('disabled');
        }
    });
}

rowDeleteHandle = () => {
    $('.saveAnimalButton').click(function () {

        $('.removedRow').each(function () {
            removeAnimalById($(this).children().first().text());
        });

        $('.removedRow').remove();

        $('.saveAnimalButton').attr('disabled', 'disabled');
    });
}

specificDetailsHandle = () => {
    $('.animalTableCell').click(function () {
        $('.chosenRow').removeClass('chosenRow');
        $(this).parent().addClass('chosenRow');

        let wantedAnimal = getAnimalById($(this).siblings().first().text())

        textToAdd = `<p class="specificAnimalHeader">נבחרה חיה מספר ${wantedAnimal.id}</p>` +
        `<p>שם החיה: ${wantedAnimal.name}, נמצאת בכלוב:
         ${getCageName(wantedAnimal.cageId)}, מספר רגליים לחיה: ${wantedAnimal.legs}`

        $('.specificAnimalDetails').html(textToAdd);
    });
}