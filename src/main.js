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
            let activeTab;

            if (target.id === 'home') {
                activeTab = target;
                loadHome();
            } else if (target.id === 'menu' || target.classList.contains('discover-button')) {
                activeTab = document.querySelector('#menu');
                loadMenu();
            } else if (target.id === 'contacts') {
                activeTab = target;
                loadContacts();
            }

            document.querySelectorAll('.nav-item').forEach(element => element.classList.remove('active'));
            if (activeTab) {
                activeTab.classList.add('active');
            }
        }
    });
});