'use strict'

// Article Section

var isIE = false;

if (!window.navigator.msPointerEnabled) {
    isIE = true;

    const body = document.querySelector('body')

    const animationFadeIn = document.querySelectorAll('.animateFadeIn')
    const animationFadeInFromLeft = document.querySelectorAll('.animateFadeInFromLeft')
    const animationFadeInFromTop = document.querySelectorAll('.animateFadeInFromTop')
    const animFadeIn = 'fadeIn'
    const animFadeInFromLeft = 'fadeInFromLeft'
    const animFadeInFromTop = 'fadeInFromTop'

    const footer = document.querySelector('.js-footer')
    const backBtn = document.querySelector('.js-back-to-top')
    const backBtnShowClass = 'back-to-top--show'

    if(animationFadeIn || animationFadeInFromLeft || animationFadeInFromTop || footer) {
      
      const options = {
        root: null,
        threshold: 0.5,
        rootMargin: '0px'
      }

      const optionsV2 = {
        root: null,
        threshold: 0.1,
        rootMargin: '50px'
      }

      function observerAPI(animation, animationVariable) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if(entry.intersectionRatio > 0) {
              entry.target.style.animation = `${animation} ${entry.target.dataset.duration} ${entry.target.dataset.delay} ease forwards`
            }
          })
        }, options)

        animationVariable.forEach((anim) => observer.observe(anim))
      }

      observerAPI(animFadeIn, animationFadeIn)
      observerAPI(animFadeInFromLeft, animationFadeInFromLeft)
      observerAPI(animFadeInFromTop, animationFadeInFromTop)
      

      const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if(body.classList.contains('index')) {
            entry.intersectionRatio > 0 ? backBtn.classList.add(backBtnShowClass) : backBtn.classList.remove(backBtnShowClass)
          }
        })
      }, optionsV2)

      footerObserver.observe(footer)
    }
}