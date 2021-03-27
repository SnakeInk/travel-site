class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__menu-icon");
        this.menuContent = document.querySelector(".site-header__menu-content");
        this.siteHeader = document.querySelector(".site-header");
        this.siteHeaderLogo = document.querySelector(".site-header__logo");
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleMenu());
    }

    toggleMenu() {
        this.menuContent.classList.toggle("site-header__menu-content--show");
        this.siteHeader.classList.toggle("site-header--expanded");
        this.siteHeaderLogo.classList.toggle("site-header__logo--orange");
        this.menuIcon.classList.toggle("site-header__menu-icon--close");
    }
}

export default MobileMenu;