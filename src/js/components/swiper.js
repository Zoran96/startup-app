'use strict';

var isIE = false;

if (!window.navigator.msPointerEnabled) {
    isIE = true;

    const swiper = new Swiper('.swiper', {
      loop: true,
    
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
}