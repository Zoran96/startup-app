'use strict'

const videoContainer = document.querySelector('.js-videos-module-main-video-container')
const video = document.querySelector('.js-videos-module-main-video')
const videoBtn = document.querySelector('.js-videos-module-main-video-btn')
const videoPoster = document.querySelector('.js-videos-module-main-video-poster')
const videoBtnClickedClass = 'videos-module__main-video-btn--clicked'

if(videoContainer) {
  videoContainer.addEventListener('click', () => {
    videoBtn.classList.add(videoBtnClickedClass)
    video.src += '&autoplay=1'
    
    setTimeout(() => {
      videoBtn.classList.add('remove')
      videoPoster.classList.add('remove')    
    }, 600);
  })  
}

