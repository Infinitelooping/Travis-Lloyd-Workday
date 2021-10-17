//global referecece to document
var currentDayEl = document.getElementById("currentDay");
var adjustedTime = 0;
//display current day
function displayDay() {
    var numDay = moment().isoWeekday();
    switch (numDay) {
        case 1:
            currentDayEl.textContent = "Monday";
            break;
        case 2:
            currentDayEl.textContent = "Tueday";
            break;
        case 3:
            currentDayEl.textContent = "Wednesday";
            break;
        case 4:
            currentDayEl.textContent = "Thursday";
            break;
        case 5:
            currentDayEl.textContent = "Friday";
            break;
        case 6:
            currentDayEl.textContent = "Saturday";
            break;
        case 7:
            currentDayEl.textContent = "Sunday";
            break;
    }

}
function adjustTime(i) {
    switch (i) {
        case 0:
            adjustedTime = 9;
            break;
        case 1:
            adjustedTime = 10;
            break;
        case 2:
            adjustedTime = 11;
            break;
        case 3:
            adjustedTime = 12;
            break;
        case 4:
            adjustedTime = 1;
            break;
        case 5:
            adjustedTime = 2;
            break;
        case 6:
            adjustedTime = 3;
            break;
        case 7:
            adjustedTime = 4;
            break;
        case 8:
            adjustedTime = 5;
    }
}
//update event function
function updateColors() {
    var eventTime = document.querySelectorAll("[data-time]");
    for (var i = 0; i < eventTime.length; i++) {
        adjustTime(i);
        var event = parseInt(eventTime[i].getAttribute("data-time"));
        if (event > moment().format("H")) {
            document.getElementById("text-" + adjustedTime).classList.remove("future", "present", "past", "col-10", "textarea");
            document.getElementById("text-" + adjustedTime).classList.add("col-10", "textarea", "future");
        } else if (event === parseInt(moment().format("H"))) {
            document.getElementById("text-" + adjustedTime).classList.remove("future", "present", "past", "col-10", "textarea");
            document.getElementById("text-" + adjustedTime).classList.add("col-10", "textarea", "present");

        } else {
            document.getElementById("text-" + adjustedTime).classList.remove("future", "present", "past", "col-10", "textarea");
            document.getElementById("text-" + adjustedTime).classList.add("col-10", "textarea", "past");
        }
    }
}


//sets timer to check update past present future periodically.
function updateEventTime() {
    setInterval(function () {
         //updates colors of time blocks to past, present, future
       updateColors();
    }, 300000)
}


//checks if the current i iterator is the a valid business hour for us to print to calander.
function isBusHour(i) {
    if (i > 12 || (i > 5 && i < 9)) {
        return false;
    } else {
        return true;
    }
}


// load from local storage
function loadEvents() {
   
    //updates colors of time blocks to past, present, future
    updateColors();

    //checks for enpty storage
    if (localStorage.length === 0) {
        return;
    }
    //updates storage content to proper time blocks
    for (var i = 1; i <= 12; i++) {
        console.log(i);
        if (isBusHour(i)) {
            var calEvent = JSON.parse(localStorage.getItem("hour-" + i + "-saved"));
            if (calEvent === null) {
                continue;
            }
            console.log(calEvent);
            document.getElementById("text-" + i).value = calEvent;
        }
    }
}

// save text entry when save button is pressed
document.getElementById("save-hour-9").addEventListener("click", function (event) {
    event.preventDefault();
    var text9 = document.getElementById("text-9").value.trim();
    localStorage.setItem("hour-9-saved", JSON.stringify(text9));
});
document.getElementById("save-hour-10").addEventListener("click", function (event) {
    event.preventDefault();
    var text10 = document.getElementById("text-10").value.trim();
    localStorage.setItem("hour-10-saved", JSON.stringify(text10));
});
document.getElementById("save-hour-11").addEventListener("click", function (event) {
    event.preventDefault();
    var text11 = document.getElementById("text-11").value.trim();
    localStorage.setItem("hour-11-saved", JSON.stringify(text11));
});
document.getElementById("save-hour-12").addEventListener("click", function (event) {
    event.preventDefault();
    var text12 = document.getElementById("text-12").value.trim();
    localStorage.setItem("hour-12-saved", JSON.stringify(text12));
});
document.getElementById("save-hour-1").addEventListener("click", function (event) {
    event.preventDefault();
    var text1 = document.getElementById("text-1").value.trim();
    localStorage.setItem("hour-1-saved", JSON.stringify(text1));
});
document.getElementById("save-hour-2").addEventListener("click", function (event) {
    event.preventDefault();
    var text2 = document.getElementById("text-2").value.trim();
    localStorage.setItem("hour-2-saved", JSON.stringify(text2));
});
document.getElementById("save-hour-3").addEventListener("click", function (event) {
    event.preventDefault();
    var text3 = document.getElementById("text-3").value.trim();
    localStorage.setItem("hour-3-saved", JSON.stringify(text3));
});
document.getElementById("save-hour-4").addEventListener("click", function (event) {
    event.preventDefault();
    var text4 = document.getElementById("text-4").value.trim();
    localStorage.setItem("hour-4-saved", JSON.stringify(text4));
});
document.getElementById("save-hour-5").addEventListener("click", function (event) {
    event.preventDefault();
    var text5 = document.getElementById("text-5").value.trim();
    localStorage.setItem("hour-5-saved", JSON.stringify(text5));
});

updateEventTime();
loadEvents();
displayDay();