const header = document.querySelector('#header')
const nav = document.querySelector('#header-nav')

header.addEventListener('click', e => {
    if (e.target.matches('#hamburger-icon')) { 
        e.preventDefault()
        nav.classList.toggle('hidden')
    }
})