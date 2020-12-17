window.onload = function(){

	var 	TabsItems = document.querySelectorAll('.tab-item');
			TabsBtns = document.querySelector('.tabs-btns');

	for (var i = 0; i < TabsItems.length; i++) {
		var 	TabBtn = document.createElement('button');
				TabBtn.classList.add('btn tabs-btn');
				TabBtn.innerHTML = 'Tab '+(i+1);

				TabsBtns.appendChild(TabBtn);

				TabBtn.addEventListener('click', function(){
					var TabsBtns =	document.querySelectorAll('.tabs-btn');

					TabsBtns.classList.remove('active');
					this.classList.add('active');
				})
	}

}




