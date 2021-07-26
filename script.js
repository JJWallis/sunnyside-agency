const header = document.querySelector('#header')
const nav = document.querySelector('#header-nav')

header.addEventListener('click', e => {
    e.preventDefault()
    if (e.target.matches('#hamburger-icon')) nav.classList.toggle('hidden')
})