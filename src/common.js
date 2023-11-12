export default function createElementWithClass(tag = 'div', elementClass = '') {
    const element = document.createElement(tag);
    element.setAttribute('class', elementClass);
    return element;
}