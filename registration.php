<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Page d'integration de donnees</title>
    <link rel="stylesheet" href="css/styleregistration.css">
    <link rel="stylesheet" href="fontawesome-free-5.15.4-web/css/all.min.css">
</head>
<body>

    <form id="container" method="post">
        <i class="fa fa-user-plus"> </i>
        <h1 id="titre"> REGISTRATION </h1>
            <input type="text" id="nom" name="nom" placeholder="name & surname" required>
            <input type="email" id="email" name="mail" placeholder="email" required>
            <input type="text" id="nom" name="tel" placeholder="phone number" required>
            <input type="text" id="nom" name="pass1" placeholder="password" required>
            <input type="text" id="nom" name="pass2" placeholder="confirm password" required>
            <button name="register">REGISTER</button>
            
           
        <div>
            <p id="fin">Do you have an account? <a href="./login.php"> connected Here! </a></p>

            <?php
if(isset($_POST['register']))
{
   $name=$_POST['nom'];
   $mail=$_POST['mail'];
   $tel=$_POST['tel'];
   $pass1=$_POST['pass1'];
   $pass2=$_POST['pass2'];
   if($pass1!=$pass2)
   {
    echo "les deux mots de passe ne correspondent pas";
   }
   else
   {
    try{
        $bd= new PDO ('mysql:host=localhost;dbname=pak','root','');
    }
    catch(Exception $e)
    {
        die('Erreur: '.$e->getMessage());
    }
    $reponse =$bd->prepare('INSERT INTO UTILISATEUR(NOM,EMAIL,MOT_DE_PASSE,NUMERO) VALUES (:a,:b,:c,:d) ');
             $reponse->execute(array(
                'a'=>$name,
                'b'=>$mail,
                'c'=>$pass1,
                'd'=>$tel
             ));
             header('Location: http:index.html');
       
   }
   
}
?>
    </div>
    </form>
    
</body>
</html>

