$(document).ready(function(){

	window.onscroll = function() {sticky_function()};
 	window.onresize = function() {sticky_function()};


 	var menu_nav_wrap = document.getElementById("menu_nav_wrap");
 	var menu_body = document.getElementById("menu_body");
 		

 	function sticky_function() {

 		var sticky = $('.header').height(); 

 		if(window.pageYOffset > sticky) {

 			menu_nav_wrap.classList.add("sticky");
 			menu_body.classList.add("sticky_padding");

 		}else{

 			menu_nav_wrap.classList.remove("sticky");
 			menu_body.classList.remove("sticky_padding");

 		}
 	}

});