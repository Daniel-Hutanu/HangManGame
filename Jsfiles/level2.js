var L = document.getElementsByClassName("L");
var O = document.getElementsByClassName("O");
var N = document.getElementById("N");
var I = document.getElementById("I");
var C = document.getElementById("C");
var E = document.getElementById("E");
var BtnE = document.getElementById("BtnE");
var BtnL = document.getElementById("BtnL");
var BtnO = document.getElementById("BtnO");
var BtnN = document.getElementById("BtnN");
var BtnI = document.getElementById("BtnI");
var BtnC = document.getElementById("BtnC");
var i=0;
var a=0;

function showI(){
    I.style.opacity="1";
    BtnI.style.opacity="0.3";
    BtnI.style.pointerEvents="none";
}
function showO(){
    for(i=0; i<O.length; i++){
        O[i].style.opacity="1";
    }
    BtnO.style.opacity="0.3";
    BtnO.style.pointerEvents="none";
}
function showL(){
    for(i=0; i<L.length; i++){
        L[i].style.opacity="1";
    }
    BtnL.style.opacity="0.3";
    BtnL.style.pointerEvents="none";
}
function showN(){
    N.style.opacity="1";
    BtnN.style.opacity="0.3";
    BtnN.style.pointerEvents="none";
}
function showC(){
    C.style.opacity="1";
    BtnC.style.opacity="0.3";
    BtnC.style.pointerEvents="none";
}
function showE(){
    E.style.opacity="1";
    BtnE.style.opacity="0.3";
    BtnE.style.pointerEvents="none";
}
function win(){
    a++;
    if(a==6){
        document.getElementById("win").style.display="block";
        document.getElementById("hangman").style.display="none";
    }
}