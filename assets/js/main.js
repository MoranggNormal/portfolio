const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");

window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};

const menu = document.querySelector(".Menu");
const toggleMenu = document.querySelector(".toggle-menu");

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("menu-open");
    menu.classList.toggle("show-menu");

    sections.forEach((e) => {
        e.classList.toggle("blur");
    });
});