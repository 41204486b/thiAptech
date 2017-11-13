$(document).ready(function(){

	//fixed menu

	$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 48) {
        $('#fixed_menu').addClass('fixed');
    } else {
        $('#fixed_menu').removeClass('fixed');
    }
	});

	$('ul#menu li a').click(function(){
		$('ul#menu li').removeClass('active');
		$(this).parent().addClass('active');
	});

	var tabIndex = 1;
	var tabs = $('.tabcontent');

	$('ul#menu_products li a').click(function(){
		var tab_id = $(this).parent().attr('data-tab');
		$('ul#menu_products li').removeClass('active');
		$('.tabcontent').removeClass('active');
		$(this).parent().addClass('active');
		$("#" + tab_id).addClass('active');
		var tab_dataid =  $(this).parent().attr('data-id');
		checktab(tab_dataid);
		
	});

	function checktab(id_tab){
		if(id_tab < 1 ){
			tabIndex = 1;
			
		}else if(id_tab == 1){
			$('#btn_pre').attr('src', 'images/btn_pre.png');
			$('#btn_next').attr('src', 'images/btn_next_visible.png');
			tabIndex = id_tab;
			$('.tabcontent').removeClass('active');
			$('ul#menu_products li').removeClass('active');
			$('#huongtopnotes').addClass('active');
			$("ul#menu_products li[data-tab='huongtopnotes']").addClass('active');
		}else if(1 < id_tab && id_tab < tabs.length){
			$('#btn_pre').attr('src', 'images/btn_pre_visible.png');
			$('#btn_next').attr('src', 'images/btn_next_visible.png');
			tabIndex = id_tab;
			$('.tabcontent').removeClass('active');
			$('ul#menu_products li').removeClass('active');
			if(tabIndex == 2){
				$('#huongreactions').addClass('active');
				$("ul#menu_products li[data-tab='huongreactions']").addClass('active');
			}else if(tabIndex == 3){
				$('#chietxuat').addClass('active');
				$("ul#menu_products li[data-tab='chietxuat']").addClass('active');
			}else if(tabIndex == 4){
				$('#tinhdau').addClass('active');
				$("ul#menu_products li[data-tab='tinhdau']").addClass('active');
			}
		}else if(id_tab >= tabs.length){
			$('#btn_next').attr('src', 'images/btn_next.png');
			$('#btn_pre').attr('src', 'images/btn_pre_visible.png');
			tabIndex = tabs.length;
			$('.tabcontent').removeClass('active');
			$('ul#menu_products li').removeClass('active');
			$('#huongthom').addClass('active');
			$("ul#menu_products li[data-tab='huongthom']").addClass('active');

		}
	};
	
	$('#btn_next').click(function(){		
		tabIndex ++;
		checktab(tabIndex);	
	});

	$('#btn_pre').click(function(){
		tabIndex --;
		checktab(tabIndex);
	});

	var slideIndex = 1;
	var slides = $('.slidecontent');

	$('#next_slider').click(function(){
		slideIndex ++;
		checkslide(slideIndex);
	});

	$('#pre_slider').click(function(){
		slideIndex --;
		checkslide(slideIndex);
	});

	function checkslide(id_slide){
		if(id_slide < 1){
			slideIndex = 1;
		}else if(id_slide == 1){
			$('#next_slider').attr('src', 'images/btn_next_visible_square.png');
			$('#pre_slider').attr('src', 'images/btn_pre_square.png');
			$('.slidecontent').removeClass('active');
			$('#slider_chietxuat').addClass('active');
			$('#thutuslider').html('01');
		}else if(1 < id_slide && id_slide < slides.length){
			$('#next_slider').attr('src', 'images/btn_next_visible_square.png');
			$('#pre_slider').attr('src', 'images/btn_pre_visible_square.png');
			$('.slidecontent').removeClass('active');
			if(id_slide == 2){
				$('#slider_huongtopnotes').addClass('active');
				$('#thutuslider').html('02');
			}else if(id_slide == 3){
				$('#slider_huongreactions').addClass('active');
				$('#thutuslider').html('03');
			}else if(id_slide == 4){
				$('#slider_tinhdau').addClass('active');
				$('#thutuslider').html('04');
			}
		}else if( id_slide >= 5){
			slideIndex = 5;
			$('#next_slider').attr('src', 'images/btn_next_square.png');
			$('#pre_slider').attr('src', 'images/btn_pre_visible_square.png');
			$('.slidecontent').removeClass('active');
			$('#slider_huongthom').addClass('active');
			$('#thutuslider').html('05');
		}
	}
})