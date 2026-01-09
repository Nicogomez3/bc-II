let swiperInstance = null

export function initSwiper() {
  const wrapper = document.getElementById("swiper-wrapper")
  const swiperEl = document.querySelector(".swiper")

  // 🔒 blindaje total
  if (!swiperEl || !wrapper) return

  // evitar duplicados
  if (swiperInstance) {
    swiperInstance.destroy(true, true)
    swiperInstance = null
  }

  // slides
  const images = [
    "./public/img/hero.jpg",
    "./public/img/hero2.jpg",
    "./public/img/hero3.jpg",
    "./public/img/hero4.jpg",
    "./public/img/hero5.jpg",
    "./public/img/sesiones.jpg"
  ]

  wrapper.innerHTML = ""

  images.forEach(src => {
    const slide = document.createElement("div")
    slide.className = "swiper-slide h-[70vh]"
    slide.innerHTML = `
      <img src="${src}" class="w-full h-full object-cover" />
    `
    wrapper.appendChild(slide)
  })

  // 🔥 crear swiper DESPUÉS del DOM
  swiperInstance = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  })
}
