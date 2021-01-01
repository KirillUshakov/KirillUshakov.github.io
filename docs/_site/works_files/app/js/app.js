document.addEventListener('DOMContentLoaded', () => {
	//OpenPopup

	var PopupBtns = document.querySelectorAll('[popup-open]');
	
	for (let i = 0; i < PopupBtns.length; i++) {
		const element = PopupBtns[i];

		element.addEventListener('click',function(evt){
			evt.preventDefault();
	
			var PopupId = this.getAttribute("popup-open");
			
			if(Popup = document.querySelector('#'+PopupId)){
				var Popup = document.querySelector('#'+PopupId);
					PopupCloseBtn = Popup.querySelector('.popup__close-btn');

				Popup.classList.add('active');

				PopupCloseBtn.addEventListener('click',function(evt){
					evt.preventDefault();

					Popup.classList.remove('active');
				})

				window.addEventListener('click',function(evt){
					var Target = evt.target;

					if(Target.classList.contains('popup')){
						Popup.classList.remove('active');
					}
				})
			}
		})	
	}
	
})
