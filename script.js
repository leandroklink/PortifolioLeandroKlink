//alterar cor da barra com a rolagem da tela

window.addEventListener("scroll", function(){

    let navbar = document.querySelector(".upbar");

    if(window.scrollY > 50){
        navbar.classList.add("scroll");
    }else{
        navbar.classList.remove("scroll");
    }

});

//Abrir pop-up
let cardP = document.querySelectorAll(".cardProjetos");

cardP.forEach(card => {

    card.addEventListener("click", () => {

        let projeto = card.dataset.projeto;

        document.querySelector(".PopUpOculto").style.display = "block";
        document.querySelector(".PopUpProjetos").style.display = "block";

        document.querySelectorAll(".conteudoProjeto").forEach(c => {
            c.style.display = "none";
        });

        document.getElementById(projeto).style.display = "block";

    });

});


//função de fechar
function fechar(){
    document.querySelector(".PopUpOculto").style.display = "none";
    document.querySelector(".PopUpProjetos").style.display = "none";
}

//fechar pop-up com Esc



document.addEventListener('keydown', function(e){
    if (e.key === "Escape"){
        if (document.querySelector(".PopUpProjetos").style.display === "block"){
            fechar();
        }
    }
})