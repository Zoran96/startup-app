'use strict'

const body = document.querySelector('body')
const modalPreviews = document.querySelectorAll('.js-videos-module-preview')
const modalContainers = document.querySelectorAll('.js-videos-module-preview-modal-container')
const closeBtns = document.querySelectorAll('.js-videos-module-preview-modal-btn')
const showModalClass = 'videos-module__preview--show-modal'

function hideModal(preview) {
  preview.classList.remove(showModalClass)
  body.classList.remove('disable-scroll')
}

function showModal(preview) {
  preview.classList.add(showModalClass)
  body.classList.add('disable-scroll')
}

modalPreviews.forEach((preview) => {
  preview.addEventListener('click', (e) => {
    e.preventDefault()

    if(e.target.classList.contains('videos-module__preview-img') || e.target.classList.contains('videos-module__preview-link')) showModal(preview)
  })

  preview.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' || e.key === 'Esc') hideModal(preview)
  })

  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => hideModal(preview))
  })

  modalContainers.forEach((container) => {
    container.addEventListener('click', () => hideModal(preview))
  })
})

