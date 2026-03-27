let number = 0;
let cron /*foi criada para armazenar a função setInterval*/
let crono = document.querySelector(".cronometro")

function start() {
    cron = setInterval( function() {
        number++
        crono.innerHTML = number
    }, 1000)

}

function stop() {
    clearInterval(cron)
}