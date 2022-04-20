const soucoupe = document.querySelector('.soucoupe');

soucoupe.addEventListener('click', () => {
    document.querySelector('.easter_egg').classList.add('opacity-message');

    function suppr() {
        document.querySelector('.easter_egg').classList.remove('opacity-message'); 
        console.log('ahouis');
    }

    setTimeout(suppr, 8000);
});


