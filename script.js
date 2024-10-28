gsap.from("#home h1", {
  scale: 0,
  delay: 2,
  duration: 1,
  scrub: 2,
});
gsap.from("#home p", {
  scale: 0,
  delay: 3,
  duration: 1,
  scrub: 2,
});
gsap.from("#home .home_image", {
  scale: 0,
  delay: 4,
  duration: 1,
  scrub: 2,
});
gsap.from("#navbar div", {
  y: -50,
  delay: 0.5,
  duration: 1,
});
gsap.from("li", {
  y: -500,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
// gsap.from("#file-select input", {
//     scale: 0,
//     delay: 2,
//     duration: 1,
//     scrub: 2,
//   });
// gsap.from(".btn", {
//     scale: 0,
//     delay: 2,
//     duration: 1,
//     scrub: 2,
//   });
