var themeArray = [
  'nil',
  'transparent',  //fete harriett
  'red',        //event
  'light',         //about
  'light',        //tickets
  'light',        //auction
  'light',        //location
  'light',        //donors
  'light'         //contacts
];


$(document).ready(function() {

  $(".clickable-row").click(function() {
    window.document.location = $(this).data("href");
  });

  var $header = $('header');

  $('#fullpage').fullpage({
      anchors: ['feteharriett', 'event', 'hosts', 'about', 'tickets', 'sponsors', 'contact'],
      menu: '#menu',
      responsiveHeight: 1600,
      autoScrolling: false,
      navigation: true,
      navigationPosition: 'left',
      onLeave: function(index, nextIndex, direction) {
          var theme = themeArray[nextIndex];
          $header.attr('data-theme', theme);
          $header.addClass('active');
          $('.event-date').addClass('active');
          $('#fp-nav').addClass('mobile-active');
      }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($('li[data-menuanchor="hosts"]').hasClass('active')) {
            $('li[data-menuanchor="event"]').hide();
        } else {
            $('li[data-menuanchor="event"]').show();
        }
    })
})
