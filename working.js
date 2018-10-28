var NoWinNoLoss;
var z=0;
var _1 = document.getElementById("1");
var _2 = document.getElementById("2");
var _3 = document.getElementById("3");
var _4 = document.getElementById("4");
var _5 = document.getElementById("5");
var _6 = document.getElementById("6");
var _7 = document.getElementById("7");
var _8 = document.getElementById("8");
var _9 = document.getElementById("9");
var w1 = document.getElementById("w1");
var l1 = document.getElementById("l1");
var w2 = document.getElementById("w2");
var l2 = document.getElementById("l2");
var _11,_22,_33,_44,_55,_66,_77,_88,_99;

function DivEnable(){
    _1.innerHTML = "";
    _2.innerHTML = "";
    _3.innerHTML = "";
    _4.innerHTML = "";
    _5.innerHTML = "";
    _6.innerHTML = "";
    _7.innerHTML = "";
    _8.innerHTML = "";
    _9.innerHTML = "";
    _1.disabled = false;
    _2.disabled = false;
    _3.disabled = false;
    _4.disabled = false;
    _5.disabled = false;
    _6.disabled = false;
    _7.disabled = false;
    _8.disabled = false;
    _9.disabled = false;
}

function DivDisable(i) {
    if(NoWinNoLoss == 0){
        i.disabled = true;
    }
}

DivEnable();

_1.onclick = function(){
    Click(_1);
}
_2.onclick = function(){
    Click(_2);
}
_3.onclick = function(){
    Click(_3);
}
_4.onclick = function(){
    Click(_4);
}
_5.onclick = function(){
    Click(_5);
}
_6.onclick = function(){
    Click(_6);
}
_7.onclick = function(){
    Click(_7);
}
_8.onclick = function(){
    Click(_8);
}
_9.onclick = function(){
    Click(_9);
}

function Click(i){
    
    NoWinNoLoss = 0;
    if(z == 0)
    {
        i.innerHTML = "X";
        z = 1;
    }
    else{
        i.innerHTML = "O";
        z = 0;
    }
    _11 = _1.innerHTML;
    _22 = _2.innerHTML;
    _33 = _3.innerHTML;
    _44 = _4.innerHTML;
    _55 = _5.innerHTML;
    _66 = _6.innerHTML;
    _77 = _7.innerHTML;
    _88 = _8.innerHTML;
    _99 = _9.innerHTML;
    if(z == 1){
        Winslosses(i,"X");
    }
    else{
        Winslosses(i,"O");
    }
}

function Winslosses(i,XorO){

    if(
        ((_11 == XorO)&&(_11==_22)&&(_22==_33))||
        ((_44 == XorO)&&(_44==_55)&&(_55==_66))||
        ((_77 == XorO)&&(_77==_88)&&(_88==_99))||
        ((_11 == XorO)&&(_11==_44)&&(_44==_77))||
        ((_22 == XorO)&&(_22==_55)&&(_55==_88))||
        ((_33 == XorO)&&(_33==_66)&&(_66==_99))||
        ((_11 == XorO)&&(_11==_55)&&(_55==_99))||
        ((_33 == XorO)&&(_33==_55)&&(_55==_77))
    ){  
        if(XorO == "X")
        {
            w1.innerHTML = Number(w1.innerHTML) + 1;
            l2.innerHTML = Number(l2.innerHTML) + 1;
            DivEnable();
            window.alert("***PLAYER-1 WON***");
            NoWinNoLoss = 1;
            z = 0;
        }
        if(XorO == "O")
        {
            w2.innerHTML = Number(w2.innerHTML) + 1;
            l1.innerHTML = Number(l1.innerHTML) + 1;
            DivEnable();
            window.alert("***PLAYER-2 WON***");
            NoWinNoLoss = 1;
            z = 1;
        }
    }
    
    if((_11 != "")&&(_22 != "")&&(_33 != "")&&
       (_44 != "")&&(_55 !="")&&(_66 != "")&&
       (_77 != "")&&(_88 != "")&&(_99 != "")&
       (_11 != "1")&&(_22 != "2")&&(_33 != "3")&&
       (_44 != "4")&&(_55 !="5")&&(_66 != "6")&&
       (_77 != "7")&&(_88 != "8")&&(_99 != "9")&&(NoWinNoLoss != 1)
      )
       {
           window.alert("***Match Draw***");
           DivEnable();
           NoWinNoLoss = 1;
       }

    DivDisable(i);
}

