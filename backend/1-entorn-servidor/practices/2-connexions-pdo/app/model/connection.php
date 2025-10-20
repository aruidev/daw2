<?php
class Connexio {
    public static function getConnection() {
        try {
            $conn = new PDO('mysql:host=localhost;dbname=Pt02_Alex_Ruiz', 'root', '');
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $e) {
            die("Error de connexió: " . $e->getMessage());
        }
    }
}
?>
