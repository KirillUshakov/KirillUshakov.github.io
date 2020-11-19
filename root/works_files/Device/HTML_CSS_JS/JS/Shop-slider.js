/*Variables
==============================================================================*/
var ShopContent = document.querySelector('.shop-content');
var ShopList = ShopContent.querySelector('.shop-items');
var ShopItems = ShopList.querySelectorAll('.shop-item');

var PageSlider = document.querySelector('.page-slider')
var PagePrev = PageSlider.querySelector('.page-prev');
var PageNext = PageSlider.querySelector('.page-next');
var PageList = PageSlider.querySelector('.page-list');
var PageBtns;

var CurPage = 1;

var ItemsOnList = 4;

/*Main
==============================================================================*/
SetPageList();
ShowPage(CurPage);

PagePrev.addEventListener('click', function(){
	ChangePage(-1);
});

PageNext.addEventListener('click', function(){
	ChangePage(1);
});



/*Functions
==============================================================================*/
function SetPageList(){
	PageList.innerHTML = "";

	for(var i=0; i < Math.ceil(ShopItems.length / ItemsOnList); i++){
		var 	PageBtn = document.createElement('button');
				PageBtnItem = document.createElement('li');

		PageBtn.classList.add('page-num');
		PageBtn.innerHTML = i+1;

		PageBtnItem.appendChild(PageBtn);

		PageList.appendChild(PageBtnItem);
	}

	PageBtns = PageList.querySelectorAll('.page-num');
	for (var i = 0; i < PageBtns.length; i++) {
		PageBtns[i].addEventListener("click",function(){
			var n = this.innerHTML;
			if (n != CurPage)
 				ShowPage(n);
		});
	}
}

/*Show Page*/
function ShowPage(n){
	for (var i = 0; i < ShopItems.length; i++) {
		ShopItems[i].style.display = 'none';
	}

	for (var i = ItemsOnList * (n-1); i < n*ItemsOnList; i++) {
		try {
		 	ShopItems[i].style.display = 'block';
		 } catch(e) {
		 }
	}

	for (var i = 0; i < PageBtns.length; i++) {
		PageBtns[i].classList.remove('active');
	}

	PageBtns[n-1].classList.add('active');

	CurPage = n;
}

function ChangePage(n){
	 page = parseInt(CurPage) + parseInt(n);

	if (page>PageBtns.length)
		page=1;
	else if (page<1)
		page=PageBtns.length;

	ShowPage(page);
}

