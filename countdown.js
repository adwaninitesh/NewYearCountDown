
var newYear = new Date("jan 01, 2024 00:00:00").getTime();

var x = setInterval(() => {

    var currentDate = new Date().getTime();

    var remainingTime = newYear - currentDate;

    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    var hrs = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    var min = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

    var sec = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + " Days, " + hrs + " Hours, " + min + " Minutes, " + sec + " Seconds, ";

}, 1000);
