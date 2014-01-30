$(function(){
	$('.selectorSection').on('click', function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		if ($(this).hasClass('other')) {
			$(this).find('input').focus();
		}
	});
	$( "#employees" ).buttonset();
	$( "#users" ).buttonset();
});