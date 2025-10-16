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
  $(".testimonials").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    nav: false,
    margin: 30,
    center: true,
  });
  // init Isotope
  var $grid = $(".portfolio-items").isotope({
    // options
  });
  // filter items on button click
  $(".portfolio-menu").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
  $(".portfolio-menu").on("click", "li", function () {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
  });
});
