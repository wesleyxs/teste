const menuMobile = document.querySelector(".menu-mobile")
const body = document.querySelector("body")

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list")
    ?menuMobile.classList.replace("bi-list", "bi-x")
    :menuMobile.classList.replace("bi-x","bi-list")
    body.classList.toggle("menu-nav-active")
});

/* fecha menu quando clicar em algum item e muda icone para list*/

const navItem = document.querySelectorAll(".nav-Item");


navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) { 
            body.classList.remove("menu-nav-active");
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    });
});


//animação usando os atribulto data-anime

const item= document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset
    console.log(windowTop)

}
animeScroll()
