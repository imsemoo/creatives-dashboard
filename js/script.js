$(document).ready(function () {
  "use strict";

  // JQ to toggle the mobile menu
  const mobileMenuIcon = $(".mobile-menu-icon");
  const menu = $(".navbar nav .menu");

  mobileMenuIcon.click(function () {
    mobileMenuIcon.toggleClass("active");
    menu.toggleClass("active");
  });

  // Close the mobile menu when a menu item is clicked
  const menuItems = $(".navbar nav .menu li a");

  menuItems.click(function () {
    mobileMenuIcon.removeClass("active");
    menu.removeClass("active");
  });

  var mainSlider = $(".main-slider");
  mainSlider.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
  });

  // Initially show the first tab
  $(".tab-content:first").show();

  // When a tab button is clicked
  $(".tab-button").click(function () {
    // Hide all tab content
    $(".tab-content").hide();

    // Remove 'active' class from all buttons
    $(".tab-button").removeClass("active");

    // Add 'active' class to the clicked button
    $(this).addClass("active");

    // Show the corresponding tab content
    var tabId = $(this).data("tab");
    $("#" + tabId).show();
  });
});
