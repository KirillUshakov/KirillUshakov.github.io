var MainSlider = document.querySelector(".slider");
var SliderItems = MainSlider.getElementsByClassName("slider-item");
var DotLists = MainSlider.querySelectorAll(".slider-dots");

/*CreateDots*/
CreateDots();
ChangeSlide(1);

function CreateDots(){
	for(let i=0; i<SliderItems.length;i++){
		for(let j=0; j<SliderItems.length; j++){
			var indexDot = j+1;

			var Dot = document.createElement('button');
			Dot.classList.add('slider-dot');
			Dot.setAttribute('onclick','ChangeSlide('+indexDot+')');

			DotLists[i].appendChild(Dot);
		}
	}
}

function ChangeSlide(n){
	var ItemDots = SliderItems[n-1].getElementsByClassName("slider-dot");
	var SlideIndex = SliderItems[n-1].querySelector(".slide-index");

	for(let i=0; i<ItemDots.length;i++){
		ItemDots[i].classList.remove = 'active';
	}

	for(let i=0; i<SliderItems.length;i++){
		SliderItems[i].style.display = 'none';
	}

	SlideIndex.innerHTML = ('0'+n);
	ItemDots[n-1].classList.add('active');
	SliderItems[n-1].style.display = 'flex';
}
