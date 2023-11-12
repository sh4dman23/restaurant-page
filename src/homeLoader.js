import createElementWithClass from "./common.js";

export default function loadHome() {
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