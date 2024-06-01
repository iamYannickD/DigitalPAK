<?php
session_start();
// we'll generate XML output
header('Content-Type: text/xml');
// generate XML header
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
// create the <response> element
echo '<response>';
// retrieve the user name
$name = $_GET['names'];
$names = $_GET['name'];
$_SESSION['latitude']=$name;
$_SESSION['longitude']=$names;
$l=12;
/*try{
    $bd= new PDO ('mysql:host=localhost;dbname=port','root','');
}
catch(Exception $e)
{
    die('Erreur: '.$e->getMessage());
}
$rep=$bd->prepare("insert into points(MATRICULE,LATITUDE,LONGITUDE,DESCRIPTION,NOM,LIEN_PHOTO) values(:a,:b,:c,:d,:e,:f)" );
$rep->execute(array(
                             'a'=>$_SESSION['matricule'],
                             'b'=>$name,
                             'c'=>$names,
                             'd'=>$_SESSION['desc'],
                             'e'=>$_SESSION['name'],
                             'f'=>$_SESSION['newname']
                             
                            
                          ));*/
// generate output depending on the user name received from client
echo $name."  ".$names." ".$l;

// close the <response> element
echo '</response>';
?>