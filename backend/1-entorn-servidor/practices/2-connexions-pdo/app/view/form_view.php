<?php
require_once __DIR__ . '/../model/services/ArticleService.php';
$service = new ArticleService();
$article = $service->getArticleById($_GET['id']);
?>
<!DOCTYPE html>
<html lang="ca">
<head>
<meta charset="UTF-8">
<title>Veure article</title>
<link rel="stylesheet" href="../../styles.css">
</head>
<style>
    label {
        font-weight: bold;
        color: gray;
        margin: 0;
        padding: 0;
    }
</style>
<body>

    <?php
    // Incluimos el header
    include __DIR__ . '/layout/header.php';
    ?>

    <div class="container">
        <h1>Veure article</h1>
        <div>
            <h2><?= htmlspecialchars($article->getTitol()) ?></h2>
            <p><?= htmlspecialchars($article->getCos()) ?></p>
        </div>
        <br>
            <a class="ghost-btn" href="list.php">⬅️ Tornar</a>
    </div>

    <?php
        // Incluimos el footer
        include __DIR__ . '/layout/footer.php';
    ?>

</body>
</html>
