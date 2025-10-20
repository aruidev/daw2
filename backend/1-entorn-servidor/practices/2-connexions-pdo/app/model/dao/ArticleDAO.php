<?php
require_once __DIR__ . '/../connection.php';
require_once __DIR__ . '/../entities/Article.php';

class ArticleDAO {
    private $conn;

    /**
     * Constructor per inicialitzar la connexió
     * Crea un objecte de connexió a la base de dades
     * @throws Exception si la connexió falla
     */
    public function __construct() {
        $this->conn = Connexio::getConnection();
    }

    /**
     * Obtenir tots els articles
     * @return array Llista d'objectes Article
     * @throws Exception si la consulta falla
     */
    public function getAll() {
        $stmt = $this->conn->prepare("SELECT * FROM articles");
        $stmt->execute();
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $articles = [];
        foreach ($rows as $row) {
            $articles[] = new Article($row['id'], $row['titol'], $row['cos']);
        }
        return $articles;
    }

    /**
     * Obtenir un article per ID
     * @param int $id ID de l'article
     * @return Article|null L'objecte Article o null si no existeix
     */
    public function getById($id) {
        $stmt = $this->conn->prepare("SELECT * FROM articles WHERE id=?");
        $stmt->execute([$id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($row) {
            return new Article($row['id'], $row['titol'], $row['cos']);
        }
        return null;
    }

    /**
     * Insertar un nou article
     * @param string $titol Títol de l'article
     * @param string $cos Cos de l'article
     * @return void
     */
    public function insert($titol, $cos) {
        try {
            $stmt = $this->conn->prepare("INSERT INTO articles (titol, cos) VALUES (?, ?)");
            $stmt->execute([$titol, $cos]);
        } catch (PDOException $e) {
            echo "Error inserting article: " . $e->getMessage();
        }
    }

    /**
     * Actualitzar un article existent
     * @param int $id ID de l'article a actualitzar
     * @param string $titol Nou títol de l'article
     * @param string $cos Nou cos de l'article
     * @return void
     */
    public function update($id, $titol, $cos) {
        try {
            $stmt = $this->conn->prepare("UPDATE articles SET titol=?, cos=? WHERE id=?");
            $stmt->execute([$titol, $cos, $id]);
        } catch (PDOException $e) {
            echo "Error updating article: " . $e->getMessage();
        }
    }

    /**
     * Insertar un nou article a partir d'un objecte Article
     * @param Article $article Objecte Article a inserir
     * @return void
     */
    public function insertArticle(Article $article) {
        try {
            $stmt = $this->conn->prepare("INSERT INTO articles (titol, cos) VALUES (?, ?)");
            $stmt->execute([$article->getTitol(), $article->getCos()]);
            $article->setId($this->conn->lastInsertId());
        } catch (PDOException $e) {
            echo "Error inserting article: " . $e->getMessage();
        }
    }

    /**
     * Actualitzar un article a partir d'un objecte Article
     * @param Article $article Objecte Article amb les dades actualitzades
     * @return void
     */
    public function updateArticle(Article $article) {
        try {
            $stmt = $this->conn->prepare("UPDATE articles SET titol=?, cos=? WHERE id=?");
            $stmt->execute([$article->getTitol(), $article->getCos(), $article->getId()]);
        } catch (PDOException $e) {
            echo "Error updating article: " . $e->getMessage();
        }
    }

    /**
     * Eliminar un article per ID
     * @param int $id ID de l'article a eliminar
     * @return void
     */
    public function delete($id) {
        try {
            $stmt = $this->conn->prepare("DELETE FROM articles WHERE id=?");
            $stmt->execute([$id]);
        } catch (PDOException $e) {
            echo "Error deleting article: " . $e->getMessage();
        }
    }
    
    /**
     * Cercar articles per terme en el títol
     * @param string $term Terme de cerca
     * @return array Llista d'articles que coincideixen amb el terme
     */
    public function search($term) {
        $stmt = $this->conn->prepare("SELECT * FROM articles WHERE titol LIKE ?");
        $stmt->execute(['%' . $term . '%']);
        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $articles = [];
        foreach ($rows as $row) {
            $articles[] = new Article($row['id'], $row['titol'], $row['cos']);
        }
        return $articles;
    }
}
?>
