/*Variables
====================================================================*/
var inputLeft = document.getElementById('inputLeft');
var inputRight = document.getElementById('inputRight');

var dotLeft = document.querySelector('.range-slider > .dot.left');
var dotRight = document.querySelector('.range-slider > .dot.right');
var range = document.querySelector('.range-slider > .range');

var priceFrom = document.getElementById('price-from');
var priceTo = document.getElementById('price-to');

var PriceMin = inputLeft.getAttribute("data-min");
var PriceMax = inputRight.getAttribute("data-max");

/*Main
====================================================================*/
inputLeft.addEventListener('input', function(){
	SetLeftValue();
	SetDotPrice();
});

inputRight.addEventListener('input', function(){
	SetRightValue();
	SetDotPrice();
});

inputLeft.addEventListener('mousedown', LeftDotToggleActive);
inputLeft.addEventListener('mouseup', LeftDotToggleActive);
inputRight.addEventListener('mousedown', RightDotToggleActive);
inputRight.addEventListener('mouseup', RightDotToggleActive);

inputLeft.addEventListener('focusin', LeftDotToggleActive);
inputLeft.addEventListener('focusout', LeftDotToggleActive);
inputRight.addEventListener('focusin', RightDotToggleActive);
inputRight.addEventListener('focusout', RightDotToggleActive);


/*functions
====================================================================*/
function SetDefaultInput(){
	var LeftVal = inputLeft.getAttribute('data-cur-value');
	var RightVal = inputRight.getAttribute('data-cur-value');

	var procentL = (LeftVal-PriceMin) / (PriceMax - PriceMin) *100;
	var procentR = (RightVal-PriceMin) /(PriceMax - PriceMin) *100;

	dotLeft.style.left =  procentL + '%';
	dotRight.style.right =  procentR + '%';

	inputLeft.value =	procentL;
	inputRight.value =	procentR;
}
SetDefaultInput();

function SetLeftValue(){
	var 	_this = inputLeft;
			min = _this.min,
			max = _this.max;

	_this.value = Math.min(parseInt(_this.value), parseInt(parseInt(inputRight.value) - parseInt(max*0.1)));
	var percent = Math.ceil(((_this.value - min)/(max-min))*100);

	dotLeft.style.left= percent + '%';
	range.style.left = percent + '%';

	var priceValue = 'от '+ parseInt((PriceMax - PriceMin)*_this.value/100 + parseInt(PriceMin));
	priceFrom.innerHTML = priceValue;
}
SetLeftValue();

function SetRightValue(){
	var 	_this = inputRight;
			min = _this.min,
			max = _this.max;
 

	_this.value = Math.max(_this.value, parseInt(parseInt(inputLeft.value) + parseInt(max*0.1)));
	var percent = Math.ceil(((_this.value - min)/(max-min))*100);

	dotRight.style.right= 100-percent + '%';
	range.style.right = 100-percent + '%';

	var priceValue = 'до '+ parseInt((PriceMax - PriceMin)*_this.value/100 + parseInt(PriceMin));
	priceTo.innerHTML = priceValue;
}
SetRightValue();

function SetDotPrice(){
	var 	max= inputRight.max;
			coof = max*0.5;

	if (inputRight.value - inputLeft.value <= coof){
		dotLeft.classList.add('right-text');
		dotRight.classList.add('right-text');
	} else {
		dotLeft.classList.remove('right-text');
		dotRight.classList.remove('right-text');
	}
}

function LeftDotToggleActive(){
	dotLeft.classList.toggle('active');
}

function RightDotToggleActive(){
	dotRight.classList.toggle('active');
}