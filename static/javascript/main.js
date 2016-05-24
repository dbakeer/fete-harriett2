$('html').hide();

$(document).ready(function() {

  $('html').fadeIn();

  $(".clickable-row").click(function() {
    window.document.location = $(this).data("href");
  });

  var $header = $('header');

  $('#fullpage').fullpage({
    anchors: ['feteharriett', 'event', 'about', 'tickets', 'auction', 'location', 'donors', 'contact'],
    menu: '#menu',
    responsiveHeight: 1300,
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['event', 'about', 'tickets', 'auction', 'location', 'donors'],
    onLeave: function(index, nextIndex, direction) {
      if (index == 2 && direction == 'down') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
        $('.event-date').css('color', '#f2f0ed');
        $('#fp-nav ul li a span').css('background', '#f2f0ed');
      } else if (index == 4 && direction == 'up') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
        $('.event-date').css('color', '#f2f0ed');
        $('#fp-nav ul li a span').css('background', '#f2f0ed');
      } else if (index == 5 && nextIndex == 3 && direction == 'up') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
        $('.event-date').css('color', '#f2f0ed');
        $('#fp-nav ul li a span').css('background', '#f2f0ed');
      } else if (index == 6 && nextIndex == 3 && direction == 'up') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
        $('.event-date').css('color', '#f2f0ed');
        $('#fp-nav ul li a span').css('background', '#f2f0ed');
      } else if (index == 7 && nextIndex == 3 && direction == 'up') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
        $('.event-date').css('color', '#f2f0ed');
        $('#fp-nav ul li a span').css('background', '#f2f0ed');
      } else if (index == 8 && nextIndex == 3 && direction == 'up') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
        $('.event-date').css('color', '#f2f0ed');
        $('#fp-nav ul li a span').css('background', '#f2f0ed');
      } else {
        $('header a').css('color', 'black');
        $('header li').css('color', 'black');
        $('.event-date').css('color', 'black');
        $('#fp-nav ul li a span').css('background', 'black');
      }
    },
    afterLoad: function(anchorLink, index){
      if(index == 1) {
        $header.removeClass('active');
        $('.event-date').removeClass('active');
        $('#fp-nav').removeClass('mobile-active');
      } else {
        $header.addClass('active');
        $('.event-date').addClass('active');
        $('#fp-nav').addClass('mobile-active');
      }
    }
  });
});
