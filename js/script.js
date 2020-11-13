
// on load function
$(window).on('load', function(){
  // #FULLPAGE JS
  var fullpagejs = new fullpage('#fullpage', {
    sectionsColor: ['#a06180', '#41398a', '#0c54d8', '#000000'],
    navigation: true,
    navigationPosition: 'right',
  });

  fullpagejs.setMouseWheelScrolling(false);
  fullpagejs.setAllowScrolling(false);

  window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $('footer').addClass('footer-visible');
        console.log('bottom');
      }else {
        $('footer').removeClass('footer-visible');
      }
  };



  $('body').addClass('splash-is-active');

  $('.splash').on('click', function(){
      $(this).addClass('inactive');

      setTimeout(function(){
        $('body').removeClass('splash-is-active');
        $('body').addClass('splash-is-inactive');
        $('#fullpage').css('opacity', 1);
        fullpagejs.setMouseWheelScrolling(true);
        fullpagejs.setAllowScrolling(true);
        $('#first').ripples({
        	resolution: 512,
        	dropRadius: 10,
        	perturbance: 0.04,
        });
      }, 2000);
  });

  $(".home").on('click', function(){
    $("#home").trigger('click');
  });


  setTimeout(function(){
    $('.splash2').addClass('visible');
  }, 4400);

  setTimeout(function(){
    $(".cls-1").css({
      'fill': '#fff',
    });
  }, 5000);

  setTimeout(function(){
    $(".cls-1").css({
      'stroke': 'transparent'
    });
    $(".splash").css({'pointer-events': 'auto'});
  }, 5500);
});
