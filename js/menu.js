const menu = document.querySelector('.menu');
const menu_volant = document.querySelector('.menu_volant');
const croix = document.querySelector('.croix');



menu.addEventListener('click', () => {
    menu_volant.classList.toggle('ouvert');
});

croix.addEventListener('click', () => {
    menu_volant.classList.toggle('ouvert');
});