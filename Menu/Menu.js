/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.

*/

function menuComponent (array) {

  // create new elements
  const menuDiv = document.createElement('div');
  const list = document.createElement('ul');
  const menuButton = document.querySelector('.menu-button');

  // append menu <ul> to menu <div>
  menuDiv.appendChild(list);

  // add .menu class to menu <div>
  menuDiv.classList.add('menu');

  // create a <li> tag for each list item in the array
  array.forEach(object => {
    let item = document.createElement('li')
    item.textContent = object;
    list.appendChild(item);
  });
  console.log(menuDiv);

  function menuToggle() {
    console.log('Mucho gusto, menu.')

    // toggle the class 'menu--open' on the menu
    menuDiv.classList.value.includes('menu--open') ? menuDiv.classList.remove('menu--open') : menuDiv.classList.add('menu--open');
  }

  // add a click event listener to the menu button
  menuButton.addEventListener('click', menuToggle);

  // return the menu component
  return menuDiv;
}

// add the menu component to the DOM
const body = document.querySelector('body');
body.prepend(menuComponent(menuItems));