# Practica 1: Formulario

Aplicación PHP que muestra un formulario, valida entradas y renderiza vistas con header/footer.

#### Cómo funciona
- Flujo: `index.php` -> `form.php` -> `FormController` -> `FormModel` -> `formView`.

## index.php
- Punto de entrada para la página principal.
- Incluye `app/view/layout/header.php` y `app/view/layout/footer.php`.

## form.php
- Página del formulario (ruta accesible desde el header).
- Incluye header/footer y requiere el controlador `app/controller/FormController.php`.

## app/controller/FormController.php
- Requiere e instancia `FormModel`.
- Inicializa arrays `values`, `errors` y booleano `success`.
- Si el método es POST, llama a `$model->validate($_POST)` y asigna `values`, `errors`, `success`.
- Prepara variables simples para la vista e incluye `app/view/pages/formView.php` y el footer.

## app/model/FormModel.php
- Método público `validate(array $data): array`:
  - Sanea los campos (`clean`: trim, stripslashes, htmlspecialchars).
  - Valida: nombre no vacío y >=2 caracteres, email obligatorio y con formato válido, mensaje obligatorio.
  - Devuelve array con `values` (saneados), `errors` (mensajes por campo) y `success` (true si no hay errores).
- `clean()` evita inyecciones.  

---


# 📨 Implementación de PHPMailer

#### Cómo funciona

- Usamos servidor smtp externo con PHPMailer (Google).
- Activamos **contraseñas de aplicación** en cuenta de Gmail (_******@sapalomera.cat_) para acceder a la cuenta de forma externa (desde la aplicación).
- Las credenciales se almacenan directamente en el archivo `MailService.php`, cambiar más adelante a `.env` cuando podamos usar librerías de entorno.

## MailService.php
- Requiere y usa los archivos de PHPMailer para que funcione la librería
- Contiene los datos, credenciales y configuración necesarios para mandar el correo bajo la función `sendEmail($name, $email, $message)`
- Llamamos a esa misma función desde `formController.php`.

#### Función `sendEmail()`
- Envuelta en `try catch`, contiene todos los datos y configuración necesarios.
- Devuelve un array asociativo con los siguientes valores: `$success` y `$error`. Así podemos obtener, manejar y mostrar errores en la vista (errores de configuración, autenticación con Google, etc.) o mensajes de éxito cuando se envía el mensaje.

