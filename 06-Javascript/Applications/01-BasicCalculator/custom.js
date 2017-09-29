window.addEventListener("load", init)

var fnum;
var snum;
var result = 0;
function init(){
    fnum = document.getElementById("box_1");
    snum = document.getElementById("box_2");
    /*console.log(fnum);*/
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("sub").addEventListener("click", sub);
    document.getElementById("div").addEventListener("click", div);
    document.getElementById("mul").addEventListener("click", mul);
}

function add(){
    result = parseInt(fnum.value) + parseInt(snum.value);
    document.getElementById("output").innerHTML = result;
}

function sub(){
    result = parseInt(fnum.value) - parseInt(snum.value);
    document.getElementById("output").innerHTML = result;
}

function div(){
    result = parseInt(fnum.value) / parseInt(snum.value);
    document.getElementById("output").innerHTML = result;
}

function mul(){
    result = parseInt(fnum.value) * parseInt(snum.value);
    document.getElementById("output").innerHTML = result;
}