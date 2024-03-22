import outsideClick from ".outsideClick.js";

export default function initmenuMobile() {}

const menuButton = document.querySelector('[data-menu="menu"]');
const menuList = document.querySelector('[data-menu="list"]');

function openMenu(event) {
    menuList.classList.add("active");
    menuButton.classList.add("active");
    outsideClick(menuList, ["click", "touchstart"], () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
    });
}

menu.addEventListener("click", openMenu);
