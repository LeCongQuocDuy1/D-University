const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const navbarsMobiLists = $('.header-moblie__lists');
const navbarsMobiBtn = $('.header-moblie__bars');
const closeMobiBtn = $('.header-moblie__close');

function openNavBarsMobi() {
    navbarsMobiLists.classList.add('open');
}

function closeNavBarsMobi() {
    navbarsMobiLists.classList.remove('open');
}

navbarsMobiBtn.addEventListener('click', openNavBarsMobi);
closeMobiBtn.addEventListener('click', closeNavBarsMobi);