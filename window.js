window.onload = function() {
    displayDate();
    displayTime();
    displayLocation();
};

function displayDate() {
    var dateElement = document.getElementById("date");
    var currentDate = new Date().toLocaleDateString();
    dateElement.innerHTML = "Today's Date: " + currentDate;
}

function displayTime() {
    var timeElement = document.getElementById("time");
    var currentTime = new Date().toLocaleTimeString();
    timeElement.innerHTML = "Current Time: " + currentTime;
}

function displayLocation() {
    var locationElement = document.getElementById("location");
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        locationElement.innerHTML = "Your Location: " + latitude + ", " + longitude;
    });
}
