<?php include("header.php"); ?>
<main class="background">
	<div class="container-box">
		<section class="section-imgs">
			<h2>Registre-se em nossa Newsletter para ficar por dentro das últimas promoções da Talento Moto Racing!</h2>
			<form>
				<div class="input-wrapper">
					<label>E-mail</label>
					<input type="text" id="mail">
				</div>
				<div class="input-wrapper">
					<button type="button" onclick="validateMail()">Inscrever-se</button>
				</div>
			</form>
		</section>
	</div>
</main>
<script src="../scripts/newsletter.js"></script>
<?php include("footer.php"); ?>