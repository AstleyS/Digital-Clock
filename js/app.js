// This functions is responsible for showing the time
function showTime() {

    // Getting clock element
    const clock = document.getElementById('clock_display');
    
    // Getting the date
    let date = new Date();
    
    let hour = date.getHours(); // 0-23
    let min = date.getMinutes(); // 0-59
    let sec = date.getSeconds(); // 0-59

    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    let time = `${hour}:${min}:${sec}s`;

    clock.innerText = time

    // Runs the function showTime every second
    setTimeout(showTime, 1000);
}

showTime()
