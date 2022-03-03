'use strict'

const loadMoreBTN = document.querySelector('.js-crew-module-container .secondary-btn')
const boxes = document.querySelectorAll('.js-crew-module-box')
let currentItems = 3

if(loadMoreBTN) {
  loadMoreBTN.addEventListener('click', (e) => {
    e.preventDefault()
  
    for (let i = currentItems; i < currentItems + 3; i++) {
      if (boxes[i]) boxes[i].style.display = 'block'
    }
  
    currentItems += 3
  
    if (currentItems >= boxes.length) e.target.style.display = 'none'
  })
}


