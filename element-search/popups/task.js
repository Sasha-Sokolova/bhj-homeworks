// В момент запуска скрипта, покажите окно #modal_main
// Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
// По нажатию на элемент с классом show-success покажите окно #modal_success


const main = document.getElementById('modal_main');
main.classList.add('modal_active');

const close = document.getElementsByClassName('modal__close');
const firstClose = close.item(0);
firstClose.onclick = function(){
    main.classList.remove('modal_active');
}



const modalSuccess = document.getElementById("modal_success");

const success = document.querySelector(".show-success");



success.onclick = function(){
    main.classList.remove("modal_active");
    modalSuccess.classList.add('modal_active');

}


const closeAfter = document.getElementsByClassName('modal__close_times');
const secondClose = closeAfter.item(1);

secondClose.onclick = function(){
    main.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
}