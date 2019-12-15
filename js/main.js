MAIN = {
	
	init : function () {

		$(document).on('click', 'a[href=""], a[href^="#"]', function (e) {
		    e.preventDefault();
		});

		$('header .nav-trigger').click(function(){
			$('header nav').slideToggle('fast');
			$('header .nav-trigger').toggleClass('opened');
		})

	}
}


$(function () {
	
	MAIN.init();
	
});