function ok(){
                document.getElementById('block').style.display="none";
                document.getElementById("two").style.display="block";
                document.getElementById("block1").style.display="none";
                document.getElementById("three").style.display="block";
            }
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
            var i=0;
            function headap(){
                i++;
                line.style.marginRight= "-42px";
                if(i==1) head.style.display="block";
                if(i==2) body.style.display="block";
                if(i==3) hand1.style.display="block";
                if(i==4) hand2.style.display="block";
                if(i==5) leg1.style.display="block";
                if(i==6) leg2.style.display="block";
                if(i==7) eye1.style.display="block";
                if(i==8) eye2.style.display="block";
                if(i==9) smiley.style.display="block";
               if(i==10) document.getElementById("pierdut").style.display="block";
            }
