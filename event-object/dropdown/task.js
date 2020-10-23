const list = document.querySelector(".dropdown__list");
const mainItem = document.querySelector(".dropdown__value");

function getMenuItem() {
    list.classList.add("dropdown__list_active");
    return false;
}
mainItem.addEventListener("click", getMenuItem);

const menuItems = document.getElementsByClassName("dropdown__item");
for (let i = 0; i < menuItems.length; i++) {
    menuItems.item(i).onclick = function() {
        mainItem.textContent = menuItems.item(i).textContent;
        list.classList.remove("dropdown__list_active");
        return false;
    }
}




















// const dropdown = document.querySelector(".dropdown__value");
// const list = document.querySelector(".dropdown__list");

// dropdown.onclick = function() {
//     if (list.classList.contains("dropdown__list_active")) {
//         list.classList.remove("dropdown__list_active");
//     } else {
//         list.classList.add("dropdown__list_active");
//     }
// }


// const item = document.body.querySelectorAll(".dropdown__item");

// for (let i = 0; i < item.length; i++) {
//     item[i].addEventListener("click", function(event) {
//         const er = this.closest('.dropdown__list');
//         if (er.classList[0] == 'dropdown__list') {
//             event.target.onclick = function () {
//                 return false;
//             }
//             dropdownValue.textContent = event.target.textContent;
//             dropdownList.classList.remove('dropdown__list_active');
//         }
//     });
// }
        
    




