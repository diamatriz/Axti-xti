class Header {
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        burgerButton: '[data-js-header-burger-button]',
        menuList: '.header__menu-list', // Добавляем селектор списка меню
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay);
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton);
        this.menuListElement = this.rootElement.querySelector(this.selectors.menuList); // Находим список меню
        this.isMenuOpen = false;

        this.bindEvents();
    }

    onBurgerButtonClick = () => {
        this.toggleMenu();
    }

    onDocumentClick = (event) => {
        // Если меню открыто И клик был НЕ по списку меню И НЕ по бургеру
        if (
            this.isMenuOpen &&
            !this.menuListElement.contains(event.target) &&
            !this.burgerButtonElement.contains(event.target)
        ) {
            this.closeMenu();
        }
    }

    toggleMenu = () => {
        this.isMenuOpen ? this.closeMenu() : this.openMenu();
    }

    openMenu = () => {
        this.burgerButtonElement.classList.add(this.stateClasses.isActive);
        this.overlayElement.classList.add(this.stateClasses.isActive);
        document.documentElement.classList.add(this.stateClasses.isLock);
        this.isMenuOpen = true;
    }

    closeMenu = () => {
        this.burgerButtonElement.classList.remove(this.stateClasses.isActive);
        this.overlayElement.classList.remove(this.stateClasses.isActive);
        document.documentElement.classList.remove(this.stateClasses.isLock);
        this.isMenuOpen = false;
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);
        document.addEventListener('click', this.onDocumentClick);
    }

    destroy() {
        this.burgerButtonElement.removeEventListener('click', this.onBurgerButtonClick);
        document.removeEventListener('click', this.onDocumentClick);
    }
}

export default Header;