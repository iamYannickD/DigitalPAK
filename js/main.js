var showNavbar = document.getElementById("show-navbar");
var container = document.getElementById("container");
var navBar = document.getElementById("left-menu");


function updateNavBar()
{
    if(container.classList.contains("reduced"))
    {
        container.classList.remove("reduced");
        navBar.classList.remove("reduced");

        showNavbar.innerHTML = `<i class="fa fa-bars"></i>`;
    }
    else
    {
        container.classList.add("reduced");
        navBar.classList.add("reduced");
        showNavbar.innerHTML = `<i class="fa fa-times"></i>`;
    }
}

showNavbar.addEventListener("click", (e) => {
    e.preventDefault();
    updateNavBar();
});

var showstatutcontent = $("#statut-content")
var showfiltrescontent = $("#filtres-content")
var showssearchcontent = $("#search-content")

var btn_title1 = $("#statut-content")
var update_content1 = $("#title-statut-content")

function updatestatutcontent () {
    update_content1.on("click", function() {
        btn_title1.slideToggle()
    })
}

var btn_title2 = $("#filtres-content")
var update_content2 = $("#title-statut-content1")

function updatestatutcontent2 () {
    update_content2.on("click", function() {
        btn_title2.slideToggle()
    })
}

var btn_title3 = $("#search-content")
var update_content3 = $("#title-statut-content2")

function updatestatutcontent3 () {
    update_content3.on("click", function() {
        btn_title3.slideToggle()
    })
}

updatestatutcontent ();
updatestatutcontent2 ();
updatestatutcontent3 ();
var concessdata = L.geoJSON(concessionsJson, {
    style: function(feature) {
        switch (feature.properties.Cat_Conces) {
            case 'GE': return {color: "red"};
            case 'ME':   return {color: "yellow"};
            case 'TPE/PE':   return {color: "green"};
        }
    },
    onEachFeature:function(feature,layer){
        layer.bindPopup( `<div class="wrapper">
        <div class="table">
        <div class="row header">
        
        <div class="cell">
        Propriété
        </div>
        <div class="cell">
        Valeur
        </div>
        </div>
        <div class="row">
        <div class="cell">
        Layer
        </div>
        <div class="cell">
        `+feature.properties.LAYER+`
        </div>
        </div>
        <div class="row">
        <div class="cell">
        GM_TYPE
        </div>
        <div class="cell">
        `+feature.properties.GM_TYPE+`
        </div>
        </div>
        <div class="row">
        <div class="cell">
        Statut_Pai
        </div>
        <div class="cell">
        `+feature.properties.Statut_Pai+`
        </div>
        </div>
        <div class="row">
        <div class="cell">
        Cat_Conces
        </div>
        <div class="cell">
        `+feature.properties.Cat_Conces+`
        </div>
        </div>
        <div class="row">
        <div class="cell">
        Numero_Con
        </div>
        <div class="cell">
        `+feature.properties.Numero_Con+`
        </div>
        </div>
        <div class="row">
        <div class="cell">
        Nom_Conces
        </div>
        <div class="cell">
        `+feature.properties.Nom_Conces+`
        </div>
        </div>
        <div class="row">
        <div class="cell">
        NIU_Conces
        </div>
        <div class="cell">
        `+feature.properties.NIU_Conces+`
        </div>
        </div>
        </div>
        </div>
        `);
    }
}); 
var me=L.geoJSON(concessionsJson,{
    filter:function(feature){
       if(feature.properties.Cat_Conces==="ME")return true;   
    },
    style:function(feature){
        return {color:'yellow'}
    },
    onEachFeature:function(feature,layer){
        layer.bindPopup(`<div id="grand-fond"> </div>
<div id="fond-table">
            
            <table>
                <tr>
                    <td>Propriété</td>
                    <td>Valeur</td>
                </tr>
                <tr>
                    <td>LAYER</td>
                    <td>`+feature.properties.LAYER+`</td>
                </tr>
                <tr>
                    <td>GM_TYPE</td>
                    <td>`+feature.properties.GM_TYPE+`</td>
                </tr>
                <tr>
                    <td>Statut_Pai</td>
                    <td>`+feature.properties.Statut_Pai+`</td>
                </tr>
                <tr>
                    <td>Cat_Conces</td>
                    <td>`+feature.properties.Cat_Conces+`</td>
                </tr>
                <tr>
                    <td>Numero_Con</td>
                    <td>`+feature.properties.Numero_con+`</td>
                </tr>
                <tr>
                    <td>Nom_Conces</td>
                    <td>`+feature.properties.Nom_Conces+`</td>
                </tr>
                <tr>
                    <td>NIU_Conces</td>
                    <td>`+feature.properties.NIU_Conces+`</td>
                </tr>
            </table>
            </div>`);
    }
}); 
var ge=L.geoJSON(concessionsJson,{
    filter:function(feature){
       if(feature.properties.Cat_Conces==="GE")return true;   
    },
    style:function(feature){
        return {color:'red'}
    },
    onEachFeature:function(feature,layer){
        layer.bindPopup(`<div id="grand-fond"> </div>
<div id="fond-table">
            
            <table>
                <tr>
                    <td>Propriété</td>
                    <td>Valeur</td>
                </tr>
                <tr>
                    <td>LAYER</td>
                    <td>`+feature.properties.LAYER+`</td>
                </tr>
                <tr>
                    <td>GM_TYPE</td>
                    <td>`+feature.properties.GM_TYPE+`</td>
                </tr>
                <tr>
                    <td>Statut_Pai</td>
                    <td>`+feature.properties.Statut_Pai+`</td>
                </tr>
                <tr>
                    <td>Cat_Conces</td>
                    <td>`+feature.properties.Cat_Conces+`</td>
                </tr>
                <tr>
                    <td>Numero_Con</td>
                    <td>`+feature.properties.Numero_con+`</td>
                </tr>
                <tr>
                    <td>Nom_Conces</td>
                    <td>`+feature.properties.Nom_Conces+`</td>
                </tr>
                <tr>
                    <td>NIU_Conces</td>
                    <td>`+feature.properties.NIU_Conces+`</td>
                </tr>
            </table>
            </div>`);
    }
}); 
function search()
{
    map.removeLayer(tpe);
    map.removeLayer(me);
    map.removeLayer(ge);
    map.removeLayer(concessdata);
    input=document.getElementById('search-by-id').value; 
   
    var sear=L.geoJSON(concessionsJson,{
        filter:function(feature){
           if(feature.properties.LAYER==input)return true;   
        },
        style:function(feature){
            return {color:'white'}
        },
        onEachFeature:function(feature,layer){
            layer.bindPopup(`<div id="grand-fond"> </div>
    <div id="fond-table">
                
                <table>
                    <tr>
                        <td>Propriété</td>
                        <td>Valeur</td>
                    </tr>
                    <tr>
                        <td>LAYER</td>
                        <td>`+feature.properties.LAYER+`</td>
                    </tr>
                    <tr>
                        <td>GM_TYPE</td>
                        <td>`+feature.properties.GM_TYPE+`</td>
                    </tr>
                    <tr>
                        <td>Statut_Pai</td>
                        <td>`+feature.properties.Statut_Pai+`</td>
                    </tr>
                    <tr>
                        <td>Cat_Conces</td>
                        <td>`+feature.properties.Cat_Conces+`</td>
                    </tr>
                    <tr>
                        <td>Numero_Con</td>
                        <td>`+feature.properties.Numero_con+`</td>
                    </tr>
                    <tr>
                        <td>Nom_Conces</td>
                        <td>`+feature.properties.Nom_Conces+`</td>
                    </tr>
                    <tr>
                        <td>NIU_Conces</td>
                        <td>`+feature.properties.NIU_Conces+`</td>
                    </tr>
                </table>
                </div>`);
        }
    }).addTo(map);

}
function charge()
{
    
    if(document.getElementById('tous').checked)
    {
        map.removeLayer(tpe);
        map.removeLayer(me);
        map.removeLayer(ge);
        concessdata.addTo(map);
        concessdata.bindPopup('-'+feature.properties.Cat_Conces+'-');
    }

    if(document.getElementById('tpe').checked)
    {
        map.removeLayer(concessdata);
        map.removeLayer(me);
        map.removeLayer(ge);
        tpe.addTo(map);
    }
    if(document.getElementById('me').checked)
    {
        map.removeLayer(concessdata);
        map.removeLayer(tpe);
        map.removeLayer(ge);
        me.addTo(map);
    }
    if(document.getElementById('ge').checked)
    {
        map.removeLayer(concessdata);
        map.removeLayer(tpe);
        map.removeLayer(me);
        ge.addTo(map);
    }


}


