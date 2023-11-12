import loadHome from './homeLoader.js';
import loadMenu from './menuLoader.js';
import loadContacts from './contactLoader.js';
import './assets/style.css';

function clearMain() {
    const main = document.querySelector('main');
    main.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
    loadHome();

    document.body.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('nav-item') || target.classList.contains('discover-button')) {
            clearMain();

            if (target.id === 'home') {
                loadHome();
            } else if (target.id === 'menu' || target.classList.contains('discover-button')) {
                loadMenu();
            } else if (target.id === 'contacts') {
                loadContacts();
            }

            document.querySelectorAll('.nav-item').forEach(element => element.classList.remove('active'));
            target.classList.add('active');
        }
    });
});