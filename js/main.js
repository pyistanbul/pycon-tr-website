MAIN = {
	
	init : function () {

		$(document).on('click', 'a[href=""], a[href^="#"]', function (e) {
		    e.preventDefault();
		});

	}
}


$(function () {
	
	MAIN.init();
	
});