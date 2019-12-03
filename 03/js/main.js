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
		arrows: false,
		autoplaySpeed: 5000,
		cssEase: 'linear'
	});
});

$(window).on("load resize scroll",function(e){

	if ( $(this).scrollTop() > 100 ) { 
		$('body').addClass("scrolled");
	} else { 
		$('body').removeClass("scrolled");
	}

});