
 const burgerButton = document.querySelector('.burger');
 const burgerMenu = document.querySelector('.menu');

 const toggleMenu = () => {
   document.body.classList.toggle('page__body_lock');
   burgerButton.classList.toggle('burger_active');
   burgerMenu.classList.toggle('menu_active');
 }

 burgerButton.addEventListener('click', (event) => {
   event.stopPropagation();
   toggleMenu();
 })

 document.addEventListener('click', (event) => {
  if(document.body.classList.contains('page__body_lock')) {
    const target = event.target;
    const its_menu = target == burgerMenu || burgerMenu.contains(target);
    const its_btnMenu = target == burgerButton;
    const menu_is_active = burgerMenu.classList.contains('menu_active');
    const navItem = target.classList.contains('nav__link');

    if (!its_menu && !its_btnMenu && menu_is_active || navItem) {
        toggleMenu();
    }
  }
});
