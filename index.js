// Set the colors
var colors = ["#ff3333", "#ff6633", "#ff9933", "#ffcc33", "#ffff33", "#ccff33", "#99ff33", "#66ff33", "#33ff33", "#33ff66", "#33ff99", "#33ffcc", "#33ffff", "#33ccff", "#3399ff", "#3366ff", "#3333ff", "#6633ff", "#9933ff", "#cc33ff", "#ff33ff", "#ff33cc", "#ff3399", "#ff3366", "#ff3333"];

$(document).ready(function(){
	$('ltr').each(function(i){
    // Adds the attribute "count" to each "ltr" element. Feel free to move it to the main function. Do not forget the variable "i"
		$(this).attr('count', i);
	});
});

function backwards() {
	$('ltr').each(function(){
		var thisElement = $(this);
		var count = $(thisElement).attr('count');

		var myInterval = setInterval(function() {
			$(thisElement).attr('count', count++).css('color', colors[ count === colors.length ? count = 0 : count ]);
	    }, 20)
	});
}
function forwards() {
	$('ltr').each(function(){
		var thisElement = $(this);
		var count = $(thisElement).attr('count');

		var myInterval = setInterval(function() {
			$(thisElement).css('color', colors[ count <= 0 ? count = colors.length - 1 : count ]).attr('count', count--);
	    }, 20)
	});
}
