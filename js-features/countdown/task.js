const timer = function() {
    let time = document.getElementById("timer");
        time.textContent --;
        if (time.textContent <= 0) {
            alert('Вы победили в конкурсе!');
            clearInterval(interval);
        }
    }
    const interval = setInterval(timer, 1000);
    interval;