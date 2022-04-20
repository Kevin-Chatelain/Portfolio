

document.querySelectorAll('.realisation-container>div').forEach(real => {
    real.addEventListener('click', function() {
        document.querySelector('.real-show').classList.remove('hidden');
        document.querySelector('.real-show>.croix2').addEventListener('click', function () {
            document.querySelector('.real-show').classList.add('hidden');
        })

        let title = real.children[1].innerText;
        let content = real.children[2].innerText;
        
        console.log(title)
        document.querySelector('.real-show-content').innerHTML = `<h1>${title}</h1>
                                                                  <p>${content}</p>  
        
        
        `;
    })
})