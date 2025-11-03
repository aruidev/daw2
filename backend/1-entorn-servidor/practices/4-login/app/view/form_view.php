<?php
require_once __DIR__ . '/../model/services/ItemService.php';
$service = new ItemService();
$item = $service->getItemById($_GET['id']);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>View item</title>
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
    // Include the header
    include __DIR__ . '/layout/header.php';
    ?>

    <div class="container">
        <h1>View item</h1>
        <div>
            <h2><?= htmlspecialchars($item->getTitle()) ?></h2>
            <p><?= htmlspecialchars($item->getDescription()) ?></p>
            <a href="<?= htmlspecialchars($item->getLink()) ?>" target="_blank" rel="noopener noreferrer"><?= htmlspecialchars($item->getLink()) ?></a>
        </div>
        <br>
            <a class="ghost-btn" href="list.php">⬅️ Back</a>
    </div>

    <?php
        // Include the footer
        include __DIR__ . '/layout/footer.php';
    ?>

</body>
</html>
