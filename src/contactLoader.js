import createElementWithClass from "./common.js";

export default function loadContacts() {
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