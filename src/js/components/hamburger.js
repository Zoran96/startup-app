'use strict'

const body = document.querySelector('body')
const hamburgerBTN = document.querySelector('.js-header-toggle')
const headerNavbar = document.querySelector('.js-header-navbar')
const headerLinks = document.querySelectorAll('.js-header-menu-link')
const headerToggleClickedClass = 'header__toggle--clicked'

hamburgerBTN.addEventListener('click', () => {
    body.classList.toggle('disable-scroll')

    hamburgerBTN.classList.toggle(headerToggleClickedClass)
    headerNavbar.classList.toggle(headerToggleClickedClass)

    if(!headerNavbar.classList.contains(headerToggleClickedClass)) {
      headerLinks.forEach((link) => link.parentElement.classList.remove('show-submenu'))
    }
})

