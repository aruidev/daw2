<?php
// Requerim i instanciem el servei d'items
require_once __DIR__ . '/../model/services/ItemService.php';
$service = new ItemService();

// Search term
$term = isset($_GET['term']) ? trim($_GET['term']) : '';

// Pagination parameters
$page = isset($_GET['page']) ? max(1, (int)$_GET['page']) : 1;

// Items per page options
$allowedPerPage = [1, 6, 12];
$perPage = isset($_GET['perPage']) ? (int)$_GET['perPage'] : 6;
if (!in_array($perPage, $allowedPerPage, true)) {
    $perPage = 6;
}

// Order parameter
$order = isset($_GET['order']) && strtoupper($_GET['order']) === 'DESC' ? 'DESC' : 'ASC';

// Get paginated items and total count
$paginated = $service->getItemsPaginated($page, $perPage, $term, $order);
$items = $paginated['items'];
$total = $paginated['total'];
$totalPages = (int)ceil($total / $perPage);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Item List</title>
<link rel="stylesheet" href="../../styles.css">
</head>
<body>

    <?php
    // Include the header
    include __DIR__ . '/layout/header.php';
    ?>

    <div class="container">

        <header class="list-header">
            <h1>Items</h1>
            <a class="primary-btn ghost-btn" href="form_insert.php">➕ Add item</a>
        </header>
        

        <div>
            <form method="get" action="list.php" class="search-container">
                <label for="searchInput">🔎</label>
                <input type="text" id="searchInput" name="term" placeholder="Search by title..." 
                    value="<?= 
                    // Store the search term in the input
                    htmlspecialchars($term)
                ?>">
                <button type="submit" class="secondary-btn ghost-btn">🔎 Search</button>
                <?php 
                    // Show clear button only if there is a search term
                    if ($term !== ''): ?>
                        <a class="secondary-btn ghost-btn" href="list.php?perPage=<?= $perPage ?>">Clear</a>
                <?php endif; ?>
                <button class="secondary-btn ghost-btn" type="submit" name="order" title="Change order"
                    value="<?= $order === 'ASC' ? 'DESC' : 'ASC' ?>">
                    <?= $order === 'ASC' ? '⬆️ Sort' : '⬇️ Sort' ?>
                </button>
            </form>
        </div>

        <!-- Item grid -->
        <div class="card-grid">
            <?php foreach ($items as $a): ?>
                <article class="card">
                    <div>
                        <div class="meta">#<?= $a->getId() ?></div>
                    </div>
                    
                    <h3 title="<?= htmlspecialchars($a->getTitle()) ?>">
                        <span class="truncate-inline"><?= htmlspecialchars($a->getTitle()) ?></span>
                    </h3>

                    <p class="desc line-clamp-2">
                        <?= htmlspecialchars($a->getDescription()) ?>
                    </p>

                    <?php if ($a->getLink()): ?>
                        <p>
                            <a class="truncate"
                               href="<?= htmlspecialchars($a->getLink()) ?>"
                               target="_blank" rel="noopener">
                                <?= htmlspecialchars($a->getLink()) ?>
                            </a>
                        </p>
                    <?php endif; ?>

                    <div class="actions">
                        <a class="ghost-btn" href="form_view.php?id=<?= $a->getId() ?>">➡️ View</a>
                        <a class="ghost-btn" href="form_update.php?id=<?= $a->getId() ?>">✏️ Edit</a>
                        <a class="ghost-btn"
                           href="../controller/ItemController.php?delete=<?= $a->getId() ?>"
                           onclick="return confirm('Are you sure you want to delete this item?')">🗑️ Delete</a>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
    

    <?php
        // Include the pagination component
        include_once __DIR__ . '/components/pagination.php';

        // Include the footer
        include __DIR__ . '/layout/footer.php';
    ?>

</body>
</html>
