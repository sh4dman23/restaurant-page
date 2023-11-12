import createElementWithClass from "./common.js";

const menuObject = {
    groups: [
        {
            header: 'Main Course',
            items: [
                {
                    name: 'Very Delicious Dish',
                    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                    price: '$40',
                },
                {
                    name: 'Very Delicious Dish',
                    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                    price: '$40',
                },
            ],
        },
        {
            header: 'Soup and Salad',
            items: [
                {
                    name: 'Very Delicious Dish',
                    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                    price: '$40',
                },
                {
                    name: 'Very Delicious Dish',
                    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                    price: '$40',
                },
            ],
        },
        {
            header: 'Beverages and Desserts',
            items: [
                {
                    name: 'Very Delicious Dish',
                    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                    price: '$40',
                },
                {
                    name: 'Very Delicious Dish',
                    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                    price: '$40',
                },
            ],
        },
    ],
};

export default function loadMenu() {
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