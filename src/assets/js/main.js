require('../css/main.css');

import createNav  from "./nav";
import createFooter from "./footer";
import image from "../images/waterfall.jpg";
console.log(image)

const createComponent = () => {
  const element = document.createElement('div');
  const img = document.createElement('img');

  img.src = image;
  img.style.width = '200px';

  element.classList.add('container');
  element.innerHTML = 'Helo testing JS file in developement mode';
  document.body.appendChild(element);
  element.append(img);
}

createComponent();
createNav();
createFooter();