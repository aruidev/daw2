<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <?php
        // Incluimos el header
        include __DIR__ . '/app/view/layout/header.php';
    ?>

    <main>
        <h1>Bienvenido a la página de inicio</h1>
        <p>Esta es la página principal de la aplicación.</p>
    </main>

    <?php
        // Incluimos el footer
        include __DIR__ . '/app/view/layout/footer.php';
    ?>
</body>
</html>