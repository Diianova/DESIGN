$(function(){

// Sticky menu
var mainNav = $(".page-nav");
var mns = "main-nav-scrolled";
var	hdr = $('header').height();
var container = $(".container");
	
$(window).scroll(function(){
	if( $(this).scrollTop() > hdr){
		mainNav.addClass(mns);
	}else{
		mainNav.removeClass(mns);
	}
});

// Photo boxes
var allPeople = $('section').find('#menu3 .foto');
var fadeInP =  $('section').find('#menu3 .foto p');
console.log(fadeInP);

allPeople.on('mouseenter', function(){
	$(this).find('.bk p').removeClass('hide');
	
});
allPeople.on('mouseleave', function(){
	$(this).find('.bk p').addClass('hide');
});


	


});