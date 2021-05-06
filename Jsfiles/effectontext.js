var otTitle = document.getElementById("textBox"),
		sSpan = document.getElementsByClassName('text').length,
		letters = document.getElementsByClassName('text'),
		whichLetter = 0,
		trailAmount = 7;

function RandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

setInterval(function() {
	var rColor = RandomColor();
	if (whichLetter < sSpan + trailAmount) {
		if (whichLetter > (trailAmount - 1)) {
			letters[(whichLetter - trailAmount)].style.color = 'rgb(218, 187, 187)';
		}
		if (whichLetter < sSpan) {
			letters[whichLetter].style.color = rColor;
		}
		whichLetter=Math.floor((Math.random() * 31));;
	} else if (whichLetter > sSpan + (trailAmount - 1)) whichLetter = 0;
}, 25)