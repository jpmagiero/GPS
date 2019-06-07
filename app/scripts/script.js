onload = init;
var mymap;
function init() {
	//Setar para aparecer na posição do usuário
	mymap = L.map('mapid').setView([51.505, -0.09], 13);
	mymap.on("click", onMapClick);


	navigator.geolocation.getCurrentPosition(showPosition);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		//criar seu token no mapbox
		accessToken: 'pk.eyJ1Ijoiam9hb3BhdWxvbXIiLCJhIjoiY2p3bHk4Y3R6MDhkNDQ4cW1vc2w5Y2J1MyJ9.qj1RE3g-BKC3CxwR0pMLHw '
	}).addTo(mymap);
	//Add Button Listener
	document.getElementById("btn_add").addEventListener("click", f);

	function onMapClick(event) {
		var It = event.latlng.lat;
		var Ig = event.latlng.lng;
		document.getElementById("lat").value = It;
		document.getElementById("long").value = Ig;
	}
	function f(event) {
		var lat = document.getElementById("lat").value;
		var long = document.getElementById("long").value;
		var desc = document.getElementById("desc").value;
		var m = L.marker([lat, long]).addTo(mymap);
		m.bindPopup(desc);
		mymap.setView([lat, long], 13);

	}
	function showPosition(pos) {
		var latitude = pos.coords.latitude;
		var longitude = pos.coords.longitude;
		mymap.setView([latitude, longitude]);
		console.log(latitude, longitude);
	}
}
//atualiza a posição


//Função para adicionar marcador


//Challenge: Mostrar a foto do lugar no balão. Dica: desc pode ser um HTML
//Challenge: Auto preencher lat e long ao clicar em algum lugar do mapa