const createFototer = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = 'footer';
  footer.style.color = 'green';
  document.body.append(footer);
}

export default createFototer;