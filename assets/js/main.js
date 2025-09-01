$(document).ready(function () {
  $(".sider-area").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: false,
  });

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
