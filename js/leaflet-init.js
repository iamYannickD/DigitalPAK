window.onload = () =>  {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        
        var currentPos = {
            lat: lat,
            long: long
        };

        window.localStorage.setItem("position", JSON.stringify(currentPos));
    });
}
var position = JSON.parse(window.localStorage.getItem("position"));

var long = position.long;
var lat = position.lat;

var map = L.map('map').setView([long, lat], 18); // Centre la carte à une certaine latitude et longitude, avec un certain niveau de zoom

map.setView([lat, long, 100]);

map.on('click', (e) => {
    marker.setLatLng(e.latlng);
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // Utilisez un service de tuiles, comme OpenStreetMap
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([lat, long]).addTo(map)
    .bindPopup(`Voter position actuelle`)
    .openPopup();

marker.on('click', (e) => {
    marker.bindPopup(`
        <h4>Image Title</h4>
        <table>
            <tr>
                <td>Propriété</td>
                <td>Valeur</td>
            </tr>
            <tr>
                <td>Propriété 1</td>
                <td>Valeur 1</td>
            </tr>
            <tr>
                <td>Propriété 2</td>
                <td>Valeur 2</td>
            </tr>
        </table>
        <img src="img/Dock.jpg" class="popup-image">
    `);
});

var drawFeatures = new L.FeatureGroup();
map.addLayer(drawFeatures);

var drawControl = new L.Control.Draw();
map.addControl(drawControl);

map.on("draw:created", (e) => {
    console.log(e);
    var type = e.layerType;
    var layer = e.layer;
    drawFeatures.addLayer(layer);
});

map.on("draw:edit", (e) => {
    console.log(e);
    var type = e.layerType;
    var layers = e.layer;

    layers.eachLayer((layer) => {
        console.log(layer);
    });
});
