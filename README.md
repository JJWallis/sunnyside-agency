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
}

/* 1st encounter - CSS tricks */

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
// 1st use for mobile nav - JS Media query equivalent
```

### Continued development

Grid layout - more use cases than overall site

### Useful resources

-  [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.

## Author

-  Website - [Joshua Jameson-Wallis](https://joshuajamesonwallis.com)
-  Linkedin - [Joshua Jameson-Wallis]()

## Acknowledgments

I have left a copy of the solution I learned a lot from within this repo. This solution was featured in an email newsletter the Front End Mentor founder sent out, due its responsiveness and great taste in animation for the mobile menu/rotating orange on scroll.

###### TODO

HTML:

1st major junior project - big step up

Future accessibility = role: grid/gridcell on <div> especially

CSS:

Grid layout - whole site layout (1st time) | minmax(...px, auto) - same as min-height + keeping default height: auto | tested by adding more content | made changing layout very easy - didnt use grid-areas 1st time (re-factored + very thankful I did so!)

Images - hard to control | background imgs + then converted to width: 100% like solution | display: block reset not included till very late - white space between them when stacked on top of eachother

Content over imgs - background overlapping with it (cover size) | solution positioned over the top + fluid img so scaled with it

Mobile nav - first time with hamburger + diff style of nav | fluid 90% width | 100% width on links for greater touch targets vs padding on container

Clip-path - to create shape | better to use online tool + limited-ish browser support

Width of text + appropiate font-size to fill space in grid-items appropiately

Pseudo els for colour underline trick on links - increase opacity to 1 (alpha chanel of colour) on hover (1st time with effect)

Alignment of quotes in testimonials with flex | classes applied before - debugging practice in browser

Px width of profile imgs - solution with fixed px vs fluid % for me (lower flex-item at wrap made massive)

Background position for 4 row imgs at bottom above footer - keeping focus point in view as much as poss

Hover issues with SVGs at bottom - fill not happening on all areas (Font Awesome NPM package solution - once know how to use NPM!)

JS:

Not efficient listening each time browser resized event |

Testing, testing, testing

Testing, testing, testing
