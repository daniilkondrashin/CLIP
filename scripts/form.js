"use strict"

document.addEventListener('DOMContentLoaded', function() {
    const errorMsgName = document.getElementById('error_name');
    const errorMsgPhone = document.getElementById('error_phone');
    const form = document.getElementById('form');
    const sendButton = document.querySelector('.callback-menu__button');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);
        if (error === 0) {
            sendButton.innerHTML = 'Отправка';
            sendButton.disabled = true;
            sendButton.classList.add('callback-menu__button_disabled');
            
            let respanse = await fetch('mail.php', {
                method: 'POST',
                body: formData
            });
            if (respanse.ok) {
                sendButton.innerHTML = 'Отправлено!';
                console.log('Done!');
                let result = await respanse.json();
                form.reset();
            } else {
                console.log('error');
            }
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._rec');
        for(let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveName(input);
            formRemovePhone(input);

            if (document.querySelector('._name').value === '') {
                formAddErrorName(input);
                error++;
            }
            if (document.querySelector('._phone').value === '') {
                formAddErrorPhone(input);
                error++;
            }
        }
        return error;
    }

    function formAddErrorName(input) {
        errorMsgName.classList.add('input-error_activ')
    }
    function formAddErrorPhone(input) {
        errorMsgPhone.classList.add('input-error_activ')
    }

    function formRemoveName(input) {
        errorMsgName.classList.remove('input-error_activ')
    }
    function formRemovePhone(input) {
        errorMsgPhone.classList.remove('input-error_activ')
    }
})