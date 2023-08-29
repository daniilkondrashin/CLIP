document.addEventListener('DOMContentLoaded', function () {
    const CALLBACK_BUTTON = document.querySelector('.callback__button');
    const CALLBACK_MENU = document.querySelector('#menu_contact');
    const MENU_CLOSE = document.querySelectorAll('.callback__menu-close');
    const ORDER_A_CALL = document.querySelector('#menu_order_a_call');
    const ORDER_A_CALL_BUTTON = document.querySelector('#order_a_call');

    CALLBACK_BUTTON.addEventListener('click', function () {
        CALLBACK_MENU.classList.add('callback__menu_active');
    })

    document.addEventListener('click', function (e) {
        const isClickInsideMenu = CALLBACK_MENU.contains(e.target);
        const isClickInsideButton = CALLBACK_BUTTON.contains(e.target);
        const isClickInsideOrderACall = ORDER_A_CALL.contains(e.target);

        if (!isClickInsideMenu && !isClickInsideButton && !isClickInsideOrderACall) {
            CALLBACK_MENU.classList.remove('callback__menu_active');
            ORDER_A_CALL.classList.remove('callback__menu_active');
        }
    })
    MENU_CLOSE.forEach(menuClose => {
        menuClose.addEventListener('click', function () {
            CALLBACK_MENU.classList.remove('callback__menu_active');
            ORDER_A_CALL.classList.remove('callback__menu_active');
        })
    })
    ORDER_A_CALL_BUTTON.addEventListener('click', function () {
        CALLBACK_MENU.classList.remove('callback__menu_active');
        ORDER_A_CALL.classList.add('callback__menu_active');
    })
})