var head = document.getElementById("head");
var eye1 = document.getElementById("eye1");
var eye2 = document.getElementById("eye2");
var body = document.getElementById("body");
var hand1 = document.getElementById("hand1");
var hand2 = document.getElementById("hand2");
var leg1 = document.getElementById("leg1");
var leg2 = document.getElementById("leg2");
var smiley = document.getElementById("smiley");
var line = document.getElementById("linestand");

var n=0;

function showman(){
    n++;
    line.style.marginRight= "-42px";
    if(n==1) head.style.display="block";
    if(n==2) body.style.display="block";
    if(n==3) hand1.style.display="block";
    if(n==4) hand2.style.display="block";
    if(n==5) leg1.style.display="block";
    if(n==6) leg2.style.display="block";
    if(n==7) eye1.style.display="block";
    if(n==8) eye2.style.display="block";
    if(n==9) smiley.style.display="block";
    if(n==10){
    document.getElementById("lose").style.display="block";
    document.getElementById("hangman").style.display="none";
   }
}
