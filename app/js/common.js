$(function() {

	/*menu icon*/
	$('.hamburger').click(function(){
		$(this).toggleClass('is-opened');
		$('.header-content__right').toggleClass('visible');
		$('body').toggleClass('no-scroll');
	});

	/*disable dropdown transform*/
	Popper.Defaults.modifiers.computeStyle.enabled = false;

	/*ladda init*/
	Ladda.bind( '.ladda-button', { timeout: 2000 } );


});
