# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef) on Frontend Mentor

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
   -  [Continued development](#continued-development)
   -  [Useful resources](#useful-resources)
-  [Author](#author)
-  [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Your users should be able to:

-  View the optimal layout for the site depending on their device's screen size
-  See hover states for all interactive elements on the page

### Screenshot

![](./Screenshot.png)

### Links

-  Live Site URL:

## My process

### Built with

-  Semantic HTML5 markup
-  Flexbox
-  CSS Grid
-  Mobile-first workflow
-  Vanilla JS

### What I learned

```html
<a href="/" aria-label="Sunnyside logo"
   ><img src="/images/logo.svg" alt="Sunnyside logo" class="logo-header"
/></a>
<button type="button" class="hamburger-btn">
   <img
      src="/images/icon-hamburger.svg"
      alt="Hamburger navigation icon"
      id="hamburger-icon"
      class="hamburger"
      aria-label="Hamburger naviation icon"
   />
</button>
```

1st major junior project - big step up

Mobile nav - first time with hamburger + diff style of nav | fluid 90% width | 100% width on links for greater touch targets vs padding on container

```css
main {
   grid-template-rows:
      minmax(300px, auto) minmax(300px, auto) auto minmax(300px, auto)
      repeat(2, auto)
      1fr minmax(460px, auto);
   grid-template-areas: ...;
}

.main-nav {
   transform: translate(-50%, -50%);
   /* 1st encounter - CSS tricks */
}

.main-nav::before {
   clip-path: polygon(100% 1%, 0% 100%, 100% 100%);
}
```

```js
const innerWidth = () => window.innerWidth

header.addEventListener('click', (e) => {
   if (innerWidth() <= 1000) {
      if (e.target.matches('#hamburger-icon')) {
         e.preventDefault()
         nav.classList.toggle('hidden')
      }
   }
})
```

Not efficient listening each time browser resized event (desire to change) | 1st use - JS Media query equivalent

### Continued development

I would like to continue using grid to create full-page layouts, as well as experimenting with other situations where currently I might not think to use it.

In addition, to make the grid container and items more accessible, using a `role="grid/gridcell"` would be more favourable to provide some extra context for assistive technologies.

Numerous problems occured with the hover states of the social icon SVG's within the footer, as the `fill` colour would not change when hovering within the gaps of the original shape. In the future, I would like to learn how to use NPM to install Font Awesome's icon package, which supposedly has greater built Javascript support to fix those hover problems.

### Useful resources

-  [CSS Centering Complete Guide](https://css-tricks.com/centering-css-complete-guide/) - This helped me with regards to centering the mobile navigation as the viewport grew wider. The `translate(50%, -50%)` vertical centering method works very nicely when positioning content, and as such will become incredibly useful for future projects.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

## Acknowledgments

I have left a copy of the solution I used within this repo. This solution was featured in an email newsletter the Front End Mentor founder sent out, due its responsiveness and great taste in animation for the mobile menu and rotating orange on scroll.

CSS:

Grid layout - whole site layout (1st time) | minmax(...px, auto) - same as min-height + keeping default height: auto | tested by adding more content | made changing layout very easy - didnt use grid-areas 1st time (re-factored + very thankful I did so!)

Images - hard to control | background imgs + then converted to width: 100% like solution | display: block reset not included till very late - white space between them when stacked on top of eachother

Content over imgs - background overlapping with it (cover size) | solution positioned over the top + fluid img so scaled with it

Clip-path - to create shape | better to use online tool + limited-ish browser support

Pseudo els for colour underline trick on links - increase opacity to 1 (alpha chanel of colour) on hover (1st time with effect - didn't think to use pseudo els at 1st)

Px width of profile imgs - solution with fixed px vs fluid % for me (lower flex-item at wrap made massive)

Background position for 4 row imgs at bottom above footer - keeping focus point in view as much as poss (vs cover + center all the time)
