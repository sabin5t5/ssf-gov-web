tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.from("nav", {
  duration: 1,
  y: -100,
  stagger: 0.2,
  opacity: 0,
  ease: "power2.out",
})
  .from(".fx-left", {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "power2.out",
  })
  .from(".fx-right", {
    duration: 1,
    x: 100,
    opacity: 0,
    ease: "power2.out",
  })
  .from(".card", {
    duration: 1,
    y: 200,
    stagger: 0.2,
    opacity: 0,
    ease: "power2.out",
  });

// scroll trigger

// gsap.utils.toArray(".card").forEach((c) => {
//   let tl1 = gsap.timeline({
//     scrollTrigger: {
//       trigger: c,
//       start: "-400 center",
//       end: "bottom center",
//       toggleActions: "play none none reverse",
//       markers: true,
//     },
//   });

//   tl1.from(c, {
//     duration: 1,
//     y: 200,
//     opacity: 0,
//     ease: "power2.out",
//   });
// });

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
