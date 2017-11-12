$(document).ready(function(){
	$('ul#menu_products li a').click(function(){
		var tab_id = $(this).parent().attr('data-tab');
		$('ul#menu_products li').removeClass('active');
		// $('ul#menu_products li').hide(2000);

		$('.tabcontent').removeClass('active');
		$(this).parent().addClass('active');
		$("#" + tab_id).addClass('active');
		$("#" + tab_id).show(2000);
	})
})