$(function(){
	$(window).on('scroll', function(){ 
		checkTabContainerPosition() 
	});
	
}) 
function checkTabContainerPosition() {
	let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - $('.et-hero-tabs-container').height();
	console.log($('.et-hero-tabs').offset().top);
	if($(window).scrollTop() > $('.et-hero-tabs').height()) {
		$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
	} 
	else {
		$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
	}
}
