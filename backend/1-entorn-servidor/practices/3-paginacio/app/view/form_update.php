<?php
require_once __DIR__ . '/../model/services/ArticleService.php';
$service = new ArticleService();
$article = $service->getArticleById($_GET['id']);
?>
<!DOCTYPE html>
<html lang="ca">
<head>
<meta charset="UTF-8">
<title>Editar article</title>
<link rel="stylesheet" href="../../styles.css">
</head>
<body>

    <?php
    // Incluimos el header
    include __DIR__ . '/layout/header.php';
    ?>

    <div class="container">
        <h1>Editar article</h1>
        <form action="../controller/ArticleController.php" method="POST">
            <input type="hidden" name="id" value="<?= $article->getId() ?>">
            <label>Títol:</label><br>
            <input type="text" name="titol" value="<?= htmlspecialchars($article->getTitol()) ?>" required><br><br>
            <label>Cos:</label><br>
            <textarea name="cos" rows="5" cols="40" required><?= htmlspecialchars($article->getCos()) ?></textarea><br><br>
            <button type="submit" name="update">Actualitzar</button>
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
