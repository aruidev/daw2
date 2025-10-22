<?php
class Connexio {
    /**
     * Estableix i retorna una connexió PDO a la base de dades.
     * @return PDO La connexió a la base de dades.
     * @throws PDOException Si hi ha un error en la connexió.
     * @return PDO
     */
    public static function getConnection() {
        try {
            $conn = new PDO('mysql:host=localhost;dbname=Pt03_Alex_Ruiz', 'root', '');
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $e) {
            die("Error de connexió: " . $e->getMessage());
        }
    }
}
?>
