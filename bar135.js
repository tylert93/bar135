
$(document).ready(function(){

	window.onload = function(){

		carousel();
		fade();

	}

 	var switch_01 = false;
 	var switch_02 = false;

 	$(".side_nav_button").click(function(){

 		if(switch_01 == false){

 			$(".side_nav_wrap").animate({left:'88%'});
 			
 			switch_01 = true;

 		}else{

 			$(".side_nav_wrap").animate({left:'0%'});
 			
 			switch_01 = false;

 		}

 	});

 	$(".side_menu_nav_button").click(function(){

 		if(switch_02 == false){

 			$(".side_menu_nav_wrap").animate({left:'88%'});
 			
 			switch_02 = true;

 		}else{

			$(".side_menu_nav_wrap").animate({left:'0%'}); 			

 			switch_02 = false;

 		}

 	});

 	$(".count_02_up").click(function(){

 		if(switch_02 == false){

 			$(".side_menu_nav_wrap").animate({left:'88%'});
 			$(".side_nav_open").animate({left:'-20%'});

 			switch_02 = true;

 		}else{

			$(".side_menu_nav_wrap").animate({left:'0%'}); 	
			$(".side_nav_open").animate({left:'15%'});		

 			switch_02 = false;

 		}

 	});

 	
	var fadeMarker = 0;

	setInterval(fade, 6000);

	function fade(){

		if(fadeMarker == 0){

			$('#fade_title_3').stop(true,true).fadeOut(1000);
			$('#fade_title_1').stop(true,true).fadeIn(1000);

			fadeMarker ++;

		}else if(fadeMarker == 1){

			$('#fade_title_1').stop(true,true).fadeOut(1000);
			$('#fade_title_2').stop(true,true).fadeIn(1000);

			fadeMarker ++;

		}else if(fadeMarker == 2){

			$('#fade_title_2').stop(true,true).fadeOut(1000);
			$('#fade_title_3').stop(true,true).fadeIn(1000);

			fadeMarker ++;

		}else if(fadeMarker == 3) {

			$('#fade_title_3').stop(true,true).fadeOut(1000);
			$('#fade_title_1').stop(true,true).fadeIn(1000);

			fadeMarker = 1;

		};	

	}

	setInterval(carousel, 3000);

	var carouselMarker = 0

	function carousel(){

		if(carouselMarker < 9){

			$("#img_container").stop(true,true).animate({marginLeft:"-=100%"
			}, 800);

			carouselMarker++;

		}else {

			$("#img_container").stop(true,true).css('marginLeft','0%');

			$("#img_container").stop(true,true).animate({marginLeft:"-=100%"
			}, 800);

			carouselMarker = 1;

		}

	}

	var date = new Date();
	var today = date.getDay();
		
	if(today == 2){

	$('.tuesday').css('color','#0033cc');
    $('.tuesday').css('borderColor','#0033cc');

	}else if(today == 3){

	$('.wednesday').css('color','#0033cc');
    $('.wednesday').css('borderColor','#0033cc');

	}else if(today == 4){

	$('.thursday').css('color','#0033cc');
    $('.thursday').css('borderColor','#0033cc');

	}else if(today == 5){

	$('.friday').css('color','#0033cc');
    $('.friday').css('borderColor','#0033cc');

	}else if(today == 6){

	$('.saturday').css('color','#0033cc');
    $('.saturday').css('borderColor','#0033cc');

	}else{


	}

 });

