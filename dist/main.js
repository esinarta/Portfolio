$(document).ready(function () {
  $('.menu-toggle').on('click', function (){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });
});