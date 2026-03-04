const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', function(event){
        document.querySelector(".textCard").style.display = "block";
        document.querySelector(".cardImg").style.display = "none";
        
    });

    card.addEventListener('mouseout', function(event){
        document.querySelector(".textCard").style.display = "none";
        document.querySelector(".cardImg").style.display = "inline";
    });    card.addEventListener('mouseover', function(event){
        document.querySelector(".textCard").style.display = "block";
        document.querySelector(".cardImg").style.display = "none";
        
    });

    card.addEventListener('mouseout', function(event){
        document.querySelector(".textCard").style.display = "none";
        document.querySelector(".cardImg").style.display = "inline";
    });
});