const tout = document.querySelector('.choix_bouton>p:nth-child(1)');
const groupe = document.querySelector('.choix_bouton>p:nth-child(2)');
const solo = document.querySelector('.choix_bouton>p:nth-child(3)');




document.querySelectorAll('.choix_bouton>p').forEach(p => {
    p.addEventListener('click', function () {
        document.querySelectorAll('.choix_bouton>p').forEach(p => {
            p.classList.remove('selected');
        })

        p.classList.add('selected');

        let pointer = p.getAttribute('id');
        
        document.querySelectorAll('.realisation-container>div').forEach(div => {
            div.style.display = "none";
        })

        document.querySelectorAll('.'+pointer).forEach(div => {
            div.style.display = "block";
        })
    })
})