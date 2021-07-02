require('../css/main.css');

import createNav  from "./nav";
import createFooter from "./footer";

const createComponent = () => {
  const element = document.createElement('div');

  element.innerHTML = 'Helo testing JS file in developement mode';
  document.body.appendChild(element);
}

createComponent();
createNav();
createFooter();