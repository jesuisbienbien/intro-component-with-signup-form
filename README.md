# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![screenshot](images/screenshot.png)

### Links

- Solution URL: [View Code](https://github.com/jesuisbienbien/intro-component-with-signup-form)
- Live Site URL: [View Live Site](https://jesuisbienbien.github.io/intro-component-with-signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

**autocomplete**
_prevent browsers from autocomplete inputs on reload_

```html
<input
  id="fname"
  class="form__input"
  type="text"
  name="fname"
  value=""
  placeholder="First Name"
  autocomplete="off"
/>
```

**flex:1**
_to split a parent element into equal parts, put flex:1 on all its child elements_

```css
.wrapper {
  display: flex;
  flex-direction: row;
  gap: 5rem;
  max-width: 988px;
  margin: 5rem;
}
.wrapper > * {
  flex: 1;
}
```

**input background-image**

```css
.error-input {
  border: solid 1.5px var(--red);
  background-image: url(images/icon-error.svg);
  background-repeat: no-repeat;
  background-size: 25px 25px;
  background-position: right 10px bottom 10px;
}
```

```javascript
function removeErrors() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("error-input");
  }
  for (let i = 0; i < errorInputs.length; i++) {
    errorInputs[i].innerHTML = "";
  }
}
```

### Continued development

To be added

### Useful resources

- [Codepen](https://codepen.io/imohkay/pen/AWyojz) - I learned how to equally split the flex parent into 2 equal parts (can be done on more than 2 columns, not personally tested yet).
- [Web Dev Simplified - Youtube](https://www.youtube.com/watch?v=In0nB0ABaUk&ab_channel=WebDevSimplified) - Reviewed on how to validate form using JS.

## Author

- Github - [Nguyen Nguyen](https://github.com/jesuisbienbien)
- Frontend Mentor - [@jesuisbienbien](https://www.frontendmentor.io/profile/jesuisbienbien)

## Acknowledgments
