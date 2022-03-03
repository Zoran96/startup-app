'use strict'

window.addEventListener('DOMContentLoaded', () => {
  const headerLinks = document.querySelectorAll('.js-header-menu-link')
  const headerItems = document.querySelectorAll('.js-header-menu-item')
  const header = document.querySelector('.js-header')  
  const submenu = document.querySelector('.js-header-subcontent')
  const subcontentBackBtn = document.querySelector('.js-header-subcontent-container-btn')

  function activateSubmenuDesktop() {
    headerLinks.forEach((link) => {
      onMouseEnterMenu(link)
      onMouseLeaveMenu(link)
    })

    hideSubmenu()
  }

  function onMouseEnterMenu(link) {
    link.addEventListener('mouseenter', (e) => {
      const listLink = e.target
      const listLinkClassList = listLink.classList

      listLinkClassList.add('active')
      listLink.parentElement.classList.add('show-submenu')

      headerLinks.forEach((link) => {
        if(listLink === link) return

        link.classList.add('non-active')
      })
    })
  }

  function onMouseLeaveMenu(link) {
    link.addEventListener('mouseleave', () => {
      headerLinks.forEach((link) => {
        link.classList.remove('active')
        link.classList.remove('non-active')
      })
    })

    submenu.addEventListener('mouseleave', () => {
      headerLinks.forEach((link) => {
        link.parentElement.classList.remove('show-submenu')
      })
    })
  }

  function hideSubmenu() {
    header.addEventListener('mouseover', (e) => {
      const target = e.target
      const targetClassList = target.classList

      const isSubmenuHiddenOnMouseOver = targetClassList.contains('header') || targetClassList.contains('header__container') || targetClassList.contains('header__menu')
      
      if(isSubmenuHiddenOnMouseOver) {
          headerLinks.forEach((link) => {
            link.parentElement.classList.remove('show-submenu')
          })
      } 
    })
  }

  function activateSubmenuResponsive() {
    headerItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.target.parentElement.classList.add('show-submenu')
      })
    })

    onBackBtnClick()
  }

  function onBackBtnClick() {
    subcontentBackBtn.addEventListener('click', () => {
      headerItems.forEach((item) => {
        item.classList.remove('show-submenu')
      })
    })
  }
  
  if(window.innerWidth > 1024) {
    activateSubmenuDesktop()
  } else {
    activateSubmenuResponsive()
  }
})

