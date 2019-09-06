/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Event Bubbling and event arguments

var divlist = document.getElementsByClassName("mydiv");
for (var i = 0; i < divlist.length; i++) {
    divlist[i].style.width = "25px";
    divlist[i].style.height = "25px";
    divlist[i].style.backgroundColor = "yellow";
    divlist[i].style.margin = "1px";
}

//a
document.getElementById("x").onclick = hiFrom;
document.getElementById("y").onclick = hiFrom;

function hiFrom(event)
{
    var id = event.target.id;
    document.getElementById("p").innerHTML = "Hi from " + id;
    console.log("Hi from " + id);
}

//b og c
document.getElementById("outer").onclick = outerDiv;
function outerDiv(event)
{
    console.log('this----->' + this.id);
    console.log('target----->' + event.target.id);
    document.getElementById("txt").innerText = "target------> " + event.target.id + " this------> " + this.id;
}



