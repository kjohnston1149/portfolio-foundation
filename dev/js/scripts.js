$(function () {
  // Projects Scroll
  $("#project-link").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $("#projects").offset().top}, 500);
    return false;
  });

  //Case Study Scroll
  $("#case-link").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $("#case-studies").offset().top}, 500);
    return false;
  });

  //About Scroll
  $("#about-link").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $("#about").offset().top}, 500);
    return false;
  });

  //Page top scroll
  $("#top-link").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $("#page-top").offset().top}, 500);
    return false;
  });
});