$(".title-content").click( function() {
    $(this).toggleClass("active");
})



// Map initialization
var map = L.map('map').setView([2.715000, 9.8497222], 15);
map.zoomControl.setPosition('topleft');

// Osm Layer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
//osm.addTo(map);

    // Osm Hot Layer
    var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});


    //google street
    googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
    });
    //googleStreets.addTo(map);

    //google Sat
    googleSat = L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
    });
    googleSat.addTo(map);

   //marker 
   var singleMarker = L.marker([7.3696495, 12.3445856]);
   var popup = singleMarker.bindPopup( 'this is cameroon').openPopup()
   popup.addTo(map)
    
    // test le changement de styles

                 

   //Layer controller
   
   var baseMaps = {
    "OpenStreetMap": osm,
    "OpenStreetMap.HOT": osmHOT,
    "google Streets ": googleStreets,
    " google Sat": googleSat
    };

    var overlayMaps = {
        "arrondissments cameroun": arrondissementsdata,
        "concessions du P.A.K.": concessdata
    };

    var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

     // search location

     L.Control.geocoder().addTo(map);


    // mouse coordinates
    
    L.control.coordinates({
        position:"bottomleft",
        useDMS:true,
        decimals:2,
        decimalSeperator:",",
        labelTemplateLat:"Latitude {y}",
        labelTemplateLng:"Longitude {x}",
    }).addTo(map);

    
     // scale

     L.control.scale().addTo(map);
   
    // Leaflet Measure

    L.control.measure({
        primaryLengthUnit: 'kilometers', 
        secondaryLengthUnit: 'meter',
        primaryAreaUnit: 'sqmeters', 
        secondaryAreaUnit: undefined 
    }).addTo(map);

    // geolocation

    L.control.locate().addTo(map);



   
