$(function(){

// Photo boxes
var allPeople = $('section').find('#menu3 .foto');
var fadeInP =  $('section').find('#menu3 .foto p');

allPeople.on('mouseenter', function(){
	$(this).find('.bk p').removeClass('hide');
});

allPeople.on('mouseleave', function(){
	$(this).find('.bk p').addClass('hide');
});

// DESKTOP
var x = $(window).width();
var humburgerMenuBut = $('section').find('button img');
var dropDownMenu = $('section').find('#drop-menu')
console.log(dropDownMenu);

// if( x>1023){
// 	humburgerMenuBut.css('display', 'none');
// 	console.log(x)
// }


	


});