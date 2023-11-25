const hoursTime = document.querySelector(".hoursTime")
const minutesTime = document.querySelector(".minutesTime")
const secondTime = document.querySelector(".secondTime")
const AMPM = document.querySelector(".AMPM")


function dateTime (){
    const d = new Date();
    let hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds()
    let ampm = d.getHours() >= 12 ? "PM" : "AM";

   if(d.getHours() > 12){
        hour = d.getHours() - 12;
    }else{
        hour = d.getHours()
    }
    hoursTime.innerHTML = hour
    minutesTime.innerHTML = min
    secondTime.innerHTML = sec
    AMPM.innerHTML = ampm
    const day = ["Sunday", "Monday", "Tuseday", "Wednesday", "Thursday","Friday","Saturday"],
    month = ["January", "February", "March", "April", "may", "June","July", "August", "September", "Octobar", "November","December"],
    dayts = d.getDate()

    let currect = day[d.getDay()] + "," + month[d.getMonth()] + "," + dayts

    document.querySelector(".dayname").innerHTML = currect
}
dateTime()


    



setInterval(function(){
    dateTime()
},1000)
