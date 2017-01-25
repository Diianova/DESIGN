document.addEventListener("DOMContentLoaded", function() {

//Slajder 
var baner  = document.querySelector('.page-header');
var imgArray = [ "url(img/slajd2.2-BG.png)", "url(img/slajd3-BG.png)", "url(img/slajd1-BG.png)"]
var index = 0;

function newImage(){

	baner.style.backgroundImage = imgArray[index];
	index++;

	if(index > imgArray.length){
		index = 0;
	}
}

setInterval(newImage, 5000);

baner.addEventListener('click', function(){
		baner.style.backgroundImage = imgArray[index];
		index++;

		if(index > imgArray.length){
		index = 0;
	}
});

// Menu 

var iconHumburger = document.querySelector("button");
var dropDownMenu = document.querySelector("nav");

console.log(iconHumburger);

iconHumburger.addEventListener('click', function(){
	dropDownMenu.classList.toggle('hide');
});

var a = document.querySelectorAll("a");
console.log(a);

for(var i=0; i<a.length; i++){
	a[i].addEventListener('click',function(){
		// var href = this.getAttribute('href');
		var br=this.getBoundingClientRect();
		console.log("Top:"+br.top+", Left:"+br.left+", Right:"+br.right+", Bottom:"+br.bottom)

		dropDownMenu.classList.toggle('hide');
	});
}


// Przełączenie tekstów


var menu2 = document.querySelector("#menu2");
var texts = menu2.querySelectorAll("div .info");
var figures = menu2.querySelectorAll("div .nr-article div");
console.log(texts);

for( i=0; i<=figures.length; i++){
	figures[i].addEventListener('click',function(){
		console.log('click');
	});
}


});













