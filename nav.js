const navLinks = document.getElementById('nav-links');
const menuButton = document.getElementById('menu-btn');
const dropDown = document.getElementById('drop-down');
const dropDownMenu = document.getElementById('drop-down-menu');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    menuButton.classList.toggle('active')
})

dropDown.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active')
})