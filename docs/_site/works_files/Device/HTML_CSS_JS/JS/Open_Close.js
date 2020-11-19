/*CATALOG
======================================================================*/
var header = document.querySelector(".header");
var HeaderNav = header.querySelector(".header-nav");
var CatalogBtn = header.querySelector(".catalog-btn");
var CatalogList = header.querySelector(".catalog-container");

CatalogBtn.addEventListener("click",function(){
	HeaderNav.classList.toggle('active');
	CatalogList.classList.toggle('show');
});


/*Search
======================================================================*/
var 	SearchBtn = document.querySelector('.search-button');
		SearchTrack = document.querySelector('#search-btn')

SearchBtn.addEventListener('focusin', function(){
	SearchTrack.classList.add('active-search');
})

SearchBtn.addEventListener('focusout', function(){
	SearchTrack.classList.remove('active-search');
})