require('../css/main.css');

import nav from "./nav";
import image from "../images/waterfall.jpg";
console.log(image)

const createComponent = () => {
  const element = document.createElement('div');
  const footerButton = document.createElement('button');

  footerButton.innerText = 'Add footer';
  element.classList.add('container');
  element.innerHTML = 'Helo testing JS file in developement mode';
  document.body.append(nav);
  document.body.append(footerButton);
  document.body.appendChild(element);

  footerButton.addEventListener('click', () => {
    import(
      /* 
        webpackChunkName: "footer", 
        webpackPrefetch: true,  
      */ "./footer").then( addFooter => {
      document.body.appendChild(addFooter.footer)
    }); 
  })
}

createComponent();