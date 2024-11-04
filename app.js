const $buttonSun = document.getElementById('switch-sun');
const $buttonMoon = document.getElementById('switch-moon');
const $html = document.documentElement;

function btnDark() {
    $html.classList.toggle('dark-mode');
    
    if ($html.classList.contains('dark-mode')) {
        $buttonSun.style.display = 'none';
        $buttonMoon.style.display = 'block';
    } else {
        $buttonMoon.style.display = 'none';
        $buttonSun.style.display = 'block';
    }
}

$buttonSun.addEventListener('click', btnDark);
$buttonMoon.addEventListener('click', btnDark);


class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 10 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();