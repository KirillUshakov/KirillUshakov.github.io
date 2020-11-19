var BtnsOpenModal = document.querySelectorAll('[data-open-modal]');

function ModalShow(ModalName){
	ModalName.classList.add('show');
}

function ModalHide(ModalName){
	ModalName.classList.remove('show');
}

for (var i = 0; i < BtnsOpenModal.length; i++) {
	BtnsOpenModal[i].addEventListener('click', function(evt){
		evt.preventDefault();

		var ModalName = this.getAttribute('data-open-modal');
		var ModalToOpen = document.querySelector(ModalName);
		var ModalCloseBtn = ModalToOpen.querySelector('.modal-close-btn');

		ModalShow(ModalToOpen);

		ModalCloseBtn.addEventListener('click', function(){
			ModalHide(ModalToOpen);
		})	

	});
}





