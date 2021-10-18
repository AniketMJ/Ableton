const hamburgerMenu = document.querySelector('.hamburger-menu')
const primaryNav = document.querySelector('.primary-nav')
const headerTwo = document.querySelector('header:nth-child(2)')
const headerTwoTopPos = headerTwo.getBoundingClientRect().top
const SCROLL_UP_SHOW = -20
const SCROLL_DOWN_HIDE = 50
let prevScrollPos = window.scrollY

hamburgerMenu.addEventListener('click', () => {
    primaryNav.classList.toggle('active')
})


// Navbar shows/hides when scrolled specified pixels
window.addEventListener('scroll', () => {
    let currentScrollPos = window.scrollY

    if (currentScrollPos < headerTwoTopPos) {
        headerTwo.classList.remove('hide', 'show')
        return
    }

    if (currentScrollPos - prevScrollPos >= SCROLL_DOWN_HIDE) {
        headerTwo.classList.add('hide')
        headerTwo.classList.remove('show')
    } else if (currentScrollPos - prevScrollPos < SCROLL_UP_SHOW || prevScrollPos < SCROLL_DOWN_HIDE) {
        headerTwo.classList.add('show')
        headerTwo.classList.remove('hide')
    }

    prevScrollPos = currentScrollPos
})