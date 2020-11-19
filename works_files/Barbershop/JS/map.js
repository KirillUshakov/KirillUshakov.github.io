var popup_map = document.querySelector(".modal-map");
var map_btn_open = document.querySelectorAll(".map_btn_open");
var map_btn_close = popup_map.querySelector(".close_modal_btn")


/*Close/Open*/
for (var i = 0; i < map_btn_open.length; i++) {

	map_btn_open[i].addEventListener("click", function(evt){
	evt.preventDefault();

	popup_map.classList.add("modal_show");

	});

}

map_btn_close.addEventListener("click", function(evt){
	evt.preventDefault();

	popup_map.classList.remove("modal_show");
})