const createNav = () => {
  const nav = document.createElement('nav');
  nav.innerHTML = 'navigation';
  nav.style.color = 'red';
  document.body.appendChild(nav);
}

export default createNav;