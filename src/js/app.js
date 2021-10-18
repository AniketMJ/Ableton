const hamburgerMenu = document.querySelector('.hamburger-menu')
const primaryNav = document.querySelector('.primary-nav')
const headerTwo = document.querySelector('header:nth-child(2)')
const headerTwoTopPos = headerTwo.getBoundingClientRect().top
let prevScrollPos = window.scrollY

console.log(headerTwoTopPos)

hamburgerMenu.addEventListener('click', () => {
    primaryNav.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    let currentScrollPos = window.scrollY

    if (currentScrollPos < headerTwoTopPos) {
        headerTwo.classList.remove('hide', 'show')
        return
    }

    console.log('running3')
    console.log(prevScrollPos, currentScrollPos, currentScrollPos - prevScrollPos)
    headerTwo.classList.add('show')
    headerTwo.classList.remove('hide')

    if (currentScrollPos - prevScrollPos > 100) {
        console.log('running1')
        headerTwo.classList.add('hide')
        headerTwo.classList.remove('show')

        return
    }

    if (currentScrollPos - prevScrollPos < -50) {
        console.log('running2')
        headerTwo.classList.add('show')
        headerTwo.classList.remove('hide')

        return
    }

    prevScrollPos = currentScrollPos
})