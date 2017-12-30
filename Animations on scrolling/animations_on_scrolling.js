	// $(window).scroll(function() {
	// 	$('.mov').each(function(){
	// 		var imagePos = $(this).offset().top;
	// 		var topOfWindow = $(window).scrollTop();
	// 		if (imagePos < topOfWindow+200) {
	// 			$(this).addClass('wobble');
	// 		}
	// 	});
	// });

	window.onloaded = function(){
		window.scroll( Animate('mov','woddle'));
		console.log(className);
	}





	function Animate(className,animations){
		alert('ss')
		var className = window.getElementByClassName(className);
		var topOfWindow = $(window).scrollTop();
		var imagePos = $(this).offset().top;
		console.log(className);
		className.each(function(){
			if (imagePos < topOfWindow+200) {
				this.addClass('wobble');
			}
		});
	};