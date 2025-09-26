# 🗂️ Hoja de Ruta del Proyecto de Formulario (Escalable)

## 📌 1. Estructura del proyecto (orden y separación)

En vez de hacerlo todo en un único archivo (lo penalizan), usamos una estructura mínima pero limpia:

```
/project
  /public
    index.php        # Redirige o muestra el formulario
    form.php         # Vista del formulario
  /src
    FormHandler.php  # Lógica de validación y envío
  /views
    header.php       # Cabecera HTML
    footer.php       # Pie HTML
  /css
    style.css        # Estilos propios o los del moodle
  /vendor            # (cuando integremos PHPMailer con Composer)
```

👉 Esto cumple el requerimiento de **separar la lógica de la vista** y te permitirá crecer más adelante (añadir login, OAuth, etc.).

---

## 📌 2. Fase inicial (formulario HTML + CSS)

* Crear el formulario en `form.php`:

  * Inputs: **nombre, correo, mensaje**.
  * Usar `required` en HTML para validación básica.
  * Mantener accesibilidad (`<label>` con `for`).
* Conectar estilos desde `/css/style.css` (puedes empezar con los que te dieron en Moodle).
* Preparar el formulario para **reenviar datos en POST** hacia `FormHandler.php`.

✅ Requisito cubierto: *"Crear l'estructura en HTML" + "Crear estils CSS"*.

---

## 📌 3. Fase de validación en PHP

En `FormHandler.php`:

* Recibir `$_POST`.
* Limpiar entradas con `filter_input()` y `htmlspecialchars()` → evita inyección de código.
* Validaciones:

  * `!empty($nombre)`
  * `filter_var($email, FILTER_VALIDATE_EMAIL)`
  * `!empty($mensaje)`
* Si falta algo → mostrar errores.
* Si todo bien → mensaje “Enviat correctament”.
* Devolver al usuario los datos ya escritos para que **no se pierdan en caso de error**.

✅ Requisitos cubiertos: validación, no borrado de datos, evitar inyección de codi.

---

## 📌 4. Fase de envío de correo

* Configurar envío en dos fases:

  1. **mail() nativo de PHP** (configurando `php.ini` si lo piden).
  2. **PHPMailer** (obligatorio para nota extra).
* Instalar PHPMailer con Composer:

  ```
  composer require phpmailer/phpmailer
  ```
* Crear un servicio en `/src/MailService.php` que gestione el envío.
* Usar SMTP con parámetros en `.env` (buena práctica moderna para no exponer contraseñas en el código).

✅ Requisitos cubiertos: *“validar i enviar correu amb PHP” + PHPMailer*.

---

## 📌 5. Buenas prácticas para nota alta

* **Comentarios claros** en el código explicando qué hace cada bloque.
* **Separación clara MVC** (aunque sea mínimo):

  * Vistas (`/views`)
  * Lógica (`/src`)
  * Punto de entrada (`/public`)
* **Variables autodescriptivas** (`$userEmail`, `$userMessage`).
* **PSR-12 coding style** (indentación, nombres claros).
* **Evitar inline PHP en el HTML siempre que se pueda**.
* Preparar el proyecto para **Composer y .env** (aunque sea solo para PHPMailer).

---

## 📌 6. Futuro (más allá de la actividad)

Con esta base, podrás escalar hacia:

* Añadir **login con usuarios y contraseñas**.
* Usar **OAuth (Google/GitHub)** con librerías modernas.
* Migrar a un framework (Laravel, Symfony, Slim).
* Integrar **tests automáticos** (PHPUnit).
* Reutilizar PHPMailer para confirmaciones, recuperación de contraseña, etc.

---

# ✅ Resumen Checklist

### Para aprobar (mínimos):

* [ ] Formulario HTML con required.
* [ ] Validación PHP en `FormHandler.php`.
* [ ] Mostrar “Enviat correctament” o errores.
* [ ] Mantener datos en caso de error.
* [ ] Evitar inyección de código.
* [ ] Separar lógica y vista.

### Para nota alta:

* [ ] Usar PHPMailer con Composer.
* [ ] Comentarios en el código.
* [ ] Buenas prácticas PSR-12.
* [ ] Evitar todo en un único PHP.

