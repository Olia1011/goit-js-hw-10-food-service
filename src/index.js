import dishes  from './js/menu.json';
import dishesItem from './templates/menu-description.hbs';
import './js/theme';
import './decoration/styles.css';



const refs = {
  menuFeed: document.querySelector('.js-menu'),
}
const markup = dishesItem(dishes)
refs.menuFeed.insertAdjacentHTML('beforeend', markup);

