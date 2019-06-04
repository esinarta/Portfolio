$(document).ready(function() {
  $('.menu-toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-link').on('click', function() {
    $('.menu-toggle').removeClass('open');
    $('.top-nav').removeClass('open');
  });

  $('nav a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 100
    }, 1500);
  });

  $('#up').on('click', function (){
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
  });

  AOS.init({
    easing: 'ease', 
    duration: 1200,
    once: true
  });
});