var themeArray = [
    'nil',
    'transparent',  //fete harriett
    'red',          //event
    'light',        //about
    'red',        //tickets
    'light',        //auction
    'light',        //location
    'light',        //donors
    'red'           //contacts
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
        onLeave: function(index, nextIndex, direction) {
            var theme = themeArray[nextIndex];
            $header.attr('data-theme', theme);
            $header.addClass('active');
            $('.event-date').addClass('active');
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($('li[data-menuanchor="hosts"]').hasClass('active')) {
            $('li[data-menuanchor="event"]').addClass('active');
        }
    });

    $('header .menu').click(function(){
        $(this).parents('header').toggleClass('open');
        $('body').toggleClass('menu-open');
    });

    $('header li, .title').click(function(){
        $(this).parents('header').removeClass('open');
        $('body').removeClass('menu-open');
    });

    $('body').fadeIn(800);
});
