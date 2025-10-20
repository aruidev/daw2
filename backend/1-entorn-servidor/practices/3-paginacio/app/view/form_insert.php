<!DOCTYPE html>
<html lang="ca">
<head>
<meta charset="UTF-8">
<title>Afegir article</title>
<link rel="stylesheet" href="../../styles.css">
</head>
<body>

    <?php
    // Incluimos el header
    include __DIR__ . '/layout/header.php';
    ?>

    <div class="container">
        <h1>Afegir article</h1>
        <form action="../controller/ArticleController.php" method="POST">
            <label>Títol:</label><br>
            <input type="text" name="titol" required><br><br>
            <label>Cos:</label><br>
            <textarea name="cos" rows="5" cols="40" required></textarea><br><br>
            <button type="submit" name="insert">Guardar</button>
        </form>
        <br>
        <a class="ghost-btn" href="list.php">⬅️ Tornar</a>
    </div>

    <?php
        // Incluimos el footer
        include __DIR__ . '/layout/footer.php';
    ?>

</body>
</html>
