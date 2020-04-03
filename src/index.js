import dishes  from './menu.json';
import dishesItem from './menu-description.hbs';
import './theme';
import './styles.css';



const refs = {
  menuFeed: document.querySelector('.js-menu'),
}
const markup = dishesItem(dishes)
refs.menuFeed.insertAdjacentHTML('beforeend', markup);

