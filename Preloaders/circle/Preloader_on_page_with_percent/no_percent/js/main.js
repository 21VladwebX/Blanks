// document.body.onload = function(){
// 	setTimeout(function(){
// 		var preloader = document.getElementById('preloader');
// 		if( !preloader.classList.contains('done')){
// 			preloader.classList.add('done');
// 		}

// 	},1000);
// }
window.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('preloader');
		if( !preloader.classList.contains('done')){
			preloader.classList.add('done');
		}

	},1000);
}