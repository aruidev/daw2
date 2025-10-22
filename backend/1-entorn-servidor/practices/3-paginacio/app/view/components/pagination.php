<?php
/**
 * Component de paginació.
 * Espera els següents paràmetres: 
 * @param int $page Número de pàgina actual.
 * @param int $totalPages Nombre total de pàgines.
 * @param string $term Terme de cerca (default buit).
 * @param int $perPage Nombre d'elements per pàgina.
 */
if (!isset($page) || !isset($totalPages)) {
    return;
}

/**
 * Genera la URL per a una pàgina específica.
 * Manté els paràmetres de pàgina actual, cerca i rows per pàgina.
 * @param int $pageNumber Número de pàgina.
 * @param string $term Terme de cerca.
 * @param int|null $perPage Nombre d'elements per pàgina (default null).
 * @param string|null $order Ordre d'articles (ASC|DESC)(default 'ASC').
 * @return string URL generada.
 */
function pageUrl($pageNumber, $term = '', $perPage = null, $order = null) {
    $queryParams = [];
    if ($term !== '') $queryParams['term'] = $term;
    $queryParams['page'] = $pageNumber;
    if ($perPage !== null) $queryParams['perPage'] = $perPage;
    if ($order !== null) $queryParams['order'] = $order;
    // Retornem la URL amb els paràmetres.
    return 'list.php?' . http_build_query($queryParams);
}
?>
<div class="pagination" aria-label="Paginació">
    <?php if ($page > 1): ?>
        <a class="page-link ghost-btn" href="<?= pageUrl($page - 1, $term, $perPage, $order) ?>">&lt; Anterior</a>
    <?php endif; ?>

    <?php for ($i = 1; $i <= $totalPages; $i++): ?>
        <a class="page-link ghost-btn <?= $i === $page ? 'active' : '' ?>"
           href="<?= pageUrl($i, $term, $perPage, $order) ?>"><?= $i ?></a>
    <?php endfor; ?>

    <?php if ($page < $totalPages): ?>
        <a class="page-link ghost-btn" href="<?= pageUrl($page + 1, $term, $perPage, $order) ?>">Següent &gt;</a>
    <?php endif; ?>
</div>

<form action="list.php" class="per-page-container">
    <!-- Selecció d'elements per pàgina -->
    <label for="perPage" class="perpage-select">Mostrar:</label>
    <select id="perPage" name="perPage" onchange="this.form.submit()">
        <option value="1" <?= $perPage === 1 ? 'selected' : '' ?>>1</option>
        <option value="5" <?= $perPage === 5 ? 'selected' : '' ?>>5</option>
        <option value="10" <?= $perPage === 10 ? 'selected' : '' ?>>10</option>
    </select>
</form>