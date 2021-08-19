var burger = document.getElementById("burger");
var nav = document.getElementById("nav-link");
const NavLinks = document.querySelectorAll(".nav-link > li");
var burgeropen = false;
burger.addEventListener("click", () => {
    nav.classList.toggle("nav-link-appear");
    NavLinks.forEach((link, index) => {
        if (link.style.animation) { link.style.animation = ""; } else {
            link.style.animation = "NavLinkAppear .3s ease forwards " + (index / 5 + 0.2) + "s";
        }
    });
    if (!burgeropen) {
        burger.classList.add("open");
        burgeropen = true;
    } else {
        burger.classList.remove("open");
        burgeropen = false;
    }
});