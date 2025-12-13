export const initSwiper = () => {
    console.log(swiper, "Swiper initialized");

    //array de imagenes
    const images = ["./public/img/hero.jpg", "./public/img/hero2.jpg", "./public/img/hero3.jpg", "./public/img/hero4.jpg", "./public/img/hero5.jpg", "./public/img/sesiones.jpg"];

    const wrapper = document.getElementById("swiper-wrapper");

    images.forEach((src) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide h-[70vh] relative";
        slide.innerHTML = `
            <img src="${src}" alt="foto" class="w-full h-full object-cover"/>
        `
        wrapper.appendChild(slide);
    })
}

const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 800,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
