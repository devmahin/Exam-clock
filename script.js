const hoursTime = document.querySelector(".hoursTime")
const minutesTime = document.querySelector(".minutesTime")
const secondTime = document.querySelector(".secondTime")


function dateTime (){
    const d = new Date();
    let hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds()

    hoursTime.innerHTML = hour
    minutesTime.innerHTML = min
    secondTime.innerHTML = sec

}
dateTime()

setInterval(function(){
    dateTime()
},1000)
