/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Simple DOM manipulation and Event handling

//a
var divs = document.getElementsByTagName("div");

divs[0].style.backgroundColor = "red";
divs[1].style.backgroundColor = "yellow";
divs[2].style.backgroundColor = "green";

//b

document.getElementById("btn").onclick = changeColor;
function changeColor()
{
    document.getElementById("a").style.backgroundColor = "green";
    document.getElementById("b").style.backgroundColor = "red";
    document.getElementById("c").style.backgroundColor = "yellow";
}


