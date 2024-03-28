<?php
 session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Infos sur le points </title>
    <link rel="stylesheet" href="./css/styleinfospoints.css">
    <link rel="stylesheet" href="fontawesome-free-5.15.4-web/css/all.min.css">
</head>
<body>
    <div id="flou"></div>
    <section class="container">
        <header> INFORMATIONS DU POINTS </header>
        <form action="#" class="form" method="post" enctype="multipart/form-data">
            <div class="input-box">
                <label>Matricule du point</label>
                <input type="text" placeholder="Matricule du point" name="matricule" required>
            </div>

            <div class="input-box">
                <label>Description du Point</label>
                <input type="text" placeholder="Enter la description du point" name="desc" >
            </div>

            <div class="input-box">
                <label>Nom du site</label>
                <input type="text" placeholder="Enter le nom du site" name="name" required>
            </div>

            <div class="column">
                <div class="input-box">
                    <label>Photo</label>
                    <input type="file" id="capture" accept="image/*,video/*,audio/*" capture="camera" name="pic" requiered> 
                  
                </div>

                <div class="input-box">
                    <label>Jour de visite</label>
                    <input type="date" placeholder="Enter le jour de visite" required name="data" required>
                </div>    
            </div>

        <div id="submit-cancel">
            <button name="submit">Submit </button>
            <button name="cancel">Cancel </button>
        </div>

        </form>
    </section>
</body>
</html>
<?php
if(isset($_POST['submit']))
{
    $_SESSION['matricule']=$_POST['matricule'];
    $_SESSION['desc']=$_POST['desc'];
    $_SESSION['name']=$_POST['name'];
    $_SESSION['date']=$_POST['date'];
    $info=pathinfo($_FILES['pic']['name']);
    $ext=$info['extension'];
    $newname="newname.".rand(0,999).".".$ext;
    $target='images/'.$newname;
    $_SESSION['newname']=$newname;
    move_uploaded_file($_FILES['pic']['tmp_name'],$target);
    header('Location: http:mapdata.php');
}
?>