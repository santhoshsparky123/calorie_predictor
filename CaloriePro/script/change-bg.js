function change() {
  const buttonElement = document.querySelector('.theme');
  if (buttonElement.innerHTML === 'Dark Theme'){
    buttonElement.innerHTML = 'light Theme';
    document.querySelector('.tempo').classList.add('change');
    buttonElement.classList.add('color');
  } else if (buttonElement.innerHTML === 'light Theme') {
    buttonElement.innerHTML = 'Dark Theme';
    document.querySelector('.tempo').classList.remove('change');
    buttonElement.classList.remove('color');
  }
}