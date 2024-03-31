//! change theme
const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const currentThemeName = document.getElementById('current-theme');
toggleThemeBtns.forEach(toggleThemeBtn => {
    toggleThemeBtn.addEventListener("click", () => {
        let currentTheme = localStorage.getItem("theme")
        if(currentTheme === 'light'){
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme","dark");
            currentThemeName.innerHTML = 'تم روشن'
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme","light");
            currentThemeName.innerHTML = 'تم تیره'
        }
    });
})

// ! mobile submenu
const subMenuIcon = document.getElementById('submenu-icon');
const mobileSubmenu = document.getElementById('mobile-submenu');
const submenuSvg = document.getElementById('submenu-svg');
subMenuIcon.addEventListener('click',event => {
    mobileSubmenu.classList.toggle('sub-menu--open');
    submenuSvg.classList.toggle('rotate-180')
});

//! mobile menu
const mobileMenu = document.getElementById('mobile_menu');
const mobileMenuCloseBtn = document.getElementById('close-mobile-menu');
const mobileMenuBtn = document.getElementById('mobile-menu-icon');

mobileMenuCloseBtn.addEventListener('click',() => {
    close_mobile(mobileMenu,'mobile_menu-close');
})
mobileMenuBtn.addEventListener('click',() => {
    open_mobile(mobileMenu,'mobile_menu-open');
})

//! mobile cart
const mobileCartCloseBtn = document.getElementById("mobile-cart-close");
const mobileCart = document.getElementById('mobile-cart');
const mobileCartBtn = document.getElementById('mobile-cart-btn');

mobileCartCloseBtn.addEventListener('click',() => {
    close_mobile(mobileCart,'mobile_cart-close');
});

mobileCartBtn.addEventListener('click',() => {
    open_mobile(mobileCart,'mobile_cart-open');
})

//! overlay
const overlay = document.querySelector('.overlay');
overlay.addEventListener('click',() => {
    close_mobile(mobileMenu,'mobile_menu-close');
    close_mobile(mobileCart,'mobile_cart-close');
});

//! funcs
function close_mobile(element,elemenClass){
    element.className = elemenClass;
    overlay.classList.remove('overlay-open');
}

function open_mobile(element,elemenClass){
    element.className = elemenClass;
    overlay.classList.add('overlay-open');
}