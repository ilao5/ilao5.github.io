(function(){

    
    $('.-day1_map').parallax({imageSrc: './assets/img/landing/day1_map.png'});
    $('.-day2_map').parallax({imageSrc: './assets/img/landing/day2_map.png'});
    $('.-day3_map').parallax({imageSrc: './assets/img/landing/day3_map.png'});
    $('.-day4_map').parallax({imageSrc: './assets/img/landing/day4_map.png'});
    $('.-day5_map').parallax({imageSrc: './assets/img/landing/day5_map.png'});
    $('.-day1_photo').parallax({imageSrc: './assets/img/landing/day1_photo.jpg'});
    $('.-day2_photo').parallax({imageSrc: './assets/img/landing/day2_photo.jpg'});
    $('.-day3_photo').parallax({imageSrc: './assets/img/landing/day3_photo.jpg'});
    $('.-day4_photo').parallax({imageSrc: './assets/img/landing/day4_photo.jpg'});
    $('.-day5_photo').parallax({imageSrc: './assets/img/landing/day5_photo.jpg'});
   

    $('.root').fullpage({
        easingcss3: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
        loopHorizontal: false,
        continuousVertical: false,
        verticalCentered: false,
        resize : false,
        sectionSelector: '.full-section',
        scrollBar: true,
        navigation: true,
        afterResize: function(){
            $(window).trigger('resize.px.parallax')
        }
    });


    var $navLinks = $('.main-nav a');
    var sections = $('[data-anchor]').map(function(){
        return $(this).attr('data-anchor');
    }).slice(1, -1).toArray()

    $(window).on('hashchange', function(){
        var hash = window.location.hash;
        $navLinks.removeClass('-active');

        if (sections.indexOf(hash.slice(1)) !== -1) {
            $navLinks.eq(0).addClass('-active');
        } else if (hash == '#about') {
            $navLinks.eq(1).addClass('-active');
        }
    }).trigger('hashchange')

}())
