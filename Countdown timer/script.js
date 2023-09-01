let countDownDate = new Date("Sep 10, 2023 00:00:00");
let x = setInterval(()=>{
    let now = new Date().getTime();
    let distance =  countDownDate - now;
    


let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

const day = document.getElementById("days")
const hour = document.getElementById("hours")
const min = document.getElementById("min")
const sec = document.getElementById("sec")

day.innerHTML = days;
hour.innerHTML = hours;
min.innerHTML = minutes;
sec.innerHTML = seconds;

if(distance<0){
    clearInterval(x);
    day.innerHTML = "00";
hour.innerHTML = "00";
min.innerHTML = "00";
sec.innerHTML = "00";

}


}, 1000)