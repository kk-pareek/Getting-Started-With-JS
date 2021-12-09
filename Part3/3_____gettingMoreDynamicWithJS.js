function displayDateTime() {
    document.write(new Date());
}

function showTime() {
    document.getElementById('clockContainer').innerHTML = new Date().toLocaleTimeString();
}

function showClock() {
    setTimeout(() => {document.write(new Date().toLocaleTimeString())}, 1000);
}

function liveClock() {
    setInterval(showTime, 1000);
}

