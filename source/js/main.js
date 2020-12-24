$(document).ready(function(){

	let smalldev_menu = $('.menu__smalldev');
	let smalldev_btn = $('.menu__smalldev__btn');
	let smalldev_close_btn = $('.menu__smalldev__close__btn');

	smalldev_btn.on('click', function() {
		$('body').addClass('hide');
		smalldev_menu.slideToggle();
	});
	smalldev_close_btn.on('click', function() {
		$('body').removeClass('hide');
		smalldev_menu.slideUp();
	});

});