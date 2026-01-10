import { initSwiper } from "../js/swiper/swiper.js";

import { loadPage } from "./router.js"


// 🔥 CARGA INICIAL
loadPage("./pages/home.html", false)
console.log("DOM loaded")

document.addEventListener('DOMContentLoaded', () => {
  initSwiper();
});

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const hamburger = document.getElementById('icon-hamburger');
const closeIcon = document.getElementById('icon-close');


// let isOpen = false;

// btn.addEventListener('click', () => {
//   // Mostrar
//   if( !isOpen ) {
//     menu.classList.remove('hidden');

//     requestAnimationFrame(() => {
//       menu.classList.remove('opacity-0',  '-translate-y-4', 'pointer-events-none');
//     })

//     hamburger.classList.add('opacity-0');
//     closeIcon.classList.remove('opacity-0');

//     isOpen = true;
//   } else {
//     // Ocultar
//     menu.classList.add('-translate-y-4', 'opacity-0', 'pointer-events-none');

    
//     hamburger.classList.remove('opacity-0');
//     closeIcon.classList.add('opacity-0');

//     setTimeout(() => {
//       menu.classList.add('hidden');
//     }, 300);

//     isOpen = false;
//   }



// });
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const backdrop = document.getElementById('menu--backdrop')

  const topLine = btn.querySelector('.line-top');
  const middleLine = btn.querySelector('.line-middle');
  const bottomLine = btn.querySelector('.line-bottom');

  let isOpen = false;

  btn.addEventListener('click', () => {
    if (!isOpen) {
      // Open (iOS)
      
      topLine.classList.remove('-translate-y-2');
      bottomLine.classList.remove('translate-y-2');

      topLine.classList.add('rotate-45');
      bottomLine.classList.add('-rotate-45');
      middleLine.classList.add('opacity-0');

      menu.classList.remove('hidden');
      requestAnimationFrame(() => {
        menu.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
      });

      backdrop.classList.remove('opacity-0', 'pointer-events-none');

      isOpen = true;
    } else {
      // Close
      
      topLine.classList.add('-translate-y-2');
      bottomLine.classList.add('translate-y-2');

      topLine.classList.remove('rotate-45');
      bottomLine.classList.remove('-rotate-45');
      middleLine.classList.remove('opacity-0');

      menu.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');

      backdrop.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        menu.classList.add('hidden');
      }, 300);

      isOpen = false;
    }
  });
});

// Dropdown control for Portfolio (hover + keyboard accessible)
document.addEventListener('DOMContentLoaded', () => {
  const portfolioMenu = document.getElementById('portfolio-menu');
  const portfolioDropdown = document.getElementById('portfolio-dropdown');
  const portfolioToggle = document.getElementById('portfolio-toggle');

  if (!portfolioMenu || !portfolioDropdown) return;

  const openDropdown = () => {
    portfolioDropdown.style.opacity = '1';
    portfolioDropdown.style.maxHeight = portfolioDropdown.scrollHeight + 'px';
    portfolioDropdown.style.pointerEvents = 'auto';
    portfolioToggle?.setAttribute('aria-expanded', 'true');
  };

  const closeDropdown = () => {
    portfolioDropdown.style.opacity = '0';
    portfolioDropdown.style.maxHeight = '0';
    portfolioDropdown.style.pointerEvents = 'none';
    portfolioToggle?.setAttribute('aria-expanded', 'false');
  };

  // Initialize
  portfolioDropdown.style.maxHeight = '0';
  portfolioDropdown.style.opacity = '0';
  portfolioDropdown.style.pointerEvents = 'none';

  // Mouse interactions with small close delay to allow transit between toggle and dropdown
  let closeTimer = null;
  const scheduleClose = (delay = 200) => {
    if (closeTimer) clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      closeDropdown();
      closeTimer = null;
    }, delay);
  };
  const cancelClose = () => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }
  };

  portfolioMenu.addEventListener('mouseenter', () => {
    cancelClose();
    openDropdown();
  });
  portfolioMenu.addEventListener('mouseleave', () => scheduleClose(200));
  portfolioDropdown.addEventListener('mouseenter', cancelClose);
  portfolioDropdown.addEventListener('mouseleave', () => scheduleClose(200));

  // Keyboard / focus accessibility
  portfolioMenu.addEventListener('focusin', (e) => {
    cancelClose();
    openDropdown();
  });
  portfolioMenu.addEventListener('focusout', (e) => {
    // If focus moves outside both the toggle/menu and the dropdown, close (no delay)
    const related = e.relatedTarget;
    if (!portfolioMenu.contains(related) && !portfolioDropdown.contains(related)) scheduleClose(0);
  });

  // Prevent anchor navigation (anchor used only as control)
  portfolioToggle?.addEventListener('click', (e) => {
    e.preventDefault();
  });

  // Close with Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDropdown();
  });
});

document.addEventListener("click", e => {
  const toggle = e.target.closest("#mobile-portfolio-toggle")
  if (!toggle) return

  const dropdown = document.getElementById("mobile-portfolio-dropdown")
  const icon = document.getElementById("mobile-portfolio-icon")

  dropdown.classList.toggle("hidden")
  icon.textContent = dropdown.classList.contains("hidden") ? "+" : "−"
})

