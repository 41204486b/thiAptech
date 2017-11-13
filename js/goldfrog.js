$(document).ready(function(){
	var tabIndex = 1;
	var tabs = $('.tabcontent');

	var slideIndex = 1;
	var slides = $('.slidecontent');

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
			slideIndex = 1;
			
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
})