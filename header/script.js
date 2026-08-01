let tl = gsap.timeline();
tl.to(".nav", {
  right: 0,
  duration: 1,
  ease: "power2.out",
});
tl.from(".nav ul li", {
  x: 280,
  duration: 0.7,
  opacity: 0,
  stagger: 0.2,
});
tl.from(".cross", {
  opacity: 0,
  duration: 0.3,
});

tl.pause();
document.querySelector(".fa-bars").addEventListener("click", function () {
  tl.play();
});

// Close Menu (Cross icon par click karne ke liye)
document.querySelector(".cross").addEventListener("click", function () {
  tl.reverse(); // Menu smooth tareeqe se wapas band ho jayega
});

window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    console.log("down"); // Fixed log

    gsap.to("#arrow", {
      rotate: 180,
      duration: 0.3,
      ease: "power1.out",
    });
  } else if (e.deltaY < 0) {
    console.log("up"); // Fixed log

    gsap.to("#arrow", {
      rotate: 0,
      duration: 0.3,
      ease: "power1.out",
    });
  }
});
