jQuery(window).load(function() {
    "use strict";
    var IS_IPAD = null != navigator.userAgent.match(/iPad/i), IS_IPHONE = null != navigator.userAgent.match(/iPhone/i) || null != navigator.userAgent.match(/iPod/i);
    1 != IS_IPAD && 1 != IS_IPHONE || jQuery("#animationcss").remove();
});

var cbpAnimatedHeader = function() {
    !function() {
        "use strict";
        window.addEventListener("scroll", function(event) {}, !1), window.addEventListener("scroll", function(e) {
            $(window).scrollTop() > 10 ? $("nav").addClass("shrink-nav") : $("nav").removeClass("shrink-nav");
        });
    }();
}();

function init() {}

if (window.onload = init(), $(document).ready(function() {
	
    // $(".video-main").fitVids();
	
    try {
        var arr = window.location.href.split("?");
        arr[1] && $("#nav-" + arr[1]).trigger("click");
    } catch (err) {}
	
    function SetResizeContent() {
        var minheight = $(window).height();
        $(".full-screen").css("min-height", minheight);
    }
	
  
	
	/* $(window).scroll(function() {
        $(window).scrollTop() > 10 ? $("nav").addClass("shrink-nav") : $("nav").removeClass("shrink-nav");
    }), 
	
	$(".mobile-toggle").click(function() {
        $("nav").toggleClass("open-nav");
    }), 
	
	$(".dropdown-arrow").click(function() {
        $(".mobile-toggle").is(":visible") && ($(this).children(".dropdown").hasClass("open-nav") ? $(this).children(".dropdown").removeClass("open-nav") : ($(".dropdown").removeClass("open-nav"), 
        $(this).children(".dropdown").addClass("open-nav")));
    }), 
	
	$(".dropdown-fullwidth").each(function() {
        $(this).css("width", $(".row").width());
        var subNavOffset = -($("nav .row").innerWidth() - $(".menu").innerWidth() - 15);
        $(this).css("left", subNavOffset);
    }),  */
	
	SetResizeContent();
	
	mainNav();
	
	
    var IS_IPAD = null != navigator.userAgent.match(/iPad/i), IS_IPHONE = null != navigator.userAgent.match(/iPhone/i) || null != navigator.userAgent.match(/iPod/i);
    
	if (1 == IS_IPAD || 1 == IS_IPHONE) ; else {
        $("li.content-scroll figure").removeAttr("class");
        try {
            $(".content-scroll").mCustomScrollbar({
                autoHideScrollbar: !0,
                theme: "minimal-dark"
            });
        } catch (err) {}
    }
	
    $(".carousel").each(function() {
        $(this).carousel({
            interval: 5600
        }), $(this).carousel("pause");
    }), 
	
	$(window).scroll(function() {
        $(this).scrollTop() > 100 ? $(".scrollToTop").fadeIn() : $(".scrollToTop").fadeOut();
    }), 
	
	$(".scrollToTop").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 1e3), !1;
    }), 
	
	$(window).resize(function() {
        $(".dropdown-fullwidth").each(function() {
            $(this).css("width", $(".row").width());
            var subNavOffset = -($("nav .row").innerWidth() - $(".menu").innerWidth() - 15);
            $(this).css("left", subNavOffset);
        }), SetResizeContent(), $(".portfolio").isotope("reLayout");
    }), 
	
	/* $(".main-navigation").onePageNav({
        scrollThreshold: .2,
        scrollOffset: 79
    }), */ 
	
	$("navbar-nav ul li a").click(function(e) {
        $(".main section").removeClass(" "), $($(this).attr("href")).addClass(" "), $(this).parent().parent().parent().removeClass("in");
    });
	
}), 

$(window).scroll(function() {
    mainNav();
}), 

matchMedia("(min-width: 992px), (max-width: 767px)").matches) function mainNav() {
    (document.documentElement && document.documentElement.scrollTop || document.body.scrollTop) > 40 ? $(".sticky-navigation").stop().animate({
        top: "0"
    }) : ($(".sticky-navigation").stop().animate({
        top: "-80"
    }), $("#navbar").removeClass("in"));
}

if (matchMedia("(min-width: 768px) and (max-width: 991px)").matches) function mainNav() {
    (document.documentElement && document.documentElement.scrollTop || document.body.scrollTop) > 40 ? $(".sticky-navigation").stop().animate({
        top: "0"
    }) : $(".sticky-navigation").stop().animate({
        top: "-120"
    });
}

var scrollAnimationTime = 1200, scrollAnimation = "easeInOutExpo";

if ($("a.scrollto").bind("click.smoothscroll", function(event) {
    event.preventDefault();
    var target = this.hash;
    $("html, body").stop().animate({
        scrollTop: $(target).offset().top
    }, scrollAnimationTime, scrollAnimation, function() {
        window.location.hash = target;
    });
}),

/*  $(".inner-link").smoothScroll({
    speed: 900,
    offset: -68
}),  */

/* $(window).stellar({
    horizontalScrolling: !1
}),  */

navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style");
    msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), 
    document.querySelector("head").appendChild(msViewportStyle);
}



$(document).on("click", ".navbar-collapse.in", function(e) {
    $(e.target).is("a") && $(this).collapse("hide");
});