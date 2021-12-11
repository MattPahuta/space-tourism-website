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
// ********************* //
// split into seperate JS file? - event listeners throw errors on home page 
const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]'); // node list

tabList.addEventListener('keydown', updateTabFocus)

tabs.forEach(tab => {
  tab.addEventListener('click', updateTabPanel);
})

let tabFocus = 0;
function updateTabFocus(e) {
  const keydownLeft = 37; // ArrowLeft keyCode
  const keydownRight = 39; // ArrowRight keyCode

  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute('tabindex', -1);
    
    if (e.keyCode === keydownRight) {
      tabFocus += 1;
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
    } else if (e.keyCode === keydownLeft) {
      tabFocus -= 1;
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }
  
    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
  }
}


// show/hide destination info panels
function updateTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetPic = targetTab.getAttribute("data-image");
  
  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  // update active/selected states of buttons
  tabContainer.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);
  targetTab.setAttribute("aria-selected", true);

  // mainContainer
  //   .querySelectorAll('[role="tabpanel"]')
  //   .forEach((panel) => panel.setAttribute('hidden', true));
  // refactor of above:
  hideContent(mainContainer, '[role="tabpanel"]')
  // mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
  // refactor of above:
  showContent(mainContainer, [`#${targetPanel}`])

  hideContent(mainContainer, 'picture')
  // update image
  // mainContainer
  // .querySelectorAll('picture')
  // .forEach((pic) => pic.setAttribute('hidden', true));

  // mainContainer.querySelector([`#${targetPic}`]).removeAttribute('hidden');
  // refactor of above:
  showContent(mainContainer, [`#${targetPic}`])

}

function hideContent(parent, content) {
  parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute('hidden', true));
}

function showContent(parent, content) {
  parent
    .querySelector(content)
    .removeAttribute('hidden');
}

