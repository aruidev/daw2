<?php
require_once __DIR__ . '/../model/services/ArticleService.php';

$service = new ArticleService();

// INSERTAR
if (isset($_POST['insert'])) {
    $service->insertArticle($_POST['titol'], $_POST['cos']);
    header('Location: ../view/list.php');
    exit;
}

// ACTUALIZAR
if (isset($_POST['update'])) {
    $service->updateArticle($_POST['id'], $_POST['titol'], $_POST['cos']);
    header('Location: ../view/list.php');
    exit;
}

// ELIMINAR
if (isset($_GET['delete'])) {
    $service->deleteArticle($_GET['delete']);
    header('Location: ../view/list.php');
    exit;
}
?>
