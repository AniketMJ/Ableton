const hamburgerMenu = document.querySelector('.hamburger-menu')
const primaryNav = document.querySelector('.primary-nav')

hamburgerMenu.addEventListener('click', () => {
    primaryNav.classList.toggle('active')
})