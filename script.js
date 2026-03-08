
window.addEventListener("scroll", function(){

    let navbar = document.querySelector(".upbar");

    if(window.scrollY > 50){
        navbar.classList.add("scroll");
    }else{
        navbar.classList.remove("scroll");
    }

});
