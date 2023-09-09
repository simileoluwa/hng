const answer = document.querySelectorAll('currentDay');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

days.forEach((day,index)=>{
    // Check if the index of day value is equal to the returned value of getDay()
    if(index == new Date().getDay()){
        console.log(day)}
    }
)

answer.textContent = " " + days;


const currentTime = document.getElementById("currentTime")
const currentDay = document.getElementById("currentDay")

// create new Date Object 
const date = new Date()

// get current day 
const theDay = date.getDay()

// array list of days of the week 
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// get the exact day from the "daysOFWeek" array 
const nameOfCurrentDay = daysOfWeek[theDay]

// display in html 
currentDay.textContent = " " +   nameOfCurrentDay

// get time in milliseconds 
const timeUTCInMilliseconds = date.getTime()

currentTime.textContent = " " +  timeUTCInMilliseconds