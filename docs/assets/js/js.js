document.addEventListener("DOMContentLoaded", function() {


	/*Smooth Scroll*/
	var PageAdress = window.location.pathname;

	console.log(PageAdress);

	if (PageAdress == "/"){
		let ScrollLinks = document.querySelectorAll('[data_scroll]');

		for (var i = 0; i < ScrollLinks.length; i++) {
			ScrollLinks[i].addEventListener('click',function(evt){
				evt.preventDefault();

				 	var	Block = document.getElementById(this.getAttribute('data_scroll'));
						OffsetTop = Block.offsetTop;
						HeaderH = document.querySelector('header').offsetHeight;
						OffsetPosition = OffsetTop;

				ScrollTo(Block);
			})	
		}
	}
	

	function ScrollTo(element){
		OffsetTop = element.offsetTop;
		HeaderH = document.querySelector('header').offsetHeight;
		OffsetPosition = OffsetTop - HeaderH;

		window.scroll({
			left:0,
			top:OffsetPosition,
			behavior: 'smooth'
		})
	}
	

	/*Burger-menu*/
	var 	BurgerBtnOpen  = document.querySelector('.burger-menu');
			BurgerBtnClose = document.querySelector('.close-nav-btn');
			HeaderMenu = document.querySelector('.main-nav-mobile-container');
			Body = document.querySelector('body');

	if(!document.querySelector('.burger-menu.burger-menu-work') && BurgerBtnOpen && BurgerBtnClose){
		BurgerBtnOpen.addEventListener('click', function(evt){
			evt.preventDefault();

			HeaderMenu.classList.add('active');
			Body.classList.add('fixed');
		})

		BurgerBtnClose.addEventListener('click',function(evt){
			evt.preventDefault();

			HeaderMenu.classList.remove('active');
			Body.classList.remove('fixed');
		})

		document.addEventListener('click',function(e){
			if(e.target.classList.contains('main-nav-mobile-container')){
				HeaderMenu.classList.remove('active');
				Body.classList.remove('fixed');
			}
		});
	} else if (document.querySelector('.burger-menu.burger-menu-work')){
		var Burger_menu_work = document.querySelector('.burger-menu.burger-menu-work');
			Work_pages = document.getElementById('work-links-container');
			Work_links = document.querySelectorAll('.work-page-links  a');

		Burger_menu_work.addEventListener('click', function(evt){
			evt.preventDefault();
			
			Burger_menu_work.classList.toggle('active');
			Work_pages.classList.toggle('active');
		})

		for (let i = 0; i < Work_links.length; i++) {
			const element = Work_links[i];
			
			element.addEventListener('click', function(){
				Burger_menu_work.classList.remove('active');
				Work_pages.classList.remove('active');
			})
		}

		document.addEventListener('click',function(e){
			if(e.target.classList.contains('work-links-container')){
				Burger_menu_work.classList.remove('active');
				Work_pages.classList.remove('active');
			}
		});
	}

	/*OrderForm and error*/
	var 	OrderForm = document.getElementById('order-form');
			FormSuccess = document.querySelector('#order-form .form-error')
			inputs = document.querySelectorAll('.order-inputs input');
			OrderDesc = document.querySelector('.order-inputs textarea');
			UserEmail = document.getElementById('UserEmail');

	if(OrderForm){
		OrderForm.addEventListener('submit',function(evt){
			evt.preventDefault();

			var IsFormSuccess = IsValidEmail(UserEmail.value);

			if(IsFormSuccess){
				FormSuccess.classList.add('active');
			} else {
				FormSuccess.innerHTML = "Ошибка Email не существует";
				FormSuccess.classList.add('active','error');
			}

			OrderForm.reset();
		})
	}

	function IsValidEmail (UserEmail){
		var index = 0;
			state = 0;
			ch = '';
			mark = 0;
			local = null;
			domain = 1;

		while((index <= (UserEmail.length - 1) ) && (state != -1 )) {
			ch = UserEmail[index];

			switch (state){
				case 0:
					//Первая буква названия почты
					if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')
							|| (ch >= '0' && ch <= '9') || ch == '_' || ch == '-'
							|| ch == '+') {
						state = 1;
						break;
					}
					
					console.log('Ошибка на', state);
					state = -1;
					break;
				
				case 1:
					//Проверка остальных букв в названии
					if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')
							|| (ch >= '0' && ch <= '9') || ch == '_' || ch == '-'
							|| ch == '+') {
						break;
					}

					if(ch == '.'){
						state = 2;
						break;
					}

					if(ch == '@'){
						local = UserEmail.substring(0, index);
						state = 3;
						break;
					}
					
					//Если не подошло ни под одно из условий
					console.log('Ошибка на', state);
					state = -1;
					break;

				case 2:
					//Проверка на символ после . в имени почты
					if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')
							|| (ch >= '0' && ch <= '9') || ch == '_' || ch == '-'
							|| ch == '+') {
						state = 1;
						break;
					}

					//Если не подошло ни под одно из условий
					console.log('Ошибка на', state);
					state = -1;
					break;
				
				case 3:
					//Проверка начала ящика
					if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')
							|| (ch >= 'A' && ch <= 'Z')) {
						state = 4;
						break;
					}

					//Если не подошло ни под одно из условий
					console.log('Ошибка на', state);
					state = -1;
					break;

				case 4:
					//Сборка названия ящика
					if(index == parseInt(UserEmail.length - 1)){
						if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')
							|| (ch >= 'A' && ch <= 'Z')) {
								state = 6;
								break;
						}
					}

					if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')
							|| (ch >= 'A' && ch <= 'Z')) {
						break;
					}

					if(ch == '-'){
						state = 5;
						break;
					}
					
					if(ch == '.'){
						domain +=1;
						state = 5;
						break;
					}

					//Если не подошло ни под одно из условий
					console.log('Ошибка на', state);
					state = -1;
					break;

				case 5:
					if ((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')
							|| (ch >= 'A' && ch <= 'Z')) {
						state = 4;
						break;
					}

					if(ch == '-'){
						break;
					}

					//Если не подошло ни под одно из условий
					console.log('Ошибка на', state);
					state = -1;
					break;
				
				case 6:
					return(true);
					break;

				case -1:
					break;

				default:
					break;
			}

			index++;
		}


		if(domain < 2){
			return(false);
		}

		if(UserEmail.length > 254){
			return(false);
		}

		if(local.length > 64){
			return(false);
		}

		index = UserEmail.length - 1;
		while (index > 0) {
			ch = UserEmail[index];
			console.log(ch);
			if (ch == '.' && UserEmail.length - index > 2) {
				return true;
			}
			if (!((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))) {
				return false;
			}
			index--;
		}

		if(state == 6){
			return(true);
		}
	}


	/* Work Page*/
	if(document.querySelector('.work-page')){
		console.log('gdfgfgdfgfgg');

		var work_frame = document.querySelector('.work_frame');
			work_pages = document.querySelectorAll('.work-page-links ol a')
			work_page_title = document.querySelector('.work-page h1');
			work_links_container = document.querySelector('.work-links-container');

		work_page_title.textContent = work_page_title.textContent.replace('_',' ');

		console.log(work_page_title);
		ChangeHeightToHeightOfViewport(work_frame);

		if(!document.querySelector('.work_frame.on_host')){
			ChangeHeightToHeightOfViewport(work_links_container);
		}

		window.addEventListener(`resize`, event => {
			console.log('hehe');
			ChangeHeightToHeightOfViewport(work_frame);

			if(!document.querySelector('.work_frame.on_host')){
				ChangeHeightToHeightOfViewport(work_links_container);
			}
			
		}, false);

		
		for (let i = 0; i < work_pages.length; i++) {
			work_pages[i].addEventListener('click', function(evt){
				evt.preventDefault();

				var link_source = this.getAttribute('href');
					work_frame = document.querySelector('.work_frame');
				
				if(!document.querySelector('.work_frame.on_host')){
					var inner_frame = work_frame.contentDocument || work_frame.contentWindow.document;
						frame_links = inner_frame.querySelectorAll('[href]');
						body_frame = inner_frame.querySelector('body');
						next_link = document.createElement('a');

					next_link.setAttribute('href', link_source);
					body_frame.appendChild(next_link);
					next_link.click();

				} else {
					work_frame = document.querySelector('.work_frame.on_host');
					work_frame.setAttribute('src',link_source);
				}		
			})	
		}


	}

	function ChangeHeightToHeightOfViewport(block){
		var ViewPortHeight = window.innerHeight;
			HeaderH = document.querySelector('header').offsetHeight;

		ViewPortHeight-= HeaderH
		block.style.height = ViewPortHeight + "px";
	}
});
