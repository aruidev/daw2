<?php
// Requerim i instanciem el servei d'articles
require_once __DIR__ . '/../model/services/ArticleService.php';
$service = new ArticleService();

// Gestionar la cerca
$term = isset($_GET['term']) ? trim($_GET['term']) : '';

// Paràmetres de paginació
$page = isset($_GET['page']) ? max(1, (int)$_GET['page']) : 1;

// Permetre seleccionar el nombre d'elements per pàgina: 1, 5 o 10
$allowedPerPage = [1, 5, 10];
$perPage = isset($_GET['perPage']) ? (int)$_GET['perPage'] : 5;
if (!in_array($perPage, $allowedPerPage, true)) {
    $perPage = 5;
}

// Permetre ordre ascendent o descendent
$order = isset($_GET['order']) && strtoupper($_GET['order']) === 'DESC' ? 'DESC' : 'ASC';

// Obtenir articles paginats
$paginated = $service->getArticlesPaginated($page, $perPage, $term, $order);
$articles = $paginated['items'];
$total = $paginated['total'];
$totalPages = (int)ceil($total / $perPage);
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

.pagination {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    flex-wrap: wrap;
}

.page-link {
    padding: 0.25rem 0.5rem;
    border: 1px solid #ddd;
    text-decoration: none;
    color: inherit;
}

.page-link.active {
    background: #333;
    color: #fff;
}

.add-article-btn {
    border: 1px solid #ddd;
    background-color: #f9f9f9;
}

.search-btn {
    display: inline-flex;
    padding: 0.5rem 1rem;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
    white-space: nowrap;
}

.list-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.per-page-container {
    margin-top: 1rem;
    text-align: center;
}

.per-page-container select {
    padding: .25rem;
    border-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
}
.order-toggle {
    margin-left: 1rem;
    width: 20px;
    height: 20px;
    cursor: pointer;
}
</style>
<body>

    <?php
    // Incluimos el header
    include __DIR__ . '/layout/header.php';
    ?>

    <div class="container">

        <header class="list-header">
            <h1>Llista d'articles</h1>
            <a class="ghost-btn add-article-btn" href="form_insert.php">➕ Afegir article</a>
        </header>
        

        <div>
            <form method="get" action="list.php" class="search-container">
                <label for="searchInput">🔎</label>
                <input type="text" id="searchInput" name="term" placeholder="Cerca per títol..." 
                    value="<?= 
                    // Guardar el terme de cerca a l'input
                    htmlspecialchars($term)
                ?>">
                <button type="submit" class="search-btn">🔎 Cercar</button>
                <?php 
                    // Mostrar botó de netejar només si hi ha terme de cerca
                    if ($term !== ''): ?>
                        <a class="ghost-btn" href="list.php?perPage=<?= $perPage ?>">Netejar</a>
                <?php endif; ?>
                <button class="ghost-btn" type="submit" name="order" title="Canviar ordre"
                    value="<?= $order === 'ASC' ? 'DESC' : 'ASC' ?>">
                    <?= $order === 'ASC' ? '⬆️ Ordenar' : '⬇️ Ordenar' ?>
                </button>
            </form>
        </div>

        <!-- Taula d'articles -->
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
        // Incluim el component de paginació
        include_once __DIR__ . '/components/pagination.php';

        // Incluimos el footer
        include __DIR__ . '/layout/footer.php';
    ?>

</body>
</html>
