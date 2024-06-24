"use strict";

function showContacts() {	
	let contatos = siteData.contatos;
	let frag1 = document.createDocumentFragment();
	let frag2 = document.createDocumentFragment();
	
	for (let contato of contatos) {
		let link = document.createElement("a");
		link.href = `https://api.whatsapp.com/send?phone=${contato.numero}&text=Ol%C3%A1,%20acessei%20o%20site%20da%20Protut%20e%20me%20interessei%20nos%20servi%C3%A7os%20da%20empresa,%20podemos%20conversar%3F`
		link.target = "_blank";
		link.innerText = contato.numero_formatado;
		
		let li = document.createElement("li");
		let i = document.createElement("i");
		i.className = "fa fa-whatsapp";
		let span = document.createElement("span");
		span.innerText = contato.numero_formatado;
		li.appendChild(i);
		li.appendChild(span);
				
		frag1.appendChild(link);
		frag2.appendChild(li);
	}	
	
	let contactList = document.getElementById("contact-list");
	if (contactList) {
		contactList.appendChild(frag1);
	}
	
	let footerList = document.getElementById("contact-footer");
	if (footerList) {
		footerList.appendChild(frag2);
		footerList.appendChild(document.createElement("li"));
	}
};

document.addEventListener("site_loaded", showContacts);
