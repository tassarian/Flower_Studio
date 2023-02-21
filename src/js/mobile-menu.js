/**
 * mobile_menu
 * this is the neccesary javascript for the mobile menu
 */
(() => {
  const maxSize = 768; // pixels
  const isOpenClass = 'is_open';

  const modalId = 'mobile_menu';
  const openMobileMenuId = 'open_mobile_menu';
  const closeMobileMenuId = 'close_mobile_menu';
  const navigationLinkMobileClass = 'navigations__link_mb';

  const mobileMenu = document.getElementById(modalId);
  const openMobileMenu = document.getElementById(openMobileMenuId);
  const closeMobileMenu = document.getElementById(closeMobileMenuId);
  const navigationLinks = Array.from(
    document.getElementsByClassName(navigationLinkMobileClass)
  );

  const closeMenu = () => {
    mobileMenu.classList.remove(isOpenClass);
  };

  const openMenu = () => {
    mobileMenu.classList.add(isOpenClass);
  };

  /**
   * Validate if the window size is greater than the max size
   * if it is, close the menu
   */
  const onResize = () => {
    const isMaxSizeReached = window.innerWidth > maxSize;

    if (!isMaxSizeReached) return;

    closeMenu();
  };

  openMobileMenu.addEventListener('click', openMenu);
  closeMobileMenu.addEventListener('click', closeMenu);

  navigationLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', onResize);

  const headerAndHeroContainer = document.getElementById(
    'header_and_hero_container'
  );

  const heroImage = document.querySelector('.hero.container');

  heroImage.addEventListener('mouseover', () => {
    headerAndHeroContainer.classList.add('header_and_hero_container_active');
    headerAndHeroContainer.classList.remove(
      'header_and_hero_container_inactive'
    );
  });

  heroImage.addEventListener('mouseout', () => {
    headerAndHeroContainer.classList.remove('header_and_hero_container_active');
    headerAndHeroContainer.classList.add('header_and_hero_container_inactive');
  });
})();
