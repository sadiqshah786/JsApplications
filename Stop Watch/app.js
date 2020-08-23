var min = 0;
var sec = 0;
var msec = 0;
var interval;


GetMin = document.getElementById('min')
GetSec = document.getElementById('sec')
GetMsec = document.getElementById('msec')


function timer() {
    msec++;

    GetMsec.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        GetSec.innerHTML = sec;
        msec = 0;
    } else if (sec >= 10) {
        min++
        GetMin.innerHTML = min;
        sec = 0;
    } else if (msec > 10) {

    }
}

function Start() {
    interval = setInterval(timer, 10)

    if (Startbtn.disabled) {

        Startbtn.disabled = false;
        Stopbtn.disabled = true;

    } else {
        Startbtn.disabled = true;
        Stopbtn.disabled = false;

    }


}

function Stop() {

    clearInterval(interval)
    if (Stopbtn.disabled) {

        Startbtn.disabled = true;
        Stopbtn.disabled = false;

    } else {
        Startbtn.disabled = false;
        Stopbtn.disabled = true;

    }

}