'use strict'

const header = document.querySelector('.js-header')
const headerSubmenu = document.querySelector('.js-header-subcontent')
const headerHeight = header.getBoundingClientRect().height

headerSubmenu.style.top = `${headerHeight}px`
