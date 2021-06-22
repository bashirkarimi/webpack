function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Helo testing JS file in developement mode';

  return element;
}
console.log('debug it')
document.body.appendChild(component());