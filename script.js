
document.querySelector("svg").addEventListener("mousemove", function (dets) {
  var adjustedY =
    dets.y - document.querySelector("svg").getBoundingClientRect().top;
  path = `M 10 100 Q ${dets.x} ${adjustedY} 690 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.1,
    ease: "power3.out",
  });
});

document.querySelector("svg").addEventListener("mouseleave", function (dets) {
  gsap.to("svg path", {
    attr: { d: "M 10 100 Q 350 100 690 100" },
    duration: 1,
    ease: "elastic.out(1, .2)",
  });
});
