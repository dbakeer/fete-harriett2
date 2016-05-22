$(document).ready(function() {

  var $header = $('header');

  $('#fullpage').fullpage({
    anchors: ['feteharriett', 'info', 'mission', 'hosts', 'tickets', 'location', 'contact'],
    menu: '#menu',
    responsiveHeight: 1000,
    // css3:true,
    // autoScrolling: false,
    // scrollOverflow: false,
    // normalScrollElements: ".section",
    // scrollBar: false,
    // fitToSection: true,
    onLeave: function(index, nextIndex, direction) {
      if (index == 4 && direction == 'down') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 6 && direction == 'up') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 1 && nextIndex == 5 && direction == 'down') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 2 && nextIndex == 5 && direction == 'down') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 7 && nextIndex == 5 && direction == 'up') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 4 && direction == 'up') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 1 && nextIndex == 3 && direction == 'down') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 2 && nextIndex == 3 && direction == 'down') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 4 && nextIndex == 3 && direction == 'up') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 5 && nextIndex == 3 && direction == 'up') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 6 && nextIndex == 3 && direction == 'up') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 7 && nextIndex == 3 && direction == 'up') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else {
        $('header a').css('color', 'black');
        $('header li').css('color', 'black');
      }
    },
    afterLoad: function(anchorLink, index){
      if(index == 1) {
        $header.removeClass('active');
      } else {
        $header.addClass('active');
      }
    }
  });
});
