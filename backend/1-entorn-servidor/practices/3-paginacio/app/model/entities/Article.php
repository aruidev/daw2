<?php
class Article {
    // Atributs
    private $id;
    private $titol;
    private $cos;

    /**
     * Constructor de l'objecte article
     * @param int|null $id ID de l'article (null per a nous articles)
     * @param string $titol Títol de l'article
     * @param string $cos Cos de l'article
     * @return void
     */
    public function __construct($id = null, $titol = '', $cos = '') {
        $this->id = $id;
        $this->titol = $titol;
        $this->cos = $cos;
    }

    // GETTERS
    public function getId() {
        return $this->id;
    }

    public function getTitol() {
        return $this->titol;
    }

    public function getCos() {
        return $this->cos;
    }

    // SETTERS
    public function setId($id) {
        $this->id = $id;
    }

    public function setTitol($titol) {
        $this->titol = $titol;
    }

    public function setCos($cos) {
        $this->cos = $cos;
    }
}
?>
