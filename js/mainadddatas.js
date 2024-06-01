
// Map initialization
var map = L.map('map', {
    center: [0, 0],
   
}).setView([2.71638889, 9.86361111], 15);
map.zoomControl.setPosition('topleft');
map.options.minZoom = 14;

// Osm Layer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
//osm.addTo(map);

// Osm Hot Layer
var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
});


//google street
googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
//googleStreets.addTo(map);


//fonction pour cliquer


//google Sat
googleSat = L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
googleSat.addTo(map);

//concession du port autonome de kribi


// faire le tableau dans le popup








//Layer controller

var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap.HOT": osmHOT,
    "google Streets ": googleStreets,
    " google Sat": googleSat
};

var overlayMaps = {
    "concessions du P.A.K.": concessdata
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);



L.control.coordinates({
    position: "bottomleft",
    useDMS: true,
    decimals: 2,
    decimalSeperator: ",",
    labelTemplateLat: "Latitude {y}",
    labelTemplateLng: "Longitude {x}",
}).addTo(map);


// scale

L.control.scale().addTo(map);

// draw geometry
/*
    var drawnFeatures = new L.FeatureGroup();
    map.addLayer(drawnFeatures);

    var drawControl = new L.Control.Draw({
        edit: { 
            featureGroup: drawnFeatures,
            remove: false
        }
    });
    map.addControl(drawControl);

    map.on("draw:created", function (e) {
        console.log(e)
        var type = e.layerType;
        var layer = e.layer;
        drawnFeatures.addLayer(layer);
    });

    map.on("draw:edited", function (e) {
        console.log(e)
        var type = e.layerType;
        var layers = e.layer;
        
        layers.eachLayer(function(layer){
            console.log(layer)
        })
    });

    */

// Leaflet Measure

L.control.measure({
    primaryLengthUnit: 'kilometers',
    secondaryLengthUnit: 'meter',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: undefined
}).addTo(map);

// geolocation
var mb = 12
L.control.locate().addTo(map);










