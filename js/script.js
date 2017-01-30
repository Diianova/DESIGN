document.addEventListener("DOMContentLoaded", function() {

//Slider 
var banner  = document.querySelector('.page-header');
var titleOfBanner = document.querySelector('header h1')
var imgArray = [ "url(img/slajd2.2-BG.png)", "url(img/slajd3-BG.png)", "url(img/slajd1-BG.png)"];
var index = 0;

function newImage(){

	banner.style.backgroundImage = imgArray[index];
	index++;

	if(index > imgArray.length){
		index = 0;
	}
}

setInterval(newImage, 5000);


imgArray.forEach((elem, id) => {
	imgArr = [ "url(img/slajd1-BG.png)", "url(img/slajd2.2-BG.png)", "url(img/slajd3-BG.png)"]

	banner.querySelectorAll('.container .slider-icons .sliderBT')[id].addEventListener('click', () => {
		banner.style.backgroundImage = imgArr[id];
			if(id == 0){
				titleOfBanner.innerText = "Feel the Power of Typography";
			}else if(id == 1){
				titleOfBanner.innerText = "Feel the Power of RWD";
			}else{
				titleOfBanner.innerText = "Feel the Power of UX Design";
			}
		
	});
});

// Menu 

var iconHumburger = document.querySelector("button");
var dropDownMenu = document.querySelector("nav");
var menu = document.querySelector(".page-nav");


iconHumburger.addEventListener('click', function(){
	dropDownMenu.classList.toggle('hide');
});

var a = document.querySelectorAll("a");

for(var i=0; i<a.length; i++){
	a[i].addEventListener('click',function(){
		// var href = this.getAttribute('href');
		var br=this.getBoundingClientRect();
		console.log("Top:"+br.top+", Left:"+br.left+", Right:"+br.right+", Bottom:"+br.bottom)

		dropDownMenu.classList.toggle('hide');
	});
}

// Choose article

var figures = document.querySelectorAll("#flex-container label");;
var texts = document.querySelectorAll("#flex-container #content div");

for(i=0; i<figures.length; i++){
	figures[i].addEventListener('click', function (){
		if(this.innerText == 1){
			texts[0].classList.remove('hide');
			texts[1].classList.add('hide');
			texts[2].classList.add('hide');
			texts[3].classList.add('hide');
		}else if(this.innerText == 2){
			texts[0].classList.add('hide');
			texts[1].classList.remove('hide');
			texts[2].classList.add('hide');
			texts[3].classList.add('hide');
		}else if(this.innerText == 3){
			texts[0].classList.add('hide');
			texts[1].classList.add('hide');
			texts[2].classList.remove('hide');
			texts[3].classList.add('hide');
		}else {
			texts[0].classList.add('hide');
			texts[1].classList.add('hide');
			texts[2].classList.add('hide');
			texts[3].classList.remove('hide');
		}

	});

}

	


});













