$(document).ready(function(){
  $('.carousel').carousel();
  $('.slider').slider();
  $('.parallax').parallax();
  
  $("#btn-logo").click(function() {
    $('html, body').animate({
      scrollTop: $("#main").offset().top-100
    }, 2000);
  });
  
  $("#btn-who").click(function() {
    $('html, body').animate({
      scrollTop: $("#who").offset().top-70
    }, 2000);
  });
  
    $("#btn-works").click(function() {
    $('html, body').animate({
      scrollTop: $("#works").offset().top-70
    }, 2000);
  });
  
  $("#btn-get-in-touch").click(function() {
    $('html, body').animate({
      scrollTop: $("#get-in-touch").offset().top-70
    }, 2000);
  });
});