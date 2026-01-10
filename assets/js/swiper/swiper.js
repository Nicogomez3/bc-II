let swiperInstance = null

export const initSwiper = () => {
  const swiperEl = document.querySelector(".swiper")
  const wrapper = document.getElementById("swiper-wrapper")

  if (!swiperEl || !wrapper) {
    console.warn("Swiper no encontrado, se cancela initSwiper")
    return
  }

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
    slide.innerHTML = `<img src="${src}" class="w-full h-full object-cover">`
    wrapper.appendChild(slide)
  })

  new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  })
}