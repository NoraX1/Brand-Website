let container = document.querySelector(".main-wrapper");
let section = container.querySelectorAll("section");

let tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: container,
      scrub: 1,
      pin: true,
      start: "top top",
      end: "+=3300",
    },
  })
  .to(container, {
    x: () =>
      -(container.scrollWidth - document.documentElement.clientWidth - 95) +
      "px",
    ease: "none",
    duration: 1,
  })
  .to(".side-bar", {
    x: 70,
    opacity: 1,
    scrollTrigger: {
      trigger: ".side-bar",
      start: "center+=2500 center",
      scrub: 2.5,
    },
  })
  .to({}, { duration: 1 / (section.length + 1) });

gsap.to(".col-1", {
  y: -250,
  ease: "none",
  duration: 2,
  scrollTrigger: {
    trigger: ".image-gallery",
    start: "top center",
    end: "+=3000",
    scrub: true,
  },
});
gsap.to(".col-2", {
  y: 250,
  ease: "none",
  duration: 2,
  scrollTrigger: {
    trigger: ".image-gallery",
    start: "top center",
    end: "+=3000",
    scrub: true,
  },
});
gsap.to(".col-3", {
  y: -250,
  ease: "none",
  duration: 2,
  scrollTrigger: {
    trigger: ".image-gallery",
    start: "top center",
    end: "+=3000",
    scrub: true,
  },
});

gsap.from(".row-2", {
  height: "0%",
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".section-3",
    start: "40% center",
    toggleActions: "play pause reverse reverse",
  },
});

gsap.from(".row li", {
  y: 200,
  opacity: 0,
  ease: "none",
  delay: 2,
  duration: 2,
  stagger: {
    amount: 1,
  },
  scrollTrigger: {
    trigger: ".row li",
    toggleActions: "play pause reverse reverse",
  },
});

gsap.to(".num", {
  x: 600,
  duration: 2,
  scrollTrigger: {
    trigger: ".num",
    start: "right left",
  },
});
