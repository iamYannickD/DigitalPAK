<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Training JavaScript</title>
    <link rel="shortcut icon" href="img/Autre-logo.ico" type="image/x-icon" />
    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="fontawesome-free-5.15.4-web/css/all.min.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

    <!--leaflet css-->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />
    <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />
    <link rel="stylesheet" href="./plugins/Leaflet.Coordinates-master/dist/Leaflet.Coordinates-0.1.5.css" />
    <link rel="stylesheet" href="./plugins/leaflet-measure-master/leaflet-measure-master/src/leaflet-measure.css" />
    <!--geolocation-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@0.79.0/dist/L.Control.Locate.min.css" />

    <!--leaflet draw plugins-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.css" />

    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/pop.css" />
    <title>Training JavaScript</title>
</head>
<body >
    </div>



    <div id="container">
        <a  class="floating-btn" title="Enregistrer"><i class="fas fa-plus fa-sm" onclick="process()"></i></a>



        <div id="map">

        </div>

    </div>

    <!-- Scripts Javascripts -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.js"></script>
    <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
    <script src="https://unpkg.com/leaflet-control-geocoder/dist/Leaflet.Coordinates-0.1.5.min.js"></script>
    <script src="./plugins/Leaflet.Coordinates-master/dist/Leaflet.Coordinates-0.1.5.min.js"></script>
    <script src="./plugins/Leaflet.Coordinates-master/dist/Leaflet.Coordinates-0.1.5.src.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.js"></script>
    <script src="./plugins/leaflet-measure-master/leaflet-measure-master/src/leaflet-measure1.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/leaflet.locatecontrol@0.79.0/dist/L.Control.Locate.min.js" charset="utf-8"></script>
    <script src="./data/cd.js"></script>
    <script src="./data/concessions.js"></script>
    <script src="./data/arrondissements.js"></script>
    <script src="./data/tampon.js"></script>
    <script src="./assets/jquery-3.7.1.min.js"></script>
    <script src="js/mainmapdata.js"></script>
    <script>
       <?php
        session_start();
        
        try{
            $bd= new PDO ('mysql:host=localhost;dbname=port','root','');
        }
        catch(Exception $e)
        {
            die('Erreur: '.$e->getMessage());
        }
        $reponse =$bd->prepare('SELECT * FROM points');
        $reponse->execute(array(
       
        ));
        $i=0;
         while ($data = $reponse->fetch())
         {
            echo "var marker =L.marker([".$data['LONGITUDE'].",".$data['LATITUDE']."]).addTo(map);
            marker.bindPopup('');
            var mapopup = marker.getPopup();
            mapopup.setContent(".'"'."<div id='+'grand-fond'+'></div> <div id='+'fond-table'+'> <img src=images/".$data['LIEN_PHOTO']." class='+'popup-image'+' width=80% height=20%><table><tr><td>Propriété</td><td>Valeur</td></tr><tr><td>NOM DU POINT</td><td>".$data['NOM']."</td><tr><td>MATRICULE</td><td>".$data['MATRICULE']."</td></tr><tr><td>LATITUDE</td><td>".$data['LATITUDE']."</td></tr><tr><td>LONGITUDE</td><td>".$data['LONGITUDE']."</td></tr></table></div>".'"'.");
            marker.openPopup();
        
            ";
        }
       
        ?>
        </script>

    
</body>
</html>
</html>