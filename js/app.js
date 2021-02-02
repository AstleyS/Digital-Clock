// This functions is responsible for showing the time
function showTime() {

    // Getting the date
    let date = new Date();
    
    let hour = date.getHours(); // 0-23
    let min = date.getMinutes(); // 0-59
    let sec = date.getSeconds(); // 0-59

    let time = `${hour}:${min}:${sec}s`;

    document.getElementById('clock-display').innerText = time

    
}

showTime()
// Runs the function showTime every second
setInterval(showTime, 1000);