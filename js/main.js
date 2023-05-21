
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
			},
			1800: {
				items: 4
			}
		},
        dots: false,
        nav: true,
        margin:10,
        autoWidth:false
    });
});

