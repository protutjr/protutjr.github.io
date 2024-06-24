"use strict";

const DB_URL = 		"https://script.google.com/macros/s/AKfycbzBR00KMCwKKKM-EAK6Jp7iS8rTJhe8tuyRiVsV8mLvxX8w8CYZSq9B8n0R0IN_6NUONQ/exec";
const FALLBACK_1 = 	"https://script.google.com/macros/s/AKfycbzBR00KMCwKKKM-EAK6Jp7iS8rTJhe8tuyRiVsV8mLvxX8w8CYZSq9B8n0R0IN_6NUONQ/exec?request=homepage_services_list";
const FALLBACK_2 = 	"https://script.google.com/macros/s/AKfycbzBR00KMCwKKKM-EAK6Jp7iS8rTJhe8tuyRiVsV8mLvxX8w8CYZSq9B8n0R0IN_6NUONQ/exec?request=homepage_services_list";
const FORM_URL = 	"https://docs.google.com/forms/d/e/1FAIpQLSe5VzcseAQt9lh_OUl5XZgOTo8LeghmZo4O2zsxzSBLDUdikQ/formResponse";

let siteData = {};
let siteLoaded = false;

function fetchSiteData(url, updateSiteDataVariable) {
	ajaxGet(url, 15000).then(resp => {
		if (updateSiteDataVariable) {
			siteData = JSON.parse(resp);
		}
		
		if (!siteLoaded) {
			let customEvent = new CustomEvent("site_loaded");
			document.dispatchEvent(customEvent);
			siteLoaded = true
		}
		
		storeSiteInfo(resp);		
	});
}

function updateSiteInfo() {
	let params = new URLSearchParams(window.location.search);
	let ignoreCache = params.has("disable_cache");
	let fullReload = params.has("full_reload");
	
	if (fullReload) {
		fetchSiteData(DB_URL + "?request=skipCache", true);		

	} else if (ignoreCache || !hasSavedInfo()) {
		fetchSiteData(DB_URL, true);

	} else {
		const DUAS_HORAS = 7200000;
		let storedData = localStorage.getItem("Protut_site_data");		
		siteData = JSON.parse(storedData);
		
		if (siteData.timestamp < (Date.now() - DUAS_HORAS)) {
			fetchSiteData(DB_URL, false);
			console.info("Updating cached site data...");
		}

		let customEvent = new CustomEvent("site_loaded");
		document.dispatchEvent(customEvent);
		siteLoaded = true;
	}
	
}

function hasSavedInfo() {
	return !!localStorage.getItem("Protut_site_data");
}

function storeSiteInfo(data) {
	localStorage.setItem("Protut_site_data", data);
}

function ajaxGet(url, timeout) {
	return new Promise(function(resolve, reject) {
		let xhttp = new XMLHttpRequest();		
		
		xhttp.onload = function() {			
			if (xhttp.status == 200) {
				resolve(xhttp.responseText);
			} else if (xhttp.status == 404) {
				reject({ error: "Not found" });
			}
		};		

		if (timeout) {
			xhttp.timeout = timeout;
			xhttp.ontimeout = function() {
				reject({ error: "Timeout" });
			};
		}
				
		let skipCacheUrl = url.includes("?") ? (url + "&ts=" + Date.now()) : (url + "?ts=" + Date.now());		
		url = skipCacheUrl;

		xhttp.open("GET", url, true);
		xhttp.send();
	});
}

window.addEventListener("DOMContentLoaded", () => updateSiteInfo());
