<?php include "logica.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <title>Formulario</title>
    <link rel="stylesheet" type="text/css" href="css/estilos.css" media="screen" />
    <script src="js/particles.js"></script>
    <script src="js/particulas.js"></script>
</head>
<body>
    <div id="particles-js"></div>
    <div class="container">
      <div class="principalBox">
         <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">

         </form>
      </div>

    </div>
    <script src="js/particles.js"></script>
    <script src="js/particulas.js"></script>
</body>
</html>