let button = document.querySelector('#list-button')
let list = document.querySelector('#main-list')

button.addEventListener('click', () => {
  list.classList.toggle('nav__list-hidden')
})
