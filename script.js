$(document).ready(function () {
	newGrid(16);
	$('.square').mouseenter(function() {
		$(this).css("background", "white");
	});
	$('.clear').click(function() {
		reset();
	});

	$(".normal").click(function() {
		setup();
		$(".square").unbind();
		$(".square").mouseenter(function() {
			$(this).css("background", "white");
		});
	});

	$(".random").click(function() {
		setup();
		$(".square").unbind();
		$(".square").mouseenter(function() {
			$(this).css("background", randomColor());
		});
	});
	/*$(".opacity").click(function() {
		setup();
		$(".square").unbind();
		$(".square").mouseenter(function() {
			reduceOpacity($(this));
		})
	});*/
	/*$(".trail").click(function () {
		setup();
		$(".square").unbind();
		$(".square").hover(function() {
			$(this).css("opacity", 0);
		}, function () {
			$(this).fadeTo('fast', 1);
		});
	});*/
});

function newGrid(n) {
	$(".grid").width(screen.height * 0.7);
	$(".grid").css("float", "center");

	var size = screen.height * 0.7;
	var boxSize = size/n - 2;//grid/numRows - borderSize*2
	var grid = $(".grid").html("");

	for (var j = 0; j < n; j++) {
		for (var i = 0; i < n; i++) {
			grid.append( $("<div></div>").addClass("square").height(boxSize).width(boxSize) );
		}
		grid.append($("<div></div>").css("clear", "both"));
	}
}

function setup() {
	var rows = prompt("Enter number of rows: ");
	newGrid(rows);
	reset();
}

function reset() {
	$(".square").css("background", "#34495e").css('opacity', '1');
}

/*function reduceOpacity(elem) {
	var opacity = elem.css('opacity');
	var nextOpacity = opacity - 0.1
	if (nextOpacity > 0) { elem.css('opacity', nextOpacity); }
	else { elem.css('opacity', '0'); }
}*/

function randomColor() {
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);

	return "#" + red.toHex() + green.toHex() + blue.toHex();
}

Number.prototype.toHex = function() {
	if (this < 16) { return '0' + this.toString(16); }
	return this.toString(16);
}