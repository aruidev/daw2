<?php

// Modelo para validar los datos del formulario.
class FormModel {

    /**
     * Valida y sanea los datos del formulario.
     * @param array $data Datos del formulario ($_POST) [name, email, message]
     * @return array Resultado de la validación [values, errors, success]
     */
    public function validate(array $data): array {
        // Llamamos a la función clean para cada campo.
        // Asociamos el valor limpio o una cadena vacía si no existe a cada campo.
        // Debemos asignar cadena vacía como fallback para evitar error de tipos por null.
        $values = [
            'name' => $this->clean($data['name'] ?? ''),
            'email' => $this->clean($data['email'] ?? ''),
            'message' => $this->clean($data['message'] ?? ''),
        ];

        // Inicializamos mensajes de error a cada campo.
        $errors = [
            'name' => '',
            'email' => '',
            'message' => '',
        ];

        // Validamos cada campo.
        // NAME
        if ($values['name'] === '') {
            $errors['name'] = 'El nombre es obligatorio';
        }

        if (strlen($values['name']) < 2) {
            $errors['name'] = 'El nombre debe tener al menos 2 caracteres';
        }

        if (strlen($values['name']) > 50) {
            $errors['name'] = 'El nombre no puede exceder 50 caracteres';
        }

        if (!preg_match("/^[a-zA-ZÀ-ÿ\s'-]+$/u", $values['name'])) {
            $errors['name'] = 'El nombre solo puede contener letras, espacios, apóstrofes y guiones';
        }

        // EMAIL
        if ($values['email'] === '') {
            $errors['email'] = 'El correo es obligatorio';
        } elseif (!filter_var($values['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'Formato de correo inválido';
        }

        // MESSAGE
        if ($values['message'] === '') {
            $errors['message'] = 'El mensaje es obligatorio';
        }

        if (strlen($values['message']) > 2000) {
            $errors['message'] = 'El mensaje no puede exceder los 2000 caracteres';
        }

        $success = empty(array_filter($errors));

        // Devolvemos un array con los valores, errores y estado asociados.
        return [
            'values' => $values,
            'errors' => $errors,
            'success' => $success,
        ];
    }

    // Función para sanear entradas.
    // Elimina espacios, barras invertidas y convierte caracteres especiales a HTML.
    private function clean(string $value): string {
        $value = trim($value);
        $value = stripslashes($value);
        $value = htmlspecialchars($value);
        return $value;
    }
}
?>