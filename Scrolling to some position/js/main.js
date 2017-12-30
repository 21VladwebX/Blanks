function slowScroll(id) {
	var offset = 0;//width of header on site
	$('html ,body').animate({
		scrollTop: $(id).offset().top - offset
	},500);
	return false;
}