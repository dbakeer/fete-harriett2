$('html').hide();

var themeArray = [
  'nil',
  'transparent',  // fete harriet
  'dark',   // event
  'light',  // details
  'dark',   // hosted by
  'light',  // about
  'dark',   // tickets
  'light',  // auction
  'dark',   // location
  'light',  // donors
  'light',  // credits
  'light',  // contact
];


$(document).ready(function() {

  $('html').fadeIn();

  $(".clickable-row").click(function() {
    window.document.location = $(this).data("href");
  });

  var $header = $('header');

  $('#fullpage').fullpage({
    anchors: ['', 'event', 'details', 'hostedby', 'about', 'tickets', 'auction', 'location', 'donors', 'credits', 'contact'],
    menu: '#menu',
    // responsiveHeight: 1300,
    responsiveHeight: 548,
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['event', 'about', 'tickets', 'auction', 'location', 'donors'],
    onLeave: function(index, nextIndex, direction) {

      var theme = themeArray[nextIndex];

      console.log('theme', theme);

      $header.attr('data-theme', theme);
        $header.addClass('active');
        $('.event-date').addClass('active');
        $('#fp-nav').addClass('mobile-active');
    }
  });
});
