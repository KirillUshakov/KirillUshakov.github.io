$(document).ready(function() {

	/*Default Values*/
	var 	HeaderNavH = $('.header-nav').innerHeight();
			HeaderH = $('header').innerHeight();
			HeaderNav = $('.header-nav');

	CheckScroll($(window).scrollTop());

	/*Main Nav Header*/
	$('.header-nav-list.list a').on('click', function(event){
		event.preventDefault();

		var 	BlockId = $(this).attr('data-scroll');
				console.log(BlockId);
				BlockOffset = $(BlockId).position().top;

		$('html, body').animate({
			scrollTop: BlockOffset
		},500)		
	})

	$(window).scroll(function(event) {
		event.preventDefault();

		var S = $(window).scrollTop();

		CheckScroll(S);
	});

	/*Check Scrool*/
	function CheckScroll(s){
		if(s>= HeaderH - HeaderNavH){
			HeaderNav.addClass('fixed');
		} else {
			HeaderNav.removeClass('fixed');
		}
	}

	/*Burger-menu*/
	var FirstClick = false;

	$('.burger-menu').on('click',function(event){
		event.preventDefault();


		if($(this).hasClass('active')){

			$(this).removeClass('active');
			$('.header-nav-list').removeClass('active');
			HeaderH = $('.header').innerHeight();
			$(this).addClass('not-active');
			$('.header-nav-list').addClass('not-active');

		}else if($(this).hasClass('not-active')){

			$(this).removeClass('not-active');
			$('.header-nav-list').removeClass('not-active');
			HeaderH = $('.header').innerHeight();
			$(this).addClass('active');
			$('.header-nav-list').addClass('active');

		};

		

		if(!FirstClick){
			FirstClick=true;
			$(this).addClass('active');

			$('.header-nav-list').addClass('active');

		};
		
	})


	/*Tabs*/
	for (var i = 0; i < $('.tab-item').length; i++) {
		$('.tabs-btns').append('<button class="btn tabs-btn">Tab '+(i+1)+'</button>');
	}

	function show_tab(n){
		$('.tabs-btn').removeClass('active');
		$('.tabs-btn').eq(n-1).addClass('active');

		$('.tab-item').removeClass('active');
		$('.tab-item').eq(n-1).addClass('active');
	}
	
	show_tab(1);

	$('.tabs-btn').on('click', function(event) {
		event.preventDefault();

		var 	num = this.innerHTML;
				num = num.replace('Tab ','');

		show_tab(num);
	}); 
}); 



