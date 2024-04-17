let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

navigator.geolocation.watchPosition(success, error);

let marker, circle, zoomed;

function success(pos) {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const accuracy = pos.coords.accuracy; 

    if(marker) {  
         map.removeLayer(marker);
         map.removeLayer(circle);
    }

    marker = L.marker([latitude, longitude]).addTo(map);
    circle = L.circle([latitude, longitude], { color: 'red', radius: accuracy }).addTo(map);
 
    if(!zoomed){
        zoomed = map.fitBounds(circle.getBounds());
    } 

    map.setView([latitude, longitude]);
}

function error(err){
    if(err.code === 1){
        alert('Please enable geolocation access');
    }
    else{
        alert('Cannot get current location');
    }
}
