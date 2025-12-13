import { initSwiper } from "../js/swiper/swiper.js";

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


