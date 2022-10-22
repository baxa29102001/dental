const header_burger_menu = document.querySelector(".header_burger_menu")

const phone_nav = document.querySelector(".phone_navigation")

header_burger_menu.addEventListener("click", toggleNav)

console.log("hello");
function toggleNav() {
    if (phone_nav.classList.contains("active")) {
        phone_nav.classList.remove("active")

        header_burger_menu.setAttribute("src", './img/burger.svg')
    } else {
        phone_nav.classList.add("active")
        header_burger_menu.setAttribute("src", './img/close.svg')
    }
    
}