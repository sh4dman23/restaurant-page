/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElementWithClass)
/* harmony export */ });
function createElementWithClass(tag = 'div', elementClass = '') {
    const element = document.createElement(tag);
    element.setAttribute('class', elementClass);
    return element;
}

/***/ }),

/***/ "./src/contactLoader.js":
/*!******************************!*\
  !*** ./src/contactLoader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContacts)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common.js");


function loadContacts() {
    const main = document.querySelector('main');

    const contactPage = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'page contactpage');

    const about = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'about');

    const aboutHeader = document.createElement('h2');
    aboutHeader.textContent = 'About Us';
    about.appendChild(aboutHeader);

    const aboutPara = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('p', 'details');
    aboutPara.textContent = 'At Restaurant, we believe in crafting more than just meals; we create experiences that linger on your palate and in your memories. Our culinary journey began with a passion for exceptional food, an unwavering commitment to quality, and a dedication to providing a welcoming haven for all who appreciate the art of dining.'
    about.appendChild(aboutPara);

    contactPage.appendChild(about);

    const information = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'information');

    const address = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'address');

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

    const openHours = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'open-hours');

    const openHoursHeader = document.createElement('h2');
    openHoursHeader.textContent = 'Open Hours';
    openHours.appendChild(openHoursHeader);

    const time1 = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'time');

    const time1Header = document.createElement('h3');
    time1Header.textContent = 'Tues:';
    time1.appendChild(time1Header);

    const time1Text = document.createTextNode('11:30 a.m. - 2:30 p.m.');
    time1.appendChild(time1Text);

    openHours.appendChild(time1);

    const time2 = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'time');

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

/***/ }),

/***/ "./src/homeLoader.js":
/*!***************************!*\
  !*** ./src/homeLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common.js");


function loadHome() {
    const main = document.querySelector('main');

    const homePage = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'page homepage');

    const leftContent = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'left-content');

    const boldBig = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'bold-big');
    boldBig.textContent = 'Eat Healthy and Natural';
    leftContent.appendChild(boldBig);

    const fadedSmall = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'faded-small');
    fadedSmall.textContent = 'Simply The Best';
    leftContent.appendChild(fadedSmall);

    const discoverButton = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'discover-button');
    discoverButton.textContent = 'Discover Our Menu';
    leftContent.appendChild(discoverButton);

    const rightContent = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'right-content');

    homePage.appendChild(leftContent);
    homePage.appendChild(rightContent);

    main.appendChild(homePage);
}

/***/ }),

/***/ "./src/menuLoader.js":
/*!***************************!*\
  !*** ./src/menuLoader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/common.js");


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

function loadMenu() {
    const main = document.querySelector('main');

    const menuPage = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'page menupage');

    const leftContent = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'left-content');
    menuPage.appendChild(leftContent);

    const menu = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'menu');

    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Pick from Our Exquisite Dishes'
    menu.appendChild(menuHeader);

    const itemGroups = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'item-groups')

    // Add all groups in loops
    for (const group of menuObject.groups) {
        const groupContainer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'menu-item-group');

        // Group header
        const header = document.createElement('h3');
        header.textContent = group.header;
        groupContainer.appendChild(header);

        const items = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'items');

        // Add group items in another nested loop
        for (const item of group.items) {
            const itemContainer = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'item');

            const details = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'details');

            const name = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('span', 'name');
            name.textContent = item.name;
            details.appendChild(name);

            const info = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('span', 'info');
            info.textContent = item.info;
            details.appendChild(info);

            const price = (0,_common_js__WEBPACK_IMPORTED_MODULE_0__["default"])('span', 'price');
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeLoader.js */ "./src/homeLoader.js");
/* harmony import */ var _menuLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuLoader.js */ "./src/menuLoader.js");
/* harmony import */ var _contactLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactLoader.js */ "./src/contactLoader.js");




function clearMain() {
    const main = document.querySelector('main');
    main.innerHTML = '';
}

(0,_homeLoader_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

document.body.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('nav-item') || target.classList.contains('discover-button')) {
        clearMain();

        if (target.id === 'home') {
            (0,_homeLoader_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
        } else if (target.id === 'menu' || target.classList.contains('discover-button')) {
            (0,_menuLoader_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        } else if (target.id === 'contacts') {
            (0,_contactLoader_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
        }
    }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksMERBQVE7QUFDcEIsVUFBVTtBQUNWLFlBQVksNkRBQVk7QUFDeEI7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyh0YWcgPSAnZGl2JywgZWxlbWVudENsYXNzID0gJycpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGVsZW1lbnRDbGFzcyk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MgZnJvbSBcIi4vY29tbW9uLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0cygpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgY29uc3QgY29udGFjdFBhZ2UgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAncGFnZSBjb250YWN0cGFnZScpO1xuXG4gICAgY29uc3QgYWJvdXQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWJvdXQnKTtcblxuICAgIGNvbnN0IGFib3V0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhYm91dEhlYWRlci50ZXh0Q29udGVudCA9ICdBYm91dCBVcyc7XG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXIpO1xuXG4gICAgY29uc3QgYWJvdXRQYXJhID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygncCcsICdkZXRhaWxzJyk7XG4gICAgYWJvdXRQYXJhLnRleHRDb250ZW50ID0gJ0F0IFJlc3RhdXJhbnQsIHdlIGJlbGlldmUgaW4gY3JhZnRpbmcgbW9yZSB0aGFuIGp1c3QgbWVhbHM7IHdlIGNyZWF0ZSBleHBlcmllbmNlcyB0aGF0IGxpbmdlciBvbiB5b3VyIHBhbGF0ZSBhbmQgaW4geW91ciBtZW1vcmllcy4gT3VyIGN1bGluYXJ5IGpvdXJuZXkgYmVnYW4gd2l0aCBhIHBhc3Npb24gZm9yIGV4Y2VwdGlvbmFsIGZvb2QsIGFuIHVud2F2ZXJpbmcgY29tbWl0bWVudCB0byBxdWFsaXR5LCBhbmQgYSBkZWRpY2F0aW9uIHRvIHByb3ZpZGluZyBhIHdlbGNvbWluZyBoYXZlbiBmb3IgYWxsIHdobyBhcHByZWNpYXRlIHRoZSBhcnQgb2YgZGluaW5nLidcbiAgICBhYm91dC5hcHBlbmRDaGlsZChhYm91dFBhcmEpO1xuXG4gICAgY29udGFjdFBhZ2UuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuXG4gICAgY29uc3QgaW5mb3JtYXRpb24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnaW5mb3JtYXRpb24nKTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnYWRkcmVzcycpO1xuXG4gICAgY29uc3QgYWRkcmVzc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYWRkcmVzc0hlYWRlci50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcbiAgICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NIZWFkZXIpO1xuXG4gICAgY29uc3QgYWRkcmVzc1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzc1BhcmEuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArMSAoNTU1KSAxMjMtNDU2N1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86aW5mb0ByZXN0YXVyYW50Y3Vpc2luZS5jb21cIj5pbmZvQHJlc3RhdXJhbnRjdWlzaW5lLmNvbTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMjMgSW1hZ2luYXJ5IFN0cmVldCwgQ3VsaW5hcnkgQ2l0eSwgRkNUIDAwMFgsIExvcmVtIFN0YXRlLCBVU0xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgO1xuXG4gICAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzUGFyYSk7XG4gICAgaW5mb3JtYXRpb24uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICBjb25zdCBvcGVuSG91cnMgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnb3Blbi1ob3VycycpO1xuXG4gICAgY29uc3Qgb3BlbkhvdXJzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBvcGVuSG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSAnT3BlbiBIb3Vycyc7XG4gICAgb3BlbkhvdXJzLmFwcGVuZENoaWxkKG9wZW5Ib3Vyc0hlYWRlcik7XG5cbiAgICBjb25zdCB0aW1lMSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICd0aW1lJyk7XG5cbiAgICBjb25zdCB0aW1lMUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGltZTFIZWFkZXIudGV4dENvbnRlbnQgPSAnVHVlczonO1xuICAgIHRpbWUxLmFwcGVuZENoaWxkKHRpbWUxSGVhZGVyKTtcblxuICAgIGNvbnN0IHRpbWUxVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcxMTozMCBhLm0uIC0gMjozMCBwLm0uJyk7XG4gICAgdGltZTEuYXBwZW5kQ2hpbGQodGltZTFUZXh0KTtcblxuICAgIG9wZW5Ib3Vycy5hcHBlbmRDaGlsZCh0aW1lMSk7XG5cbiAgICBjb25zdCB0aW1lMiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICd0aW1lJyk7XG5cbiAgICBjb25zdCB0aW1lMkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGltZTJIZWFkZXIudGV4dENvbnRlbnQgPSAnV2VkLCBUaHVycywgRnJpLCBTYXQ6JztcbiAgICB0aW1lMi5hcHBlbmRDaGlsZCh0aW1lMkhlYWRlcik7XG5cbiAgICBjb25zdCB0aW1lMlRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnMTE6MzAgYS5tLiAtIDEyOjAwIGEubS4nKTtcbiAgICB0aW1lMi5hcHBlbmRDaGlsZCh0aW1lMlRleHQpO1xuXG4gICAgb3BlbkhvdXJzLmFwcGVuZENoaWxkKHRpbWUyKTtcblxuICAgIGluZm9ybWF0aW9uLmFwcGVuZENoaWxkKG9wZW5Ib3Vycyk7XG5cbiAgICBjb250YWN0UGFnZS5hcHBlbmRDaGlsZChpbmZvcm1hdGlvbik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlKTtcbn0iLCJpbXBvcnQgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyBmcm9tIFwiLi9jb21tb24uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICAgIGNvbnN0IGhvbWVQYWdlID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3BhZ2UgaG9tZXBhZ2UnKTtcblxuICAgIGNvbnN0IGxlZnRDb250ZW50ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ2xlZnQtY29udGVudCcpO1xuXG4gICAgY29uc3QgYm9sZEJpZyA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdib2xkLWJpZycpO1xuICAgIGJvbGRCaWcudGV4dENvbnRlbnQgPSAnRWF0IEhlYWx0aHkgYW5kIE5hdHVyYWwnO1xuICAgIGxlZnRDb250ZW50LmFwcGVuZENoaWxkKGJvbGRCaWcpO1xuXG4gICAgY29uc3QgZmFkZWRTbWFsbCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdmYWRlZC1zbWFsbCcpO1xuICAgIGZhZGVkU21hbGwudGV4dENvbnRlbnQgPSAnU2ltcGx5IFRoZSBCZXN0JztcbiAgICBsZWZ0Q29udGVudC5hcHBlbmRDaGlsZChmYWRlZFNtYWxsKTtcblxuICAgIGNvbnN0IGRpc2NvdmVyQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnYnV0dG9uJywgJ2Rpc2NvdmVyLWJ1dHRvbicpO1xuICAgIGRpc2NvdmVyQnV0dG9uLnRleHRDb250ZW50ID0gJ0Rpc2NvdmVyIE91ciBNZW51JztcbiAgICBsZWZ0Q29udGVudC5hcHBlbmRDaGlsZChkaXNjb3ZlckJ1dHRvbik7XG5cbiAgICBjb25zdCByaWdodENvbnRlbnQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAncmlnaHQtY29udGVudCcpO1xuXG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQobGVmdENvbnRlbnQpO1xuICAgIGhvbWVQYWdlLmFwcGVuZENoaWxkKHJpZ2h0Q29udGVudCk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGhvbWVQYWdlKTtcbn0iLCJpbXBvcnQgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyBmcm9tIFwiLi9jb21tb24uanNcIjtcblxuY29uc3QgbWVudU9iamVjdCA9IHtcbiAgICBncm91cHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyOiAnTWFpbiBDb3Vyc2UnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdWZXJ5IERlbGljaW91cyBEaXNoJyxcbiAgICAgICAgICAgICAgICAgICAgaW5mbzogJ0xvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LicsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiAnJDQwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1ZlcnkgRGVsaWNpb3VzIERpc2gnLFxuICAgICAgICAgICAgICAgICAgICBpbmZvOiAnTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICckNDAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXI6ICdTb3VwIGFuZCBTYWxhZCcsXG4gICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1ZlcnkgRGVsaWNpb3VzIERpc2gnLFxuICAgICAgICAgICAgICAgICAgICBpbmZvOiAnTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICckNDAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVmVyeSBEZWxpY2lvdXMgRGlzaCcsXG4gICAgICAgICAgICAgICAgICAgIGluZm86ICdMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4nLFxuICAgICAgICAgICAgICAgICAgICBwcmljZTogJyQ0MCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcjogJ0JldmVyYWdlcyBhbmQgRGVzc2VydHMnLFxuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdWZXJ5IERlbGljaW91cyBEaXNoJyxcbiAgICAgICAgICAgICAgICAgICAgaW5mbzogJ0xvcmVtIGlwc3VtLCBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LicsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiAnJDQwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1ZlcnkgRGVsaWNpb3VzIERpc2gnLFxuICAgICAgICAgICAgICAgICAgICBpbmZvOiAnTG9yZW0gaXBzdW0sIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6ICckNDAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gICAgY29uc3QgbWVudVBhZ2UgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAncGFnZSBtZW51cGFnZScpO1xuXG4gICAgY29uc3QgbGVmdENvbnRlbnQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnbGVmdC1jb250ZW50Jyk7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobGVmdENvbnRlbnQpO1xuXG4gICAgY29uc3QgbWVudSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdtZW51Jyk7XG5cbiAgICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gJ1BpY2sgZnJvbSBPdXIgRXhxdWlzaXRlIERpc2hlcydcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuXG4gICAgY29uc3QgaXRlbUdyb3VwcyA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdpdGVtLWdyb3VwcycpXG5cbiAgICAvLyBBZGQgYWxsIGdyb3VwcyBpbiBsb29wc1xuICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgbWVudU9iamVjdC5ncm91cHMpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBDb250YWluZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnbWVudS1pdGVtLWdyb3VwJyk7XG5cbiAgICAgICAgLy8gR3JvdXAgaGVhZGVyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGdyb3VwLmhlYWRlcjtcbiAgICAgICAgZ3JvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICBjb25zdCBpdGVtcyA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdpdGVtcycpO1xuXG4gICAgICAgIC8vIEFkZCBncm91cCBpdGVtcyBpbiBhbm90aGVyIG5lc3RlZCBsb29wXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBncm91cC5pdGVtcykge1xuICAgICAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdpdGVtJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHMgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAnZGV0YWlscycpO1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICduYW1lJyk7XG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgICAgICAgICAgY29uc3QgaW5mbyA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ3NwYW4nLCAnaW5mbycpO1xuICAgICAgICAgICAgaW5mby50ZXh0Q29udGVudCA9IGl0ZW0uaW5mbztcbiAgICAgICAgICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnc3BhbicsICdwcmljZScpO1xuICAgICAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbHMpO1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmljZSk7XG5cbiAgICAgICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbXMpO1xuXG4gICAgICAgIGl0ZW1Hcm91cHMuYXBwZW5kQ2hpbGQoZ3JvdXBDb250YWluZXIpO1xuICAgIH1cblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaXRlbUdyb3Vwcyk7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVQYWdlKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2hvbWVMb2FkZXIuanMnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudUxvYWRlci5qcyc7XG5pbXBvcnQgbG9hZENvbnRhY3RzIGZyb20gJy4vY29udGFjdExvYWRlci5qcyc7XG5cbmZ1bmN0aW9uIGNsZWFyTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG59XG5cbmxvYWRIb21lKCk7XG5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1pdGVtJykgfHwgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGlzY292ZXItYnV0dG9uJykpIHtcbiAgICAgICAgY2xlYXJNYWluKCk7XG5cbiAgICAgICAgaWYgKHRhcmdldC5pZCA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICBsb2FkSG9tZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5pZCA9PT0gJ21lbnUnIHx8IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2NvdmVyLWJ1dHRvbicpKSB7XG4gICAgICAgICAgICBsb2FkTWVudSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5pZCA9PT0gJ2NvbnRhY3RzJykge1xuICAgICAgICAgICAgbG9hZENvbnRhY3RzKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=