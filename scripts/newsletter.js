
function validateMail() {
	var emailInput = document.getElementById("mail");
	var value = emailInput.value;
	emailInput.parentElement.classList.remove("invalid-field");
	emailInput.parentElement.classList.remove("success");

	var hasAt = value.indexOf('@') != -1;
	var hasDotBeforeAt = value.indexOf('.') != -1 && value.indexOf('.') > value.indexOf('@');
	var hasSomethingBeforeDot = value.indexOf('.') < value.length - 1;

	if (value.length > 0 && hasAt && hasDotBeforeAt && hasSomethingBeforeDot) {
		return emailInput.classList.add("success");
	}

	return emailInput.parentElement.classList.add("invalid-field");

}