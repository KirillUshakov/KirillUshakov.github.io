var header = document.querySelector('.header');

/*Open menu*/
var burgerBtn = header.querySelector('.burger-menu');
var mainMenu = header.querySelector('.main-links');

burgerBtn.addEventListener('click', function(){
	mainMenu.classList.toggle('show');
})


/*Open sub menu*/
var SubBtns = document.querySelectorAll('.main-button');

for (var i = 0; i < SubBtns.length; i++) {
	SubBtns[i].addEventListener('click', function(){
		this.classList.toggle('active');
		this.parentNode.classList.toggle('active');
	})
}