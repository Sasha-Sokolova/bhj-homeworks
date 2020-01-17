const text = document.getElementsByClassName("has-tooltip");

for (let i = 0; i < text.length; i++) {
    let hints = text[i].getBoundingClientRect();
    let faq = `<div class="tooltip tooltip_active" style="left:${hints.x}px">${text[i].title}</div>`;

    text[i].addEventListener("click", function(event) {
        event.preventDefault();
        if(!event.target.nextElementSibling.classList.contains("tooltip_active")) {
            event.target.insertAdjacentHTML("afterEnd",faq)
        }else {
            event.target.nextElementSibling.remove();
        }
    })
}

