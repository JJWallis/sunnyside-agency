const header = document.querySelector('#header')
const nav = document.querySelector('#header-nav')

window.addEventListener('resize', () => {
    if (window.innerWidth < 1000) {
        header.addEventListener('click', e => {
            if (e.target.matches('#hamburger-icon')) { 
                e.preventDefault()
                if (nav.style.display === 'none') {
                    nav.style.display = 'block'
                } else {
                    nav.style.display = 'none'
                }
            }
        })
    }
})

