document.querySelector('body').classList.remove('preload');

var el = document.querySelector('.nav-toggle');
el.onclick = function() {
	document.querySelector('body').classList.toggle('open');
	document.querySelector('.burger').classList.toggle('open');
}

$(document).ready(function() {
	$("body").removeClass("preload");
	$(".emotion .slides").slick({
		dots: true,
		infinite: true,
		autoplay: false,
		arrows: false,
		autoplaySpeed: 5000,
		cssEase: 'linear'
	});
	$(".cars .slider").slick({
		dots: true,
		infinite: true,
		autoplay: false,
		arrows: true,
		autoplaySpeed: 5000,
		cssEase: 'linear',
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false
			}
		}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});

});

$(window).on("load resize scroll",function(e){

	if ( $(this).scrollTop() > 100 ) { 
		$('body').addClass("scrolled");
	} else { 
		$('body').removeClass("scrolled");
	}

});