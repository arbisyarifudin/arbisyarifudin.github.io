$(function () {

	$('#callback').click(function () {
	$('.popup').show().css({'right' : '0'});
	return true;
	});

  	$('.close-popup').click(function () {
  	$('.popup').show().css({'right' : '-1000%'});
  	return true;
  	});



});