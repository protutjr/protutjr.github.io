function dropdownListener(evt) {
    if (evt.target.tagName.toLowerCase() != "header") return;
    
    let parent = evt.target.parentElement;
    if (parent.classList.contains("dropdown-visible"))
        parent.classList.remove("dropdown-visible");
    else
        parent.classList.add("dropdown-visible");
}

window.addEventListener("load", () => {
    let containers = document.getElementsByClassName("dropdown-container");
    for (let container of containers) {
        container.addEventListener("click", dropdownListener);
    }
});
