//global referecece to document
var currentDayEl = document.getElementById("currentDay");
//display current day
function displayDay () {
    var numDay = moment().isoWeekday();
    switch (numDay) {
        case 1 :
            currentDayEl.textContent = "Monday";
            break;
        case 2 :
            currentDayEl.textContent = "Tueday";
            break;
        case 3 :
            currentDayEl.textContent = "Wednesday";
            break;
        case 4 :
            currentDayEl.textContent = "Thursday";
            break;
        case 5 : 
            currentDayEl.textContent = "Friday";
            break;
        case 6 :
            currentDayEl.textContent = "Saturday";
            break;
        case 7 :
            currentDayEl.textContent = "Sunday";
            break;                        
    }
 
}

// load from local storage

// saves to local storage

// save text entry when save button is pressed
document.getElementById("save-hour-9").addEventListener("click", function() {
    var 
});
document.getElementById("save-hour-10").addEventListener("click", function() {
    
});
document.getElementById("save-hour-11").addEventListener("click", function() {
    
});
document.getElementById("save-hour-12").addEventListener("click", function() {
    
});
document.getElementById("save-hour-1").addEventListener("click", function() {
    
});
document.getElementById("save-hour-2").addEventListener("click", function() {
    
});
document.getElementById("save-hour-3").addEventListener("click", function() {
    
});
document.getElementById("save-hour-4").addEventListener("click", function() {
    
});
document.getElementById("save-hour-5").addEventListener("click", function() {
    
});










































displayDay();