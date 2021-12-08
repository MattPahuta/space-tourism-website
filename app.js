// *** Mobile navigation functionality *** //

const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

// listen for click event on navToggle
navToggle.addEventListener('click', () => {

  const visibility = nav.getAttribute('data-visible');

  if (visibility === 'false') {
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }

});

// *** Tabs behavior *** //
const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', (e) => {
  const keydownLeft = 37;
  const keydownRight = 39;

  // change 


  console.log(e.keyCode)     
})
