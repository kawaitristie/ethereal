$(function() {

    $(window).scroll(function() {
  
      var mass = Math.max(50, 85-0.1*$(this).scrollTop()) + 'px';
  
      $('#logoheader').css({'font-size': mass, 'line-height': mass});
    });
  });