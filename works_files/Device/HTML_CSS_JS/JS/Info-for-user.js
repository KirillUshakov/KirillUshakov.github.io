var Descriptopn = document.querySelector('.content-for-user');
var DataOpenBtn = document.querySelectorAll("[data-open]");

for(var i=0;i<DataOpenBtn.length;i++){
	DataOpenBtn[i].addEventListener("click",function(){
		var dataOpen = this.getAttribute('data-open');
		var DecriptionPages = Descriptopn.querySelectorAll('.content-for-user-item');

		for (var i = 0 ; i<DataOpenBtn.length; i++) {
			if (DataOpenBtn[i] != this)
				DataOpenBtn[i].classList.remove('selector-active');
			else DataOpenBtn[i].classList.add('selector-active');
		}

		for (var i = 0; i < DecriptionPages.length; i++) {
			if (DecriptionPages[i].getAttribute('id') != dataOpen)
				DecriptionPages[i].style.display = 'none';
			else DecriptionPages[i].style.display = 'block';
		}

	});
}