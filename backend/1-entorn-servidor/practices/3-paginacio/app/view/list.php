<?php
// Requerim i instanciem el servei d'articles
require_once __DIR__ . '/../model/services/ArticleService.php';
$service = new ArticleService();

// Gestionar la cerca
$term = isset($_GET['term']) ? trim($_GET['term']) : '';
if ($term !== '') {
    $articles = $service->searchArticles($term);
} else {
    $articles = $service->getArticles();
}
?>
<!DOCTYPE html>
<html lang="ca">
<head>
<meta charset="UTF-8">
<title>Llista d'articles</title>
<link rel="stylesheet" href="../../styles.css">
</head>
<style>
    .truncate {
        display: inline-block;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
<body>

    <?php
    // Incluimos el header
    include __DIR__ . '/layout/header.php';
    ?>

    <div class="container">
        <h1>Llista d'articles</h1>

        <a class="ghost-btn" href="form_insert.php">➕ Afegir article</a><br><br>

        <div>
            <form method="get" action="list.php" class="search-container">
                <label for="searchInput">🔎</label>
                <input type="text" id="searchInput" name="term" placeholder="Cerca per títol..." 
                    value="<?= 
                    // Guardar el terme de cerca a l'input
                    htmlspecialchars($term)
                ?>">
                <button type="submit">Cercar</button>
                <?php 
                    // Mostrar botó de netejar només si hi ha terme de cerca
                    if ($term !== ''): ?>
                        <a class="ghost-btn" href="list.php">Netejar</a>
                <?php endif; ?>
            </form>
            <br>
        </div>
        

        <table>
            <tr><th>ID</th><th>Títol</th><th>Cos</th><th>Accions</th></tr>
            <?php foreach ($articles as $a): ?>
                <tr>
                    <td><?= $a->getId() ?></td>
                    <td><span class="truncate"><?= htmlspecialchars($a->getTitol()) ?></span></td>
                    <td><span class="truncate"><?= htmlspecialchars($a->getCos()) ?></span></td>
                    <td>
                        <a class="ghost-btn" href="form_view.php?id=<?= $a->getId() ?>">➡️ Veure</a>
                        <a class="ghost-btn" href="form_update.php?id=<?= $a->getId() ?>">✏️ Editar</a>
                        <a class="ghost-btn" href="../controller/ArticleController.php?delete=<?= $a->getId() ?>" onclick="return confirm(`Segur que vols eliminar l'article?`)">🗑️ Eliminar</a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </table>
    </div>

    <?php
        // Incluimos el footer
        include __DIR__ . '/layout/footer.php';
    ?>

</body>
</html>
