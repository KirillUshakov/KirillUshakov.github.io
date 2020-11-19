var slideIndex = 1;
showSlide(slideIndex);


function plusSlide(n){
	showSlide(slideIndex += n);
}

function showSlide(n){
	var slides = document.getElementsByClassName("slide_item")

	if(n > slides.length){
		slideIndex = 1;
	} 

	if (n < 1){
		slideIndex = slides.length;
	}

	for (let i=0; i<slides.length;i++){
		slides[i].style.display = 'none';
	}

	slides[slideIndex-1].style.display = 'block';
}