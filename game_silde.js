$(document).ready(function() {

	$( ".projetcs_screen" ).hide("fast");
	$( ".popup_planet_1" ).hide("fast");
	$( ".popup_planet_2" ).hide("fast");
	$( ".popup_planet_3" ).hide("fast");
	$( ".planet" ).hide("fast");
	$( ".target" ).hide("fast");
	$( ".container_about_me" ).hide("fast");




	/*$(".target").hide();*/
	$(".scrap").hide();
	$(".target_btn_true").hide();

	$(".target_planet_1").hover(function() {
		$( ".popup_planet_1" ).fadeIn("slow");
	});
	$(".target_planet_1").mouseleave(function() {
		$( ".popup_planet_1" ).fadeOut("slow");
	});
	$(".target_planet_2").hover(function() {
		$( ".popup_planet_2" ).fadeIn("slow");
	});
	$(".target_planet_2").mouseleave(function() {
		$( ".popup_planet_2" ).fadeOut("slow");
	});
	$(".target_planet_3").hover(function() {
		$( ".popup_planet_3" ).fadeIn("slow");
	});
	$(".target_planet_3").mouseleave(function() {
		$( ".popup_planet_3" ).fadeOut("slow");
	});



	var images = ['images/sample_miku/', "images/sample_mooncake/", "images/sample_nyancat/", "images/sample_magic/"];
	var parts = ['02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg',];
	var folder = images[Math.floor(Math.random() * images.length)];
	var slide_puzzle_bool = true;
	var slide_project_bool = false;
	var slide_about_me_bool = false;
	var scaner_bool = false;


	function initpuzzle(folder, parts, images) {
		for (var i = 0; i < 8; i++) {
			var background = parts[i];
			var cible = "."+i;
			$(cible).css("background-image", "url(" + folder + background + ")");

		}
		$("#puzzle").css("background-image", "url(" + images[Math.floor(Math.random() * images.length)] + ")");
	}

	function shuffle(a) {
	    var j, x, i;
	    for (i = a.length - 1; i > 0; i--) {
	        j = Math.floor(Math.random() * (i + 1));
	        x = a[i];
	        a[i] = a[j];
	        a[j] = x;
	    }
	    return a;
	}
	parts = shuffle(parts); ///////////////////////////////////////////////////////////////////////////////////
	initpuzzle(folder, parts, images);


	//end init puzzle

	$('.icon_puzzle').click(function() {
		slide_puzzle();
		$( ".projetcs_screen" ).slideUp("slow");
		$( ".container_about_me" ).slideUp("slow");
		slide_project_bool = false;
		slide_about_me_bool = false;
	});

	function slide_project(){
		if (slide_project_bool == true) {
			$( ".projetcs_screen" ).slideUp("slow");
			slide_project_bool = false;
		}else{
			$( ".projetcs_screen" ).slideDown("slow");
			slide_project_bool = true;
		}
	}


	function slide_about(){
		if (slide_about_me_bool == true) {
			$( ".container_about_me" ).slideUp("slow");
			slide_about_me_bool = false;
		}else{
			$( ".container_about_me" ).slideDown("slow");
			slide_about_me_bool = true;
		}
	}

	function slide_puzzle(){
		if (scaner_bool == true) {
			$('.target_btn_true').fadeOut(100);
			$('.scaner').fadeOut(100);
			$('.target_btn_true').fadeIn(100);
			$('.scaner').fadeIn(100);
			$('.target_btn_true').fadeOut(100);
			$('.scaner').fadeOut(100);
			$('.target_btn_true').fadeIn(100);
			$('.scaner').fadeIn(100);
			return;
		}
		if (slide_puzzle_bool == true) {
			$( ".game" ).slideUp("slow");
			slide_puzzle_bool = false;
		}else{
			$( ".game" ).slideDown("slow");
			slide_puzzle_bool = true;
		}
	}

	$('.button_puzzle').click(function() {

		var folder = $(this).attr("class");
		folder = folder.split(' ');
		folder = "images/"+folder[1]+"/";
		//console.log(folder);
		parts = shuffle(parts);/////////////////////////////////////////////////////////////////////////////////////
		initpuzzle(folder, parts, images);
		return false;
	});

	$('.target_btn_false').click(function() {
		if ($(".map").hasClass('skill')) {
			if (slide_puzzle_bool == true) {
				return;
			}
			$(".target").show();
			$(".target_btn_true").show();
			$(".target_btn_false").hide();
			scaner_bool = true;
		}
	});

	$('.target_btn_true').click(function() {

			$(".target").hide();
			$(".target_btn_true").hide();
			$(".target_btn_false").show();
			scaner_bool = false;
	});



	$('.piece').click(function(){
		$(".curtain").slideDown();

		var vide = $( ".vide" );
		var target = $(this);

		var move = false;
		var col = $(vide).css('grid-column-start');
		var row = $(vide).css('grid-row-start');
		var col_target = $(this).css('grid-column-start');
		var row_target = $(this).css('grid-row-start');
		//	alert("target =>=> col => "+ col + " row => "+row);
		//alert("vide go =>=> col_target => "+ col_target + " row_target => "+row_target);

		if (col == 1 && row == 1 && ((col_target == 1 && row_target == 2) || (col_target == 2 && row_target == 1))) {
				move = true;
		}else if (col == 2 && row == 1 && ((col_target == 1 && row_target == 1) || (col_target == 3 && row_target == 1) || (col_target == 2 && row_target == 2))) {
				move = true;
		}else if (col == 3 && row == 1 && ((col_target == 2 && row_target == 1) || (col_target == 3 && row_target == 2))) {
				move = true;
		}else if (col == 1 && row == 2 && ((col_target == 1 && row_target == 1) || (col_target == 2 && row_target == 2)|| (col_target == 1 && row_target == 3))) {
				move = true;
		}else if (col == 2 && row == 2 && ((col_target == 2 && row_target == 1) || (col_target == 1 && row_target == 2)|| (col_target == 3 && row_target == 2)|| (col_target == 2 && row_target == 3))) {
				move = true;
		}else if (col == 3 && row == 2 && ((col_target == 3 && row_target == 1) || (col_target == 2 && row_target == 2)|| (col_target == 3 && row_target == 3))) {
				move = true;
		}else if (col == 1 && row == 3 && ((col_target == 1 && row_target == 2) || (col_target == 2 && row_target == 3))) {
				move = true;
		}else if (col == 2 && row == 3 && ((col_target == 1 && row_target == 3) || (col_target == 2 && row_target == 2)|| (col_target == 3 && row_target == 3))) {
				move = true;
		}else if (col == 3 && row == 3 && ((col_target == 2 && row_target == 3) || (col_target == 3 && row_target == 2))) {
				move = true;
		}

		if (move == true) {
			if (scaner_bool == true) {
				$(".target").show();
			}
			if($(vide).is('[class*="one"]')) {
				var swapi_vide = "one";
			} else if ($(vide).is('[class*="two"]')) {
				var swapi_vide = "two";
			} else if ($(vide).is('[class*="three"]')) {
				var swapi_vide = "three";
			} else if ($(vide).is('[class*="four"]')) {
				var swapi_vide = "four";
			} else if ($(vide).is('[class*="five"]')) {
				var swapi_vide = "five";
			} else if ($(vide).is('[class*="six"]')) {
				var swapi_vide = "six";
			} else if ($(vide).is('[class*="seven"]')) {
				var swapi_vide = "seven";
			} else if ($(vide).is('[class*="eight"]')) {
				var swapi_vide = "eight";
			} else if ($(vide).is('[class*="nine"]')) {
				var swapi_vide = "nine";
			}

			if($(this).is('[class*="one"]')) {
				var swapi = "one";
			} else if ($(this).is('[class*="two"]')) {
				var swapi = "two";
			} else if ($(this).is('[class*="three"]')) {
				var swapi = "three";
			} else if ($(this).is('[class*="four"]')) {
				var swapi = "four";
			} else if ($(this).is('[class*="five"]')) {
				var swapi = "five";
			} else if ($(this).is('[class*="six"]')) {
				var swapi = "six";
			} else if ($(this).is('[class*="seven"]')) {
				var swapi = "seven";
			} else if ($(this).is('[class*="eight"]')) {
				var swapi = "eight";
			} else if ($(this).is('[class*="nine"]')) {
				var swapi = "nine";
			}
			$(this).addClass(swapi_vide);
			$(this).removeClass(swapi);
			$(vide).addClass(swapi);
			$(vide).removeClass(swapi_vide);
			var img = (target).css("background-image");
			img = img.substr(-7, 1);
			console.log("-------------------img => " + img);
			win();

		}
	});

	function win() {
		var array_num = ['.two', '.three', '.four', '.five', '.six', '.seven',  '.eight' , '.nine'];
		var score = 0;
		var ti = 2;
		array_num.forEach((array_num, i) => {
			i = i + ti;
			var bg_img = $(array_num).css("background-image");
			bg_img = bg_img.substr(-7, 1);
			if (i == bg_img) {
				//console.log("correct pos for => " + i);
				score++;
			}
			i++;
		});
		if (score == 8) {
			alert("bravo");

		}
		console.log("score => " + score);


	}


	$('.vide').click(function(){
		var col = $(this).css('grid-column-start');
		var row = $(this).css('grid-row-start');

		if (col == 1 && row == 1) {
		}else if (col == 2 && row == 1) {
			//	window.location.replace("https://github.com/EpitechIT2020/W-JSC-501-LIL-1-1-racingjs-maxime.delanghe")
		}else if (col == 3 && row == 1) {//projects
			slide_puzzle();
			slide_project();
		}else if (col == 1 && row == 2) {
		}else if (col == 2 && row == 2) {//cv
			slide_puzzle();
		}else if (col == 3 && row == 2) {
		}else if (col == 1 && row == 3) {//history
			slide_puzzle();
			slide_about();


		}else if (col == 2 && row == 3) {
		}else if (col == 3 && row == 3) {//skill
			if (!($(".map").hasClass('skill'))) {
				$(".map").addClass('skill');
				slide_puzzle();
				scaner_bool = true;
				$(".full").hide();
				$(".space_travel").show();
				travel_to_skill();
			}
		//	$(".curtain").slideUp();
		//	$(".scene").css("background-image", "url(images/link_my-skill.png)");
		}

	});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function travel_to_skill() {
	$(".target_reverse").hide();
	$("body").css("background-image", "url(images/bord2_skill.png), url(images/space_2.png)");

  await sleep(5000);
	$(".target_btn_true").show();
	$(".target_btn_false").hide();
	$(".planet").show();

	$(".target").show();
	$(".scrap").show();
	$(".full").show();
	$(".space_travel").hide();
}


	$(".container_intro").hide(); ////////////////////////////////////////////////////////////////////////////////////////////

	$('#btn_intro').click(function(){
	//	$(".intro_left").animate({width:'toggle'},350);
	$(".container_intro").hide(1000);
	$(".container_intro").hide("slide", { direction: "left" }, 1000);
	//	$(".intro_right").animate({width:'toggle'},350);
	//	$(".intro_right").hide("slide", { direction: "right" }, 1200);
	//	$(".intro_right").animate({width:'toggle'},350);


	});

	$('.projetcs_screen_button_next').click(function(){
		if (slide_project_bool == true) {
			if ($(".slide01").hasClass('active')) { //go 2
				$(".slide01").toggleClass('active');
				$(".slide02").toggleClass('active');
				$(".screen_shot").css("background-image", "url(images/projetc/bootsrap.png)");

			}else if ($(".slide02").hasClass('active')) { // go 3
				$(".slide02").toggleClass('active');
				$(".slide03").toggleClass('active');
				$(".screen_shot").css("background-image", "url(images/projetc/t.png)");

			}else if ($(".slide03").hasClass('active')) { // go 1
				$(".slide03").toggleClass('active');
				$(".slide01").toggleClass('active');
				$(".screen_shot").css("background-image", "url(images/projetc/puissance4.png)");

			}
		}
	});
	$('.projetcs_screen_button_prev').click(function(){
		if (slide_project_bool == true) {
			if ($(".slide01").hasClass('active')) { // go 3
				$(".slide01").toggleClass('active');
				$(".slide03").toggleClass('active');
				$(".screen_shot").css("background-image", "url(images/projetc/t.png)");

			}else if ($(".slide02").hasClass('active')) { // go 1
				$(".slide02").toggleClass('active');
				$(".slide01").toggleClass('active');
				$(".screen_shot").css("background-image", "url(images/projetc/puissance4.png)");

			}else if ($(".slide03").hasClass('active')) { // go 2
				$(".slide03").toggleClass('active');
				$(".slide02").toggleClass('active');
				$(".screen_shot").css("background-image", "url(images/projetc/bootsrap.png)");

			}
		}
	});




});
