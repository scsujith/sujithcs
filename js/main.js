
$("#typed2").typing({
	strings: ['Ui Developer ', 'Front-End Developer', 'UI Design', 'And SEO'],
	eraseDelay: 10,
	typeDelay: 70,
	stringStartDelay: 1000,
	color: 'white',
	typingColor: 'black',
	typingOpacity: '0.1',
	loopCount: 10000,
	cursorBlink: false,
	cursorChar: '<small>_</small>',
	fade: true,
	
});

$(document).ready(function(){
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 1000);
	$(window).bind('scroll', function() {
	var navHeight = $( window ).height() - 70;
		  if ($(window).scrollTop() > navHeight) {
			  $('#navigation').css("position","fixed");
		  }
		  else {
			  $('#navigation').css("position","absolute");
		  }
	 });
	 $('.close').click(function(){
		$('.mobile-nav').hide();
	 });
	 $('.moble-nav-icon').click(function(){
		$('.mobile-nav').show();
	 });
	 $('.mobile-nav ul li a').click(function(){
		$('.mobile-nav').hide();
	 })
 });