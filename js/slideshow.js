/* Simple image slideshow engine
 * Author: Celso Ubaldo
 */
 
function slideshow(targetId) {
    let target = document.getElementById(targetId);
    if (target.childElementCount > 2) {        
		let currentImg = target.querySelector(".top-layer");
		let nextImg = target.querySelector(".top-layer + div") || target.firstElementChild;
		let otherElements = target.querySelectorAll("div:not(.top-layer)");
		
		for (let otherElement of otherElements) {
			otherElement.style.zIndex = "";
		}

		if (currentImg && nextImg) {
			currentImg.style.zIndex = 3;
			currentImg.classList.remove("top-layer");
		}

		nextImg.classList.add("top-layer");           
		nextImg.style.zIndex = 4;
        
        window.setTimeout(() => {slideshow(targetId)}, 7000);
    }
}

window.addEventListener("load", () => {
	window.setTimeout(() => {slideshow("main-slideshow")}, 7000);
});
