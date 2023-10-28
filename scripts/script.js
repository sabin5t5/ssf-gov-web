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

// Select the images and container
const images = document.querySelectorAll(".info-right img");
const container = document.querySelector(".info-right");

// Set the initial index and duration
let currentIndex = 0;
const duration = 4000; // 4 seconds

// Function to animate the image transition
function animateImageTransition() {
  gsap.to(images[currentIndex], {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      // Hide the current image
      images[currentIndex].style.display = "none";
      // Increment the index or reset it to 0
      currentIndex = (currentIndex + 1) % images.length;
      // Show the next image
      images[currentIndex].style.display = "block";
      // Animate the opacity of the next image
      gsap.to(images[currentIndex], {
        opacity: 1,
        duration: 1,
        delay: 0.5, // Delay for a smooth transition
        onComplete: () => {
          // Schedule the next transition
          setTimeout(animateImageTransition, duration);
        },
      });
    },
  });
}

// Start the slider by scheduling the first transition
setTimeout(animateImageTransition, duration);

const hamBtn = document.querySelector(".ham-btn");

let tx = gsap.fromTo(
  ".ham-menu",
  {
    clippath: "circle(0.5% at 100% 0)",
    display: "none",
    duration: 0.5,
  },
  {
    display: "flex",
    clipPath: "circle(76.1% at 51% 43%)",
    webkitClipPath: "circle(76.1% at 51% 43%)",
    duration: 0.5,
    ease: "power2.out",
    paused: true,
  }
);

hamBtn.addEventListener("click", () => {
  const isHidden = tx.progress() === 0;
  isHidden ? tx.play() : tx.reverse();
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
