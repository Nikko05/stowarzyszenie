const btn = document.querySelector(".hamburger__btn");
const menu = document.querySelector(".menu");

const onclick_menu = () => {
    menu.classList.toggle("menu--active");
    btn.classList.toggle("hamburger--active");
}

btn.addEventListener("click", onclick_menu);