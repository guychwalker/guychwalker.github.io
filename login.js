const inputFields = document.querySelectorAll("input[type='text']");
inputFields.forEach(field => {
	field.addEventListener("input", () => {
		const nextField = field.nextElementSibling;
		if (nextField && field.value.length >= 1) {
			nextField.focus();
		}
	});
});