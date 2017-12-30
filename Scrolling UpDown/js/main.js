window.onload = function(){



	$(window).scroll(function(){

		var scrolled = $(document).scrollTop();
		if(scrolled => 200){
			$('.up img').css({"opacity" : "1" });
		}
		if(scrolled <= 200){
			// alert(2);
			$('.up img').css({"opacity" : "0" });
		}

		console.log(scrolled);
	})	

	var MaxScroll = 0;
	var numClick = 0;

	$('#up').click(function(){
		numClick +=1; 
		if(numClick %2){
			MaxScroll = $(document).scrollTop();
			$('body').animate({scrollTop:0},500);
			$('#up').removeClass('up');
			$('#up').addClass('down');
		}
		else{
			$('body').animate({scrollTop: MaxScroll},500);
			$('#up').removeClass('down');
			$('#up').addClass('up');			
		}




	});
}