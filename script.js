var key = "AIzaSyAzU_JDzOxBsPCvWRWlq6fsd7PvVBYdmpw";

var loc = document.getElementById("location");
var lat, var long;

function getLocation(){
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPostition(showPosition);
	}else{
		location.innerHTML = "Geolocation is not supported by this browser."
	}
}

function showPosition(position){
	lat = position.coords.latitude;
	long = position.coords.longitude;
}