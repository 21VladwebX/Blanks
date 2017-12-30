$(window).on('mousemove', function(e){
var w = $(window).width();
var h = $(window).height();

var offsetX = 0.5 - e.pageX / w;
var offsetY = 0.5 - e.pageY / h;

$(".paralax").each(function (i, elem) {// Метод each() служит для перебора всех єлементов и исполняет для кождого єлемента некую функцыю
	var offset = parseInt($(elem).data('offset'));//parseInt разбирает строку и возвращает целое число . Data() связывает произвольные данные с заданым элементом, или возвразает хранимые при данном элементе данные в виде объекта. Тоесть можно прикрепить какието данные к элементу, или вернуть данные, которые храняться в элементе.

	var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px";// translate3d одновременный сдвиг элемента по осям x, y, z.
	$(elem).css({
		'transform': translate

	})
})

})