var pageIndex = 1;
var pages_list = document.querySelector(".pages_list");
var shop_items = document.getElementsByClassName("shop_item");


/*Check pages*/
check_page();

function check_page(){
	add_pages(Math.ceil(shop_items.length/6));
}


function add_pages(n){
	for(var i=0; i<n;i++){
		local_index_page = i+1;

		var btn_page = document.createElement('button');
		btn_page.classList.add("page_btn");
		btn_page.setAttribute("onclick", "change_shop_page("+local_index_page+")");
		btn_page.innerHTML = i+1;

		var text_btn = document.createElement('p');
		text_btn.innerHTML = i+1 +" страница";
		text_btn.classList.add("visually-hidden");

		var page_li = document.createElement('li');
		page_li.appendChild(text_btn);
		page_li.appendChild(btn_page);

		pages_list.appendChild(page_li);
	}
}


/* Show/Change page */

var page_btns = pages_list.querySelectorAll(".page_btn");
var storageOnClickEvent = "";

show_shop_page(pageIndex);

function change_shop_page (n){
	if (pageIndex!=n)
		show_shop_page(pageIndex = n);
}

function show_shop_page(n){
	var multiplieValue = (n-1)*6;

	for(var i=0; i < shop_items.length;i++){
		shop_items[i].style.display = "none";
	}

	function delay(i){

		setTimeout(function(){
				try {
					shop_items[multiplieValue + i].style.display = "block";
				} catch(e) {
					
				}

		},100*i);
	}
	
	
	for(var i=0; i<6;i++){
		delay(i);
	}


	for(var i=0; i<page_btns.length;i++){
		page_btns[i].classList.remove("active");
	}

	page_btns[pageIndex-1].classList.add("active");

	/*
	console.log('Page btns = ',page_btns);
	console.log('PageIndex = ',pageIndex);
	console.log('multiplieValue = ',multiplieValue);
	console.log('storageOnClickEvent = ',storageOnClickEvent);
	*/
}