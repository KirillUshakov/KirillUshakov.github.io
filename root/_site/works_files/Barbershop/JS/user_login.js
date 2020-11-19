var btn_open = document.querySelector(".btn-login");
var popup = document.querySelector(".modal-login");
var btn_close = popup.querySelector(".close_modal_btn");

var form = popup.querySelector(".login-form");
var login = popup.querySelector(".input_login");
var password = popup.querySelector(".input_password");
var remember_me = popup.querySelector(".remember_me_checkbox")
var storageLogin = "";
var storageRemember_me = "";
var storageSupport = true;


/*Local Support*/
try {
		storageLogin = localStorage.getItem("login");
		storageRemember_me = localStorage.getItem("remember_me");
	} catch(err) {
		storageSupport = false;
		console.log('storageSupport is false');
	}

/*BTN Open/Close */
btn_open.addEventListener("click",function(evt){
	evt.preventDefault();
	popup.classList.add("modal_show");

	if (storageSupport){
		login.value = storageLogin;

		if(storageRemember_me == 1)
			remember_me.checked = 1;
		else 
			remember_me.checked = 0;


		password.focus();

	} else {
		login.focus();
	}


});

btn_close.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.remove("modal_show");
	popup.classList.remove("modal-error");

});

/*Input/Password/Checkbox*/
form.addEventListener("submit", function(evt){
	evt.preventDefault();

	if (!login.value || !password.value){
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");

		console.log('Введите данные !');
	} else {
		if (remember_me.checked){
			localStorage.setItem("remember_me", 1);
			localStorage.setItem("login", login.value);
		} else
			localStorage.setItem("remember_me", 0);

		form.submit();
	}

});
