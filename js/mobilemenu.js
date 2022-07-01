/* Mobile menu creator, with vanilla JS
 * Author: Celso Ubaldo
 */

function goToPage(href) {
    if (href != "#")
        window.location = href;
}

function createOption(label, href) {
    let option = document.createElement("option");
    option.innerText = label;
    option.value = href;
        
    let searchStr = href.replace(/(\/index)?.html/, "");
    let currentLocation = window.location.toString();
    if (!is404Page && currentLocation.indexOf(searchStr) != -1)
		option.selected = "selected";
    return option;
}

function createOptgroup(label) {
    let optgroup = document.createElement("optgroup");
    optgroup.label = label;
    return optgroup;
}

// Detectar se está na página de Erro 404
let is404Page = !!document.getElementById("error404");

// Adicionar as <option> ao menu mobile
document.querySelectorAll("#mainav > ul > li").forEach((elm) => {
    let menu = document.getElementById("mobilemenu");
    let foo = elm.querySelector("a:first-child");
    if (!foo.classList.contains("drop")) {        
        let option = createOption(foo.innerText, foo.href);
        menu.appendChild(option);
    } else {
        let optgroup = createOptgroup(foo.innerText);
        elm.querySelectorAll("a:not(.drop)").forEach((elm2) => {
            let option = createOption(elm2.innerHTML || elm2.textContent, elm2.href);
            optgroup.appendChild(option);
        });
        menu.appendChild(optgroup);
    }
});

// Selecionar a opção "MENU" se estiver na página de Erro 404
document.getElementById("mobilemenu")[0].selected = is404Page;
