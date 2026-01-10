  export function initGsap(){
      let tl = gsap.timeline({delay: 0});

      tl.to(".col", {
        top: "0",
        duration: 3,
        ease: "power4.inOut"
      });

      tl.to(".c-1 .item", {
        top: "0",
        stagger: 0.25,
        duration: 3,
        ease: "power4.inOut"
      }, "-=2");

      tl.to(".c-2 .item", {
        top: "0",
        stagger: -0.25,
        duration: 3,
        ease: "power4.inOut"
      }, "-=4");

      tl.to(".c-3 .item", {
        top: "0",
        stagger: 0.25,
        duration: 3,
        ease: "power4.inOut"
      }, "-=4");

      tl.to(".c-4 .item", {
        top: "0",
        stagger: -0.25,
        duration: 3,
        ease: "power4.inOut"
      }, "-=4");

      tl.to(".c-5 .item", {
        top: "0",
        stagger: 0.25,
        duration: 3,
        ease: "power4.inOut"
      }, "-=4");

      tl.to(".eventos--container", {
        scale: 6,
        duration: 4,
        ease: "power4.inOut"
      }, "-=2");

      tl.to(".nav-item a, .eventos--title p, .slide-num p, .eventos--preview img", {
        top: 0,
        stagger: 0.075,
        duration: 1,
        ease: "power3.out",
      }, "-=1.5");

      tl.to(".eventos--icon ion-icon, .eventos--icon-2 ion-icon", {
        scale: 1,
        stagger: 0.05,
        ease: "power3.out",
      }, "-=1");

    //   tl.add(() => {
    //   const container = document.querySelector('.eventos--container');
    //   container.style.position = 'absolute';
    //   container.style.top = '0';
    //   container.style.left = '0';

    // });

  }
  
