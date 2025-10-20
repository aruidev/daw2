<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo "Hello, World!";

        $setmana = ['Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte', 'Diumenge'];

        foreach ($setmana as $dia) {
            echo "<p>$dia</p>";
        }

        $missatge = "Hola, avui es " . $setmana[date('N') - 1];
        
        echo "<p>$missatge</p>";

    ?>
</body>
</html>