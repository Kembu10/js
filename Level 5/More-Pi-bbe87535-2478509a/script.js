const calculateBtn = document.getElementById("bereken-button");
calculateBtn.addEventListener("click", berekenDiameter);

function berekenDiameter() {
    let diameter = document.querySelector("#diameter").value;
    const omtrekEl = document.querySelector("#omtrek");
    let omtrek = diameter;
    omtrekEl.innerText = 'Omtrek: ' + omtrek.toFixed(2);
}

function showTime() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const timeEl = document.querySelector("#time");
    timeEl.innerText = "Het is " + time;
}

setInterval(showTime, 1000);
