var O = document.getElementsByClassName("O");
var C = document.getElementById("C");
var M = document.getElementById("M");
var T = document.getElementById("T");
var I = document.getElementById("I");
var V = document.getElementById("V");
var A = document.getElementById("A");

var BtnO = document.getElementById("BtnO");
var BtnC = document.getElementById("BtnC");
var BtnM = document.getElementById("BtnM");
var BtnT = document.getElementById("BtnT");
var BtnI = document.getElementById("BtnI");
var BtnV = document.getElementById("BtnV");
var BtnA = document.getElementById("BtnA");
var a=0;

function showO(){
    for(i=0; i<O.length; i++){
        O[i].style.opacity="1";
    }
    BtnO.style.opacity="0.3";
    BtnO.style.pointerEvents="none";
}
function showC(){
    C.style.opacity="1";
    BtnC.style.opacity="0.3";
    BtnC.style.pointerEvents="none";
}
function showM(){
    M.style.opacity="1";
    BtnM.style.opacity="0.3";
    BtnM.style.pointerEvents="none";
}
function showT(){
    T.style.opacity="1";
    BtnT.style.opacity="0.3";
    BtnT.style.pointerEvents="none";
}
function showI(){
    I.style.opacity="1";
    BtnI.style.opacity="0.3";
    BtnI.style.pointerEvents="none";
}
function showV(){
    V.style.opacity="1";
    BtnV.style.opacity="0.3";
    BtnV.style.pointerEvents="none";
}
function showA(){
    A.style.opacity="1";
    BtnA.style.opacity="0.3";
    BtnA.style.pointerEvents="none";
}

function win(){
    a++;
    if(a==7){
        document.getElementById("win").style.display="block";
        document.getElementById("hangman").style.display="none";
    }
}
