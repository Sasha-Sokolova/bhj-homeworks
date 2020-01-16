const chatWidgetSideText = document.querySelector('.chat-widget__side-text');
chatWidgetSideText.onclick = function () {
    const chatWidget = document.querySelector('.chat-widget');
    chatWidget.classList.add('chat-widget_active');
};

const chatWidgetInput = document.getElementById('chat-widget__input');
chatWidgetInput.onkeypress = function (e) {
    if (e.which == 13) {
        const timme = new Date();
        const messageCustomer = chatWidgetInput.value;
        const messageRobot = [
            'Ничего не знаю',
            'Зачем вы пришли?',
            'Все операторы сейчас заняты!',
            'Я не могу вам помочь',
            'До свидания!',
        ],
            index = Math.floor(Math.random() * messageRobot.length);
        if (messageCustomer != '') {
            const messages = document.querySelector('.chat-widget__messages');
            messages.innerHTML += `
                    <div class="message message_client">
                        <div class="message__time">${timme.getHours()}:${timme.getMinutes()}</div>
                        <div class="message__text">${messageCustomer}</div>
                    </div>
                    <div class="message">
                            <div class="message__time">${timme.getHours()}:${timme.getMinutes()}</div>
                            <div class="message__text">${messageRobot[index]}</div>
                    </div>`;
        }
        chatWidgetInput.value = '';
    }
}