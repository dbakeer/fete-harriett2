var themeArray = [
  'nil',
  'transparent',  //fete harriett
  'light',        //event
  'dark',         //about
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
    anchors: ['feteharriett', 'event',  'about', 'tickets', 'auction', 'location', 'donors', 'contact'],
    menu: '#menu',
    responsiveHeight: 1600,
    autoScrolling: false,
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['event', 'about', 'tickets', 'auction', 'location', 'donors'],
    onLeave: function(index, nextIndex, direction) {
      var theme = themeArray[nextIndex];
      $header.attr('data-theme', theme);
      $header.addClass('active');
      $('.event-date').addClass('active');
      $('#fp-nav').addClass('mobile-active');
    }
  });
});
