$('.art-logo-fete').hide();
$('.art-logo-photo').hide();
$('.art-logo-harriett').hide();
$('html').hide();

$(window).on('load', function(){
  $('html').fadeIn(2000);
  $('body').removeClass('loading');
  $('.stacked-logo').delay(2000).fadeOut(3000);
  $('.art-logo-fete').delay(5000).fadeIn(2000);
  $('.art-logo-harriett').delay(7000).fadeIn(2000);
  $('.art-logo-photo').delay(9000).fadeIn(2000);
});

$(document).ready(function() {
  if(screen.width < 480) {
    $('#fullpage').fullpage({
      anchors: ['feteharriett', 'hosts', 'info', 'tickets', 'location', 'contact'],
      menu: '#menu',
      css3:true,
      fitToSection: true,
      resize: true,
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
        if(index == 1){
          $('header').css('opacity', '0');
          $('header').css('transition', 'opacity 0.1s');
        } else {
          $('header').css('opacity', '1');
        }
      }
    });
  } else {
  $('#fullpage').fullpage({
    anchors: ['feteharriett', 'hosts', 'info', 'tickets', 'location', 'contact'],
    menu: '#menu',
    css3:true,
    fitToSection: true,
    resize: true,
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
      if(index == 1){
        $('header').css('opacity', '0');
        $('header').css('transition', 'opacity 0.1s');
      } else {
        $('header').css('opacity', '1');
      }
    }
  });
  }
});

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
