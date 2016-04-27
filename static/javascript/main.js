fullpage.initialize('#fullpage', {
  anchors: ['feteharriett', 'hosts', 'info', 'tickets', 'location'],
  menu: '#menu',
  css3:true,
  // scrollbar: true,
  onLeave: function(index, nextIndex, direction) {
    if (index == 3 && direction == 'down') {
      $('header a').css('color', '#f2f0ed');
      $('header').css('color', '#f2f0ed');
      $('.lips-white').css('opacity', '1');
    } else if (index == 5 && direction == 'up') {
      $('header a').css('color', '#f2f0ed');
      $('header').css('color', '#f2f0ed');
      $('.lips-white').css('opacity', '1');
    } else if (index == 1 && nextIndex == 4 && direction == 'down') {
      $('header a').css('color', '#f2f0ed');
      $('header').css('color', '#f2f0ed');
      $('.lips-white').css('opacity', '1');
    }
    else if (index == 2 && nextIndex == 4 && direction == 'down') {
      $('header a').css('color', '#f2f0ed');
      $('header').css('color', '#f2f0ed');
      $('.lips-white').css('opacity', '1');
    } else {
      $('header a').css('color', 'black');
      $('header').css('color', 'black');
      $('.lips-white').css('opacity', '0');
    }
  },
  afterLoad: function(anchorLink, index){
    if(index == 1){
      $('header').css('opacity', '0');
      $('.lips').css('opacity', '0');
      $('header').css('transition', 'opacity 0.1s');
      $('.lips').css('transition', 'opacity 0.1s');
    }
    else {
      $('header').css('opacity', '1');
      $('.lips').css('opacity', '1');
    }
  }
});

// $(window).on('load', function(){
//   $('.stacked-logo').fadeOut(2000).hide();
// });




// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 0, lng: 0},
//     zoom: 3,
//     styles: [{
//       featureType: 'poi',
//       stylers: [{ visibility: 'off' }]  // turn off points of interest.
//     }, {
//       featureType: 'transit.station',
//       stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
//     }],
//     disableDoubleClickZoom: true
//   });
// }
