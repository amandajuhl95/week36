/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var container = document.getElementById("container");
container.style.width = "226px";
container.style.height = "274px";
container.style.border = "3px solid darkblue";
container.style.margin = "auto";

var t4List = document.getElementsByClassName("t4");
for (var i = 0; i < t4List.length; i++) {

    t4List[i].style.border = "1px solid black";
    t4List[i].style.height = "48px";
    t4List[i].style.marginLeft = "3px";
    t4List[i].style.marginTop = "3px";
    t4List[i].style.display = "inline-block";
    t4List[i].style.textAlign = "center";
    t4List[i].style.lineHeight = "48px";
    t4List[i].style.width = "219px";
}

var t1List = document.getElementsByClassName("t1");
for (var i = 0; i < t1List.length; i++) {
    t1List[i].style.border = "1px solid black";
    t1List[i].style.height = "48px";
    t1List[i].style.marginLeft = "3px";
    t1List[i].style.marginTop = "3px";
    t1List[i].style.display = "inline-block";
    t1List[i].style.textAlign = "center";
    t1List[i].style.lineHeight = "48px";
    t1List[i].style.width = "48px";
}

document.getElementById("buttons").onclick = display;
function display(event)
{
    var number = event.target.innerText;
    var calcDisplay = document.getElementById("display");
    var lastNumber = calcDisplay.innerText.slice(-1);
    if (number === "+" || number === "-" || number === "*" || number === "/" || number === ".")
    {
        if (lastNumber !== "+" && lastNumber !== "-" && lastNumber !== "*" && lastNumber !== "/" && lastNumber !== ".")
        {
            calcDisplay.innerText = calcDisplay.innerText + number;
        }

    } else {
        calcDisplay.innerText = calcDisplay.innerText + number;
    }
}

document.getElementById("calculate").onclick = calculate;
function calculate(event)
{
    event.stopPropagation();
    var calcDisplay = document.getElementById("display");
    var equation = eval(calcDisplay.innerText);
    calcDisplay.innerText = equation;
}

