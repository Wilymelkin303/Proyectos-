(function(){
    const titleArticle = [...document.querySelectorAll('.title_article')];
    console.log(titleArticle)

    titleArticle.forEach(conte_adm =>{
        conte_adm.addEventListener('click', ()=>{
            let height = 0;
            let pa_bajo = conte_adm.nextElementSibling;
            let addPadding = conte_adm.parentElement.parentElement;

            addPadding.classList.toggle('conte_article--add');
            conte_adm.children[0].classList.toggle('conte_img_article--rotate');

            if(pa_bajo.clientHeight === 0){
                height = pa_bajo.scrollHeight;
            }

            pa_bajo.style.height = `${height}px`;
        });
    });
})();