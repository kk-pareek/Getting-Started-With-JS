function displayDateTime() {
    document.write(new Date());
}

function showTime() {
    document.getElementById('digital-clock-container').innerHTML = new Date().toLocaleTimeString();
}

function showClock() {
    setTimeout(() => { document.write(new Date().toLocaleTimeString()) }, 1000);
}


setInterval(showTime, 1000);
