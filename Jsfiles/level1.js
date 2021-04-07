var P = document.getElementsByClassName("P");
var L = document.getElementsByClassName("L");
var U = document.getElementsByClassName("U");
var T = document.getElementsByClassName("T");
var O = document.getElementsByClassName("O");
var N = document.getElementsByClassName("N");
var I = document.getElementsByClassName("I");
var BtnP = document.getElementById("BtnP");
var BtnL = document.getElementById("BtnL");
var BtnU = document.getElementById("BtnU");
var BtnT = document.getElementById("BtnT");
var BtnO = document.getElementById("BtnO");
var BtnN = document.getElementById("BtnN");
var BtnI = document.getElementById("BtnI");
var i=0;
var a=0;

function showL(){
    for(i=0; i<L.length; i++){
        L[i].style.opacity="1";
    }
    BtnL.style.opacity="0.3";
    BtnL.style.pointerEvents="none";
}
function showU(){
    for(i=0; i<U.length; i++){
        U[i].style.opacity="1";
    }
    BtnU.style.opacity="0.3";
    BtnU.style.pointerEvents="none";
}
function showT(){
    for(i=0; i<T.length; i++){
        T[i].style.opacity="1";
    }
    BtnT.style.opacity="0.3";
    BtnT.style.pointerEvents="none";
}
function showO(){
    O.style.opacity="1";
    BtnO.style.opacity="0.3";
    BtnO.style.pointerEvents="none";
}
function showN(){
    N.style.opacity="1";
    BtnN.style.opacity="0.3";
    BtnN.style.pointerEvents="none";
}
function showI(){
    I.style.opacity="1";
    BtnI.style.opacity="0.3";
    BtnI.style.pointerEvents="none";
}
function win(){
    a++;
    if(a==6){
        document.getElementsByClassName("win").style.display="block";
        document.getElementsByClassName("hangman").style.display="none";
    }
}