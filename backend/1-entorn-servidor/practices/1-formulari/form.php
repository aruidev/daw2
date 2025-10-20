<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php
        // Incluimos el header
        include __DIR__ . '/app/view/layout/header.php';
    ?>

    <body>
        <?php
            // Requerimos el controlador del formulario.
            require_once __DIR__ . '/app/controller/FormController.php';
        ?>
    </body>

    <?php
        // Incluimos el footer
        include __DIR__ . '/app/view/layout/footer.php';
    ?>
</body>
</html>