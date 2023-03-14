document.addEventListener("DOMContentLoaded", () => {
	let d = new Date();
	let day = d.getDate();
	let month = 1 + d.getMonth();
	
	let siteLogo = document.getElementById("site-logo");
	
	// Natal
	if (month == 12 && (day == 24 || day == 25))
		siteLogo.src = "./images/protut_natal.svg";
	// Ano novo
	else if ((month == 12 && day == 31) || (month == 1 && day == 1))
		siteLogo.src = "./images/protut_ano_novo.svg";
});
