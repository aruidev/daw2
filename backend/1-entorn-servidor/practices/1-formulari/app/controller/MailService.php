<?php
require_once(__DIR__ . '../../../lib/PHPMailer/src/PHPMailer.php');
require_once(__DIR__ . '../../../lib/PHPMailer/src/SMTP.php');
require_once(__DIR__ . '../../../lib/PHPMailer/src/Exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;



/**
 * Enviar email con PHPMailer usando SMTP de Gmail.
 * Devuelve array con ['success' => booleano, 'error' => mensaje] en caso de fallo
 */
function sendEmail($name, $email, $message) {
    // Credencials de Gmail
    $gmail_username = getenv('gmail_username');
    $gmail_password = getenv('gmail_password');

    try {
        // Crea instancia de PHPMailer
        $mail = new PHPMailer(true);
        
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $gmail_username;
        $mail->Password = $gmail_password;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->CharSet = 'UTF-8';

        // Configuración del email
        $mail->setFrom($email, $name);
        $mail->addAddress('a.ruiz7@sapalomera.cat', 'Destinatari');
        $mail->addReplyTo($email, $name);
        
        // Contingut del email
        $mail->isHTML(false);
        $mail->Subject = 'Nou missatge de contacte de ' . $name;
        $mail->Body = "Has rebut un nou missatge de contacte:\n\n";
        $mail->Body .= "Nom: " . $name . "\n";
        $mail->Body .= "Email: " . $email . "\n\n";
        $mail->Body .= "Missatge:\n" . $message . "\n";
        
        // Opciones SMTP
        $mail->SMTPDebug = 0;
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        $mail->Timeout = 50;
        
        $mail->send();
        return ['success' => true];
        
    } catch (Exception $e) {
        return [
            'success' => false,
            'error' => $e->getMessage()
        ];
    }
}
?>