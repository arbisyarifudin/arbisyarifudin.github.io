$(function () {
	$('.menux').click(function () {
	$('.sticky').show().css({'display' : 'block'});
	$('.tutup').show().css({'display' : 'block'});
	$('.menux').show().css({'display' : 'none'});
	return true;
	});

	$('.tutup').click(function () {
	$('.sticky').show().css({'display' : 'none'});
	$('.tutup').show().css({'display' : 'none'});
	$('.menux').show().css({'display' : 'block'});
	return true;
	});

	$('.sticky li a').click(function () {
	$('.sticky').show().css({'display' : 'none'});
	$('.tutup').show().css({'display' : 'none'});
	$('.menux').show().css({'display' : 'block'});
	return true;
	});

});

$(window).bind("load resize", function () {
	if ($(this).width() < 575) {
		$('.sticky').show().css({'display': 'none'});
		$('.tutup').show().css({'display': 'none'});
		$('.menux').show().css({'display': 'block'});
	} else {
		$('.menux').show().css({'display': 'none'});
		$('.tutup').show().css({'display': 'none'});
		$('.sticky').show().css({'display': 'none'});
	}
});