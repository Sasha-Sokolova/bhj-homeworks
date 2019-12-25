 
const menu = document.getElementsByClassName("menu__link"); 


for (let i = 0; i < menu.length; i++) { 
    menu[i].addEventListener("click", function() {
        event.preventDefault();
        if (this.nextElementSibling.classList.contains("menu menu_sub menu_active")) {
            this.nextElementSibling.classList.remove("menu_active");
            return false
        }
        if (this.nextElementSibling.classList.contains("menu_sub")) {
            this.nextElementSibling.classList.add("menu_active");
            return false
        }        
    })
}





