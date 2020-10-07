const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for (let i = 1; i < 10; i++) {
    let hole = document.getElementById(`hole${i}`);
    function getHole(i) {
        return hole
    }
    getHole(i);
    hole.onclick = function () {
        if (hole.className.includes('hole_has-mole') == true) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if (dead.textContent == 10) {
            alert ('Вы победили!');
            dead.textContent = 0;
            lost.textContent = 0;
        }
        
        if (lost.textContent == 5) {
            alert ('Вы проиграли');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}


