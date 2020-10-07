const number = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

function click() {
    number.textContent ++;
    cookie.width = "500";
    if (number.textContent % 2 == 0){
        cookie.width = "250";
    }
}
cookie.onclick = click;