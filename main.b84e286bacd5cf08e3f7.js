/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/common.js
function createElementWithClass(tag = 'div', elementClass = '') {
    const element = document.createElement(tag);
    element.setAttribute('class', elementClass);
    return element;
}

const menuObject = {
    groups: [
        {
            header: 'Main Course',
            items: [
                {
                    name: 'Braised Chicken Legs With Grapes and Fennel',
                    info: 'Sweet-and-spicy braise, made with ribbons of fennel and juicy table grapes.',
                    price: '$39.99',
                },
                {
                    name: 'Seared Scallops With Brown Butter and Lemon Pan Sauce',
                    info: 'Scallops are always a stunner, but ours will keep making you crave more.',
                    price: '$34.99',
                },
            ],
        },
        {
            header: 'Soup and Salad',
            items: [
                {
                    name: 'Slow-Cooked Chicken Enchilada Soup',
                    info: 'This soup delivers a big bowl of fresh comfort. Toppings include avocado, sour cream and tortilla strips.',
                    price: '$19.99',
                },
                {
                    name: 'Chick-fil-A Kale Salad',
                    info: 'Made with fresh, gently massage Kale and Cabbage leaves. Doesn\'t get healthier than this!',
                    price: '$24.99',
                },
            ],
        },
        {
            header: 'Beverages and Desserts',
            items: [
                {
                    name: 'Latte Macchiato',
                    info: 'Elevate your espresso experience with our artfully layered Latte Macchiato—where rich espresso meets velvety steamed milk in perfect harmony',
                    price: '$14.99',
                },
                {
                    name: 'Double Chocolate Mousse Mud Pie',
                    info: 'Uses a chocolate cookie crust, a dense brownie layer, chocolate pudding layer, and is topped with a dollop of whipped cream',
                    price: '$19.99',
                },
            ],
        },
    ],
};
;// CONCATENATED MODULE: ./src/homeLoader.js


function loadHome() {
    const main = document.querySelector('main');

    const homePage = createElementWithClass('div', 'page homepage');

    const leftContent = createElementWithClass('div', 'left-content');

    const boldBig = createElementWithClass('div', 'bold-big');
    boldBig.textContent = 'Eat Healthy and Natural';
    leftContent.appendChild(boldBig);

    const fadedSmall = createElementWithClass('div', 'faded-small');
    fadedSmall.textContent = 'Simply The Best';
    leftContent.appendChild(fadedSmall);

    const discoverButton = createElementWithClass('button', 'discover-button');
    discoverButton.textContent = 'Discover Our Menu';
    leftContent.appendChild(discoverButton);

    const rightContent = createElementWithClass('div', 'right-content');

    homePage.appendChild(leftContent);
    homePage.appendChild(rightContent);

    main.appendChild(homePage);
}
;// CONCATENATED MODULE: ./src/menuLoader.js


function loadMenu() {
    const main = document.querySelector('main');

    const menuPage = createElementWithClass('div', 'page menupage');

    const leftContent = createElementWithClass('div', 'left-content');
    menuPage.appendChild(leftContent);

    const menu = createElementWithClass('div', 'menu');

    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Pick from Our Exquisite Dishes'
    menu.appendChild(menuHeader);

    const itemGroups = createElementWithClass('div', 'item-groups')

    // Add all groups in loops
    for (const group of menuObject.groups) {
        const groupContainer = createElementWithClass('div', 'menu-item-group');

        // Group header
        const header = document.createElement('h3');
        header.textContent = group.header;
        groupContainer.appendChild(header);

        const items = createElementWithClass('div', 'items');

        // Add group items in another nested loop
        for (const item of group.items) {
            const itemContainer = createElementWithClass('div', 'item');

            const details = createElementWithClass('div', 'details');

            const name = createElementWithClass('span', 'name');
            name.textContent = item.name;
            details.appendChild(name);

            const info = createElementWithClass('span', 'info');
            info.textContent = item.info;
            details.appendChild(info);

            const price = createElementWithClass('span', 'price');
            price.textContent = item.price;

            itemContainer.appendChild(details);
            itemContainer.appendChild(price);

            items.appendChild(itemContainer);
        }

        groupContainer.appendChild(items);

        itemGroups.appendChild(groupContainer);
    }

    menu.appendChild(itemGroups);
    menuPage.appendChild(menu);

    main.appendChild(menuPage);
}
;// CONCATENATED MODULE: ./src/contactLoader.js


function loadContacts() {
    const main = document.querySelector('main');

    const contactPage = createElementWithClass('div', 'page contactpage');

    const about = createElementWithClass('div', 'about');

    const aboutHeader = document.createElement('h2');
    aboutHeader.textContent = 'About Us';
    about.appendChild(aboutHeader);

    const aboutPara = createElementWithClass('p', 'details');
    aboutPara.textContent = 'At Restaurant, we believe in crafting more than just meals; we create experiences that linger on your palate and in your memories. Our culinary journey began with a passion for exceptional food, an unwavering commitment to quality, and a dedication to providing a welcoming haven for all who appreciate the art of dining.'
    about.appendChild(aboutPara);

    contactPage.appendChild(about);

    const information = createElementWithClass('div', 'information');

    const address = createElementWithClass('div', 'address');

    const addressHeader = document.createElement('h2');
    addressHeader.textContent = 'Contact Us';
    address.appendChild(addressHeader);

    const addressPara = document.createElement('p');
    addressPara.innerHTML = `
                                +1 (555) 123-4567
                                <br>
                                <a href="mailto:info@restaurantcuisine.com">info@restaurantcuisine.com</a>
                                <br>
                                123 Imaginary Street, Culinary City, FCT 000X, Lorem State, USL
                            `;

    address.appendChild(addressPara);
    information.appendChild(address);

    const openHours = createElementWithClass('div', 'open-hours');

    const openHoursHeader = document.createElement('h2');
    openHoursHeader.textContent = 'Open Hours';
    openHours.appendChild(openHoursHeader);

    const time1 = createElementWithClass('div', 'time');

    const time1Header = document.createElement('h3');
    time1Header.textContent = 'Tues:';
    time1.appendChild(time1Header);

    const time1Text = document.createTextNode('11:30 a.m. - 2:30 p.m.');
    time1.appendChild(time1Text);

    openHours.appendChild(time1);

    const time2 = createElementWithClass('div', 'time');

    const time2Header = document.createElement('h3');
    time2Header.textContent = 'Wed, Thurs, Fri, Sat:';
    time2.appendChild(time2Header);

    const time2Text = document.createTextNode('11:30 a.m. - 12:00 a.m.');
    time2.appendChild(time2Text);

    openHours.appendChild(time2);

    information.appendChild(openHours);

    contactPage.appendChild(information);

    main.appendChild(contactPage);
}
;// CONCATENATED MODULE: ./src/main.js





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
/******/ })()
;
//# sourceMappingURL=main.b84e286bacd5cf08e3f7.js.map