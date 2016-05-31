$('html').hide();

var themeArray = [
  'nil',
  'transparent',  // fete harriet
  'light', //event
  'dark', //about
  'light', //tickets
  'light', //auction
  'light', //location
  'light', //donors
  'light' //contacts
];


$(document).ready(function() {

  $('html').fadeIn();

  $(".clickable-row").click(function() {
    window.document.location = $(this).data("href");
  });

  var $header = $('header');

  $('#fullpage').fullpage({
    anchors: ['feteharriett', 'event',  'about', 'tickets', 'auction', 'location', 'donors', 'contact'],
    menu: '#menu',
    // responsiveHeight: 1600,
    // autoScrolling: false,
    scrollOverflow: true,
		scrollOverflowOptions: {
		  scrollbars: true,
		  mouseWheel: true,
		  hideScrollbars: false,
		  fadeScrollbars: false,
		  disableMouse: true
    },
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
