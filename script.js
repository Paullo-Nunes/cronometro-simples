let number = 0;
let cron
let h2 = document.querySelector("h2")

function start() {
    cron = setInterval( function() {
        number++
        h2.innerHTML = number
    }, 1000)

}