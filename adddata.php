<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add data</title>
    <link rel="stylesheet" href="./css/styleadddata.css">
    <link rel="stylesheet" href="fontawesome-free-5.15.4-web/css/all.min.css">
</head>
<body>
    <div id="flou"></div>
   <h1>Add new element </h1>

   <form method="post">
    <div class="container">
        <label>Point</label>
        <a href="./infospoints.html"><button type="submit" name="mbref"> Point </button></a>

        <label>Ligne</label>
        <a href="#"><button type="submit"> Ligne </button></a>

        <label>Polygones</label>
        <a href="#"><button type="submit"> Polygone </button></a>

        <a href="./index.html"><button type="submit" name="refuse"> Cancel </a></button>

    </div>
   </form>
  
</body>

</html>
<?php
   if(isset($_POST['mbref']))
   {
    header('Location: http:map.html');
   }
   
    if(isset($_POST['refuse']))
   {
    header('Location: http:index.html');
   }
   ?>