"use strict";

function showLandingPageServices() {	
	let services = siteData.landing_page;	
	let servicesList = [services.servico_2, services.servico_1, services.servico_3];
	let fragment = document.createDocumentFragment();
	
	for (let service of servicesList) {
		let template = document.getElementById("template-service-homepage").cloneNode(true);
		template.id = "";
		template.querySelector("h5.title").innerText = service.titulo
		template.querySelector("p.description").innerText = service.texto;
		template.querySelector("i.icon").classList.add(service.icone || "fa-gear");
		template.style.display = "";
		
		fragment.appendChild(template);		
	}	
	
	let container = document.getElementById("template-service-homepage").parentElement
	container.appendChild(fragment);
	container.querySelectorAll(".fake-element").forEach(elm => elm.style.display = "none");
	
	let heights = Array.from(container.querySelectorAll("article")).map(elm => elm.clientHeight);
	let defaultHeight = Math.max(...heights);
	container.querySelectorAll("article").forEach(elm => elm.style.minHeight = defaultHeight + "px");
};

document.addEventListener("site_loaded", showLandingPageServices);
