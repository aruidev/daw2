<?php
?>

<section class="container">
	<h2>Formulario</h2>

	<form action="" method="post" novalidate>
		<div>
			<label for="name">Nombre:</label>
			<input type="text" id="name" name="name" value="<?php echo $name; ?>" required>
			<?php
			// Mostramos mensaje de error si existe.
			if ($nameErr): ?><span class="error">* <?php echo $nameErr; ?></span><?php endif; ?>
		</div>
		<div>
			<label for="email">Correo:</label>
			<input type="email" id="email" name="email" value="<?php echo $email; ?>" required>
			<?php 
			// Mostramos mensaje de error si existe
			if ($emailErr): ?><span class="error">* <?php echo $emailErr; ?></span><?php endif; ?>
		</div>
		<div>
			<label for="message">Mensaje:</label>
			<textarea id="message" name="message" required><?php echo $message; ?></textarea>
			<?php 
			// Mostramos mensaje de error si existe
			if ($messageErr): ?><span class="error">* <?php echo $messageErr; ?></span><?php endif; ?>
		</div>
		<div>
			<button type="submit">Enviar</button>
			<button type="reset">Limpiar</button>
		</div>
	</form>

	<?php 
	if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        if ($success) {
            echo '<p class="success">✅ Formulario enviado correctamente.</p>';
        } else {
            echo '<p class="error">❌ Error al enviar el formulario.</p>';
            if (!empty($mailError)) {
                echo '<pre class="error">' . htmlspecialchars($mailError) . '</pre>';
            }
        }
    }
    ?>
</section>
