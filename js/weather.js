const KEY = "1ad35713ee577247f002692868b7880c";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	console.log(lat, lng);
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${KEY}&units=metric`;
	fetch(url)
			.then(respons => respons.json()
			.then(data => {
				const weather = document.querySelector("#weather span:first-child");
				const city = document.querySelector("#weather span:last-child");
		weather.innerText = data.name;
		weather.Class
		city.innerText = '  ' + data.weather[0].main + " / " + data.main.temp + "℃";
	}))
}

function onGeoErr() {
	alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);