<?php
require_once __DIR__ . '/../connection.php';
require_once __DIR__ . '/../entities/Article.php';

class ArticleDAO {
    private $conn;

    /**
     * Constructor per inicialitzar la connexió.
     * Crea un objecte de connexió a la base de dades.
     * @throws Exception si la connexió falla.
     */
    public function __construct() {
        $this->conn = Connexio::getConnection();
    }

    /**
     * Obtenir tots els articles.
     * @return array Llista d'objectes Article.
     * @throws Exception si la consulta falla.
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
     * Obtenir un article per ID.
     * @param int $id ID de l'article.
     * @return Article|null L'objecte Article o null si no existeix.
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
     * Insertar un nou article.
     * @param string $titol Títol de l'article.
     * @param string $cos Cos de l'article.
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
     * Actualitzar un article existent.
     * @param int $id ID de l'article a actualitzar.
     * @param string $titol Nou títol de l'article.
     * @param string $cos Nou cos de l'article.
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
     * Insertar un nou article a partir d'un objecte Article.
     * @param Article $article Objecte Article a inserir.
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
     * Actualitzar un article a partir d'un objecte Article.
     * @param Article $article Objecte Article amb les dades actualitzades.
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
     * Eliminar un article per ID.
     * @param int $id ID de l'article a eliminar.
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
     * Cercar articles per terme en el títol.
     * @param string $term Terme de cerca.
     * @return array Llista d'articles que coincideixen amb el terme.
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

    /**
     * Comptar el nombre total d'articles o articles que coincideixen amb un terme.
     * @param string $term Terme de cerca (default buit).
     * @return int Nombre d'articles.
     */
    public function count($term = '') {
        if ($term === '') {
            $stmt = $this->conn->prepare("SELECT COUNT(*) AS cnt FROM articles");
            $stmt->execute();
        } else {
            $stmt = $this->conn->prepare("SELECT COUNT(*) AS cnt FROM articles WHERE titol LIKE ?");
            $stmt->execute(['%' . $term . '%']);
        }
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        return (int)$row['cnt'];
    }

    /**
     * Obtenir articles paginats.
     * @param int $limit Nombre màxim d'articles per pàgina.
     * @param int $offset Desplaçament per a la pàgina actual.
     * @param string $order Ordre d'articles (ASC|DESC)(default 'ASC').
     * @param string $term Terme de cerca (default buit).
     * @return array Llista d'articles paginats.
     */
    public function getPaginated($limit, $offset, $term = '', $order = 'ASC') {
        $order = strtoupper($order) === 'DESC' ? 'DESC' : 'ASC';

        if ($term === '') {
            $sql = "SELECT * FROM articles ORDER BY id $order LIMIT :limit OFFSET :offset";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(':limit', (int)$limit, PDO::PARAM_INT);
            $stmt->bindValue(':offset', (int)$offset, PDO::PARAM_INT);
            $stmt->execute();
        } else {
            $sql = "SELECT * FROM articles WHERE titol LIKE :term ORDER BY id $order LIMIT :limit OFFSET :offset";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(':term', '%' . $term . '%', PDO::PARAM_STR);
            $stmt->bindValue(':limit', (int)$limit, PDO::PARAM_INT);
            $stmt->bindValue(':offset', (int)$offset, PDO::PARAM_INT);
            $stmt->execute();
        }

        $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $articles = [];
        foreach ($rows as $row) {
            $articles[] = new Article($row['id'], $row['titol'], $row['cos']);
        }
        return $articles;
    }
}
?>
