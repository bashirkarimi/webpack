
import nav  from "./nav";
import footer from "./footer";


function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Helo testing JS file in developement mode';

  return element;
}
console.log('debug it')
console.log(nav)
document.body.appendChild(component());
document.body.appendChild(nav);
document.body.appendChild(footer)