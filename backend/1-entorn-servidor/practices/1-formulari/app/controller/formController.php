<?php
// Requerimos el modelo del formlario.
require_once __DIR__ . '/../model/FormModel.php';
// Requerimos el servicio que maneja el envío de Email con PHPMailer.
require_once __DIR__ . '/MailService.php';

// Instanciamos el modelo del formulario.
$model = new FormModel();

// Inicializamos valores por defecto.
// Arrays asociativos para valores y errores.
$values = [
	'name' => '',
	'email' => '',
	'message' => ''
];
$errors = [
	'name' => '',
	'email' => '',
	'message' => ''
];
// Booleano para indicar si el formulario se envió correctamente.
$success = false;
$mailError = '';

// Si el formulario se envió (método POST), validamos el formulario mediante el modelo, y obtenemos los valores, errores y estado de éxito.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $result = $model->validate($_POST);
    $values = $result['values'];
    $errors = $result['errors'];
    $success = $result['success'];

	// Si la validación fue exitosa, enviamos el email
    if ($success) {
		// Usamos la funcion de MailService para enviar el email.
        $mailResult = sendEmail($values['name'], $values['email'], $values['message']);
        if ($mailResult['success']) {
            $success = true;
        } else {
            $success = false;
			// Si falla, guardamos el error para mostrarlo en la vista.
            $mailError = $mailResult['error'];
        }
    }
}

// Hacemos disponibles variables simples para la vista.
$name = $values['name'];
$email = $values['email'];
$message = $values['message'];

$nameErr = $errors['name'];
$emailErr = $errors['email'];
$messageErr = $errors['message'];

// Incluimos la vista.
include __DIR__ . '/../view/pages/formView.php';
?>
