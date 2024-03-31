<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Page de Connection </title>
    <link rel="stylesheet" href="./css/stylelogin.css">
    <link rel="stylesheet" href="fontawesome-free-5.15.4-web/css/all.min.css">
</head>
<body>
    <form id="container" method="post">
        <i class="fa fa-key"> </i>
        <h1 id="titre">LOGIN</h1>
            <input type="text" id="nom" name="mail" placeholder="email" required>
            <input type="password" id="nom" name="pass" placeholder="password" required>
        <div id="remember">
            <div>
                <input type="checkbox" name="remember" id="remember" >
                <label for="remember"> Remember Me</label>

            </div>
            <a href=""> Forgot password? </a> 
        </div>
        <input type="submit" value="Log In" name="submite">

        <div>
             <p id="fin">Don't have an account? <a href="./registration.php">Register Here! </a></p>
             <?php
             if(isset($_POST['submite']))
             {

                $mail=$_POST['mail'];
              
                $pass=$_POST['pass'];
                
                 try{
                     $bd= new PDO ('mysql:host=localhost;dbname=pak','root','');
                 }
                 catch(Exception $e)
                 {
                     die('Erreur: '.$e->getMessage());
                 }
                 $reponse =$bd->prepare('SELECT COUNT(ID) as chiffre FROM UTILISATEUR WHERE EMAIL=:a and MOT_DE_PASSE=:b');
                          $reponse->execute(array(
                             'a'=>$mail,
                             'b'=>$pass
                            
                          ));
                          $data=$reponse->fetch();
                          if($data['chiffre']==0)
                          {
                                echo "Vous n'etes pas authoris&eacute a vous connecter";
                          }
                          else
                          {
                               
                               
                            header('Location: http:index.html');
                              
                          }
                        }
                    ?>
                
                
             
             
        </div>
    </form>
</body>
</html>