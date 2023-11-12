export default function createElementWithClass(tag = 'div', elementClass = '') {
    const element = document.createElement(tag);
    element.setAttribute('class', elementClass);
    return element;
}

export const menuObject = {
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