// burger menu bar
let menuFlag = false;
// nav bar menu div
const menu = document.getElementById('navBar');

// burger menu click event
document.getElementById('burger-icon').addEventListener('click', () => {
    if (!menuFlag) {
        menuFlag = true;
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
        menuFlag = false;
    }
});