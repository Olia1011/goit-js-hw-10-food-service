import localStorage from './storage';

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  inputSwitch: document.querySelector('.switch__input'),
}

refs.inputSwitch.addEventListener('click', themeChange);

function themeChange(e){
  if(e.currentTarget.checked === true) {
    document.body.classList.remove(theme.LIGHT);
    document.body.classList.add(theme.DARK);
    localStorage.getItem('theme','DARK');
    localStorage.setItem('theme','LIGHT');

  } else if(e.currentTarget.checked !== true){
    document.body.classList.remove(theme.DARK);
    document.body.classList.add(theme.LIGHT);
    localStorage.getItem('theme','LIGTH');
  }
}