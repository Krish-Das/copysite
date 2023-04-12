const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smartphone: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  },
  smoothMobile: 1,
  multiplier: 1.5,
});

setTimeout(() => {
  scroll.update();
}, 2000);
