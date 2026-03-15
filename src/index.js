import './style.css';
import Popover from './popover';

const button = document.querySelector('#popover-btn');
const popover = new Popover(button, 'Popover title', 'And here\'s some amazing content. It\'s very engaging. Right?');

button.addEventListener('click', () => {
  popover.toggle();
});
