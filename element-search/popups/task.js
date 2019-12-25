// В момент запуска скрипта, покажите окно #modal_main
// Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
// По нажатию на элемент с классом show-success покажите окно #modal_success


const main = document.getElementById("modal_main");
main.classList.add("modal_active");

const close = document.getElementsByClassName("modal__close");
const firstClose = close.item(0);
firstClose.onclick = function () {
    main.classList.remove("modal_active");
}

const succes = document.querySelector(".show-success");
const modalSuccess = document.getElementById("modal_success");

succes.onclick = function () {
    main.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");

}


const closeFormSecond = document.getElementsByClassName("modal__close_times")
const secondCloseFormElement = closeFormSecond.item(1);

secondCloseFormElement.onclick = function() {
    main.classList.remove("modal_active");
    modalSuccess.classList.remove("modal_active");
}