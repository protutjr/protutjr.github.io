"use strict";

function listServices() {	
	const services = siteData.servicos;
	let fragment = document.createDocumentFragment();
	
	for (let service of services) {
		let template = document.getElementById("template-service").cloneNode(true);
		template.id = "";
		template.querySelector("h5").innerText = service.titulo;		
		let contentDiv = template.querySelector(".service-item");
		
		let p = document.createElement("p");
		p.classList.add("jusp");
		p.innerText = service.texto[0];
		contentDiv.appendChild(p);
						
		let a =  document.createElement("a");
		a.innerText = "Clique para ver mais...";
		contentDiv.appendChild(a);
		
		template.style.display = "";		
		template.onclick = function() { servicePopup(service.titulo) };
		
		fragment.appendChild(template);		
	}	
	
	document.getElementById("services-container").appendChild(fragment);
	
	// Padronizar altura das caixas de texto dos serviços
	let heights = Array.from(document.querySelectorAll(".service-item")).map(elm => elm.clientHeight);
	let defaultHeight = Math.max(...heights);
	document.querySelectorAll(".service-item").forEach(elm => elm.style.minHeight = defaultHeight + "px");
	
	document.getElementById("loading-services").style.display = "none";
	
	
	let params = new URLSearchParams(window.location.search);
	
	if (params.has("search")) {
		let searchTitle = params.get("search");
		searchService(searchTitle);
	}
};

function searchService(searchTitle) {
	document.getElementById("nossos-servicos").scrollIntoView();
	let title = decodeURIComponent(searchTitle);
	servicePopup(title);
}

function servicePopup(serviceTitle) {
	const services = siteData.servicos;
	const service = services.find(elm => elm.titulo.toLowerCase() == serviceTitle.toLowerCase());
	
	if (!service) {
		console.error(`Service named: ${serviceTitle} not found!`);
		return;
	}		
	
	document.getElementById("popup-title").innerText = service.titulo;	
	let contentDiv = document.getElementById("popup-content");
	contentDiv.innerHTML = "";
	
	for (let i = 0; i < service.texto.length; i++) {
		let p = document.createElement("p");
		p.classList.add("jusp");
		p.innerText = service.texto[i];								
		contentDiv.appendChild(p);		
	}

	document.getElementById("popup-servicos").style.display = "block";
}

function closePopup() {
	document.getElementById("popup-servicos").style.display = "none";
}

function addPopupListener() {
	let servicePopup = document.getElementById("popup-servicos");
	servicePopup.addEventListener("click", function(evt) {
		if (evt.target.id == "popup-servicos") {
			closePopup();
		}
	});
}

document.addEventListener("site_loaded", listServices);
document.addEventListener("site_loaded", addPopupListener);
