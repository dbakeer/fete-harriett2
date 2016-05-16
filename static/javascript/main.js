// $('.art-logo-fete').hide();
// $('.art-logo-photo').hide();
// $('.art-logo-harriett').hide();
// $('html').hide();

$(document).on('ready', function(){
  // $('html').fadeIn(2000);
  $('body').removeClass('loading');
  // $('.art-logo-fete').fadeIn(2000);
  // $('.art-logo-harriett').delay(2000).fadeIn(2000);
  // $('.art-logo-photo').delay(4000).fadeIn(2000);
});

$(document).ready(function() {

  var $header = $('header');

  $('#fullpage').fullpage({
    anchors: ['feteharriett', 'info', 'hosts', 'tickets', 'location', 'contact'],
    menu: '#menu',
    css3:true,
    scrollOverflow: true,
    onLeave: function(index, nextIndex, direction) {
      if (index == 3 && direction == 'down') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 5 && direction == 'up') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 1 && nextIndex == 4 && direction == 'down') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 2 && nextIndex == 4 && direction == 'down') {
        $('header a').css('color', '#f2f0ed');
        $('header li').css('color', '#f2f0ed');
      } else if (index == 6 && nextIndex == 4 && direction == 'up') {
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
