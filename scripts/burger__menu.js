document.addEventListener('DOMContentLoaded', function () {
    const MENU_BTN = document.querySelector('.header__burger-menu');
    const MENU = document.querySelector('.nav-menu');

    MENU_BTN.addEventListener('click', function () {
        MENU_BTN.classList.toggle('burger-menu__activ');
        MENU.classList.toggle('nav-menu__activ');

    })
    document.addEventListener('click', function (e) {
        const isClickInsideMenu = MENU.contains(e.target);
        const isClickInsideMenuBtn = MENU_BTN.contains(e.target);

        if (!isClickInsideMenu && !isClickInsideMenuBtn) {
            MENU_BTN.classList.remove('burger-menu__activ');
            MENU.classList.remove('nav-menu__activ');
        }

    })
})