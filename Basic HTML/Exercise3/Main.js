let cages = [
    {
        "id": 1,
        "name": "At Home"
    },
    {
        "id": 2,
        "name": "Metzada"
    },
    {
        "id": 3,
        "name": "The Knesset"
    }
]

let animals = [
    {
        "id": 1,
        "name": "רוס",
        "cageId": 2,
        "legs": 2
    },
    {
        "id": 2,
        "name": "צנדלר",
        "cageId": 1,
        "legs": 4
    },
    {
        "id": 3,
        "name": "פיבי",
        "cageId": 3,
        "legs": 3
    }
]

window.onload = () => {
    showTime();
    updateTable();
    sideBarHandle()
    rowDeleteHandle();
    updateCageForm();
    handleNewAnimalSubmit();
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
    $(".sideBarButton").click(function () {
        if (!$(this).hasClass("currentScreen")) {
            $(".currentScreen").removeClass("currentScreen");
            $(this).addClass("currentScreen");
        }

        $(".visible").addClass("hidden");
        $(".visible").removeClass("visible");

        let chosenScreen = $(this).attr("id");
        $("." + chosenScreen).removeClass("hidden");
        $("." + chosenScreen).addClass("visible");

        // Clears the specific details box
        $(".specificAnimalDetails").empty();
        $(".chosenRow").removeClass("chosenRow");
    });
}

updateTable = () => {
    $(".animalTable").empty();

    let rowToAdd = `<tr class="animalTableHeader">
        <th class="animalTableProperty">מספר חיה</th>
        <th class="animalTableProperty">שם החיה</th>
        <th class="animalTableProperty">כלוב</th>
        <th class="animalTableProperty">מספר הרגליים</th>
        <th class="garbageEmptyTableHeader"></th>
    </tr>`

    $(".animalTable").append(rowToAdd);

    animals.forEach(animal => {
        rowToAdd = `<tr class="animalTableRow">
            <th class="animalTableCell idCell">${animal.id}</th>
            <th class="animalTableCell">${animal.name}</th>
            <th class="animalTableCell">${getCageName(animal.cageId)}</th>
            <th class="animalTableCell">${animal.legs}</th>
            <th class="garbageTableCell"><img class="garbageIcon" src="./images/garbage.png"></th>
            </tr>`;

        $(".animalTable").append(rowToAdd);
    });

    garbageIconHandle();
    specificDetailsHandle();
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
        $(this).closest("tr").toggleClass("removedRow");

        if (!$(".animalTableRow").hasClass("removedRow")) {
            $(".saveAnimalButton").attr("disabled", "disabled");
        }
        else {
            $(".saveAnimalButton").removeAttr("disabled");
        }
    });
}

rowDeleteHandle = () => {
    $(".saveAnimalButton").click(function () {

        $(".removedRow").each(function () {
            if ($(this).hasClass("chosenRow")) {
                $(".specificAnimalDetails").empty();
            }

            removeAnimalById($(this).children().first().text());
        });

        $(".removedRow").remove();

        $(".saveAnimalButton").attr("disabled", "disabled");
    });
}

specificDetailsHandle = () => {
    $(".animalTableCell").click(function () {
        $(".chosenRow").removeClass("chosenRow");
        $(this).parent().addClass("chosenRow");

        let wantedAnimal = getAnimalById($(this).parent().children().first().text());

        textToAdd = `<p class="specificAnimalHeader">נבחרה חיה מספר ${wantedAnimal.id}</p>` +
            `<p>שם החיה: ${wantedAnimal.name}, נמצאת בכלוב:
         ${getCageName(wantedAnimal.cageId)}, מספר רגליים לחיה: ${wantedAnimal.legs}`

        $(".specificAnimalDetails").html(textToAdd);
    });
}

updateCageForm = () => {
    cages.forEach(cage => {
        cageToAdd = `<option value="${cage.id}">${cage.name}</option>`
        $(".cageSelect").append(cageToAdd);
    });
}

handleNewAnimalSubmit = () => {
    $(".newAnimalForm").submit(function () {
        if (!validateId($(".inputPropertyBox").first().val())) {
            alert("מספר החיה לא תקין או כבר קיים")
        }
        else {
            newAnimal = {}
            $(".inputPropertyBox").each(function () {
                newAnimal[$(this).attr("name")] = $(this).val();
            })

            animals.push(newAnimal);

            updateTable();
            
            $(".currentScreen").removeClass("currentScreen");
            $("#animalsScreen").addClass("currentScreen");

            $(".visible").addClass("hidden");
            $(".visible").removeClass("visible");

            $(".animalsScreen").removeClass("hidden");
            $(".animalsScreen").addClass("visible");
        }
    });
}

validateId = (id) => {
    return (id) && (!isNaN(id)) && (id > 0) && (getAnimalById(id) == undefined)
}