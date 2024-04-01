<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Map d'ajout du point</title>
    <link rel="stylesheet" href="./css/stylemapdata.css">
    <link rel="stylesheet" href="fontawesome-free-5.15.4-web/css/all.min.css">

    <!--leaflet css-->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" 
    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />

    <!--leaflet draw plugins-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.css"/>

</head>
<body>
    <form method="post">
    <div id="map">
        <a href="./adddata.php" class="floating-btn" title="Enregistrer" name='end'><i class="fas fa-plus fa-sm"></i></a>
    </div>
</form>
    
    <!-- Scripts Javascripts -->
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" 
    integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/0.4.2/leaflet.draw.js"></script>
    <script src="./js/mainmapdata.js"></script>
</body>
</html>
<?php
if(isset($_POST['end']))
{
    header('Location: http:adddata.php');

}
?>
