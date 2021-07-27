const header = document.querySelector('#header')
const nav = document.querySelector('#header-nav')
const innerWidth = () => window.innerWidth

header.addEventListener('click', e => {
    if (innerWidth() <= 1000) {
        if (e.target.matches('#hamburger-icon')) { 
            e.preventDefault()
            nav.classList.toggle('hidden')
        }
    }
})