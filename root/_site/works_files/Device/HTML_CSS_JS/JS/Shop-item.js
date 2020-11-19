var BaskedBtns = document.querySelectorAll('.item-to-basked');
var CompareBtns = document.querySelectorAll('.item-to-compare');

for (var i = 0; i < BaskedBtns.length; i++) {

	BaskedBtns[i].addEventListener("focusin", function(){
		var parentbtn = this.parentNode;
				ParentBtnContainer = parentbtn.parentNode;
				ImgBg = ParentBtnContainer.querySelector('img');

		ImgBg.style.opacity = '.7';
		parentbtn.classList.add('show');
	})

	BaskedBtns[i].addEventListener("focusout", function(){
		var parentbtn = this.parentNode;
				ParentBtnContainer = parentbtn.parentNode;
				ImgBg = ParentBtnContainer.querySelector('img');

		ImgBg.style.opacity = '1';
		parentbtn.classList.remove('show');
	})
}

for (var i = 0; i < CompareBtns.length; i++) {

	CompareBtns[i].addEventListener("focusin", function(){
		var parentbtn = this.parentNode;
				ParentBtnContainer = parentbtn.parentNode;
				ImgBg = ParentBtnContainer.querySelector('img');

		ImgBg.style.opacity = '.7';
		parentbtn.classList.add('show');
	})

	CompareBtns[i].addEventListener("focusout", function(){
		var parentbtn = this.parentNode;
				ParentBtnContainer = parentbtn.parentNode;
				ImgBg = ParentBtnContainer.querySelector('img');

		ImgBg.style.opacity = '1';
		parentbtn.classList.remove('show');
	})
}