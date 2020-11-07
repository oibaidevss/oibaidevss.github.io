// Footer ANIMATION
$(document).ready(function(){
  window.onscroll = function(ev) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $('footer').addClass('footer-visible');
        console.log('bottom');
      }else {
        $('footer').removeClass('footer-visible');
      }
  };
  // cursor
  const cursor = curDot();
  cursor.over($('section'), {
    borderColor: 'rgba(255,255,255,.38)',
    broderWidth: 2
  });

  cursor.over($('h1'), {
    scale: .5,
    background: '#fff'
  });

  // text animation
  var textWrapper = document.querySelector('.ml9 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({loop: true})
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
});

// on load function
$(window).on('load', function(){
  // initialize splash on window load
  $('body').addClass('splash-is-active');

  $('.splash').on('click', function(){
      $('body').removeClass('splash-is-active');
      $('body').addClass('splash-is-inactive');
  });

  $(".home").on('click', function(){
    $("#home").trigger('click');
  });



  // $(".splash").css({'background-color': '#fff'});

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
