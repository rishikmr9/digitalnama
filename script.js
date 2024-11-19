const navMenuBtn = document.querySelector(".openNavMenu"); 
const navMenu = document.querySelector("#navBar .menu");
const links = document.querySelectorAll("#navBar li");

navMenuBtn.addEventListener("click", (e) => {
    navMenu.classList.toggle("hide");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.add("hide");   
    });
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.querySelector(".content").classList.toggle("hide");
    });
});


