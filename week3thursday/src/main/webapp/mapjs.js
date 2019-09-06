/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Using map to create list’s (ul’s, tables etc.)

var names = ["Lars", "Peter", "Jan", "Ian"];

//a
var listArray = names.map(name => "<li>" + name + "</li>");
var lis = listArray.join("\n");

document.getElementById("ul").innerHTML = lis;

//b
document.getElementById("btn").onclick = addNameToList;
function addNameToList()
{
    var name = document.getElementById("newname").value;
    names.push(name);

    listArray = names.map(name => "<li>" + name + "</li>");
    lis = listArray.join("\n");

    document.getElementById("ul").innerHTML = lis;

}

//c
document.getElementById("rmvfirst").onclick = removeFirst;
document.getElementById("rmvlast").onclick = removeLast;
function removeFirst()
{
    names.shift();

    listArray = names.map(name => "<li>" + name + "</li>");
    lis = listArray.join("\n");

    document.getElementById("ul").innerHTML = lis;
}

function removeLast()
{
    names.pop();

    listArray = names.map(name => "<li>" + name + "</li>");
    lis = listArray.join("\n");

    document.getElementById("ul").innerHTML = lis;
}