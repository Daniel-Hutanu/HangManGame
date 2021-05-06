var otTitle = document.getElementById("textBox"),
		sSpan = document.getElementsByClassName('text').length,
		letters = document.getElementsByClassName('text'),
		whichLetter = 0,
		trailAmount = 7;
    
function RandomBlackColor() {
        var letters = '01234ABCD';
        var color = '#';
        for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 10)];
        }
        return color;
}
        
setInterval(function() {
    var rColor = RandomBlackColor();
        if (whichLetter < sSpan + trailAmount) {
            if (whichLetter > (trailAmount - 1)) {
                    letters[(whichLetter - trailAmount)].style.color = 'rgb(25, 0, 255)';
                }
            if (whichLetter < sSpan) {
                    letters[whichLetter].style.color = rColor;
                }
        whichLetter=Math.floor((Math.random() * 70));;
        } else if (whichLetter > sSpan + (trailAmount - 1)) whichLetter = 0;
}, 2)