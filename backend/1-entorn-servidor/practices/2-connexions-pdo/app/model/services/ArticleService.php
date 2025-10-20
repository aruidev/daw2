<?php
require_once __DIR__ . '/../dao/ArticleDAO.php';
require_once __DIR__ . '/../entities/Article.php';

class ArticleService {
    private $dao;

    /**
     * Constructor per inicialitzar el DAO
     * @return void
     */
    public function __construct() {
        $this->dao = new ArticleDAO();
    }

    /**
     * Obtenir tots els articles
     * @return array Llista d'objectes Article
     */
    public function getArticles() {
        return $this->dao->getAll();
    }

    /**
     * Obtenir un article per ID
     * @param int $id ID de l'article
     * @return Article|null L'objecte Article o null si no existeix
     */
    public function getArticleById($id) {
        return $this->dao->getById($id);
    }

    /**
     * Insertar un nou article
     * @param string $titol Títol de l'article
     * @param string $cos Cos de l'article
     * @return void
     */
    public function insertArticle($titol, $cos) {
        $this->dao->insert($titol, $cos);
    }

    /**
     * Actualitzar un article existent
     * @param int $id ID de l'article a actualitzar
     * @param string $titol Nou títol de l'article
     * @param string $cos Nou cos de l'article
     * @return void
     */
    public function updateArticle($id, $titol, $cos) {
        $this->dao->update($id, $titol, $cos);
    }

    /**
     * Insertar un nou article a partir d'un objecte Article
     * @param Article $article Objecte Article a inserir
     * @return Article L'objecte Article inserit
     * @return void
     */
    public function insertArticleObject(Article $article) {
        $this->dao->insertArticle($article);
        return $article;
    }

    /**
     * Actualitzar un article a partir d'un objecte Article
     * @param Article $article Objecte Article a actualitzar
     * @return void
     */
    public function updateArticleObject(Article $article) {
        $this->dao->updateArticle($article);
    }

    /**
     * Eliminar un article per ID
     * @param int $id ID de l'article a eliminar
     * @return void
     */
    public function deleteArticle($id) {
        $this->dao->delete($id);
    }

    /**
     * Cercar articles per terme en el títol
     * @param string $term Terme de cerca
     * @return array Llista d'objectes Article que coincideixen amb el terme
     */
    public function searchArticles($term) {
        return $this->dao->search($term);
    }
}
?>
