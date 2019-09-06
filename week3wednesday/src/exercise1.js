/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//a - Create the two arrays below, spelled exactly as they are given
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

//b - Create a new array called all, starting with the boys, ending with girls
var all = boys.concat(girls);
console.log(all);

//c 
//create a comma separated string 
console.log(all.join(', '));

//create a hyphen (-) separated string
console.log(all.join('-'));

//d - Add the names Lone and Gitte to the end of the array
all.push('Lone', 'Gitte');
console.log(all);

//e - Add the names Hans and Kurt to the start of the array
all.unshift('Hans', 'Kurt');
console.log(all);

//f - Remove the first name in the array (Hans)
all.shift();
console.log(all);

//g - Remove the last name from the array (Gitte)
all.pop();
console.log(all);

//h - Remove Ole and Janne from the middle of the array
all.splice(3, 2);
console.log(all);

//i - Reverse the all array, so that the girls come first
all.reverse();
console.log(all);

//j - Sort the array
all.sort();
console.log(all);

//k - Write a user-defined sort method
function compareNames(a, b) {
    var nameA = a.toUpperCase(); // ignore upper and lowercase
    var nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    return 0;
}

all.sort(compareNames);
console.log(all);

//l - Convert all the names in the array to uppercase
const allmap = all.map(x => x.toUpperCase());
console.log(allmap);

//m - Create a new array containing all the names that start with either “l” or “L”
const allfilter = all.filter(function (word)
{
    var name = word.toUpperCase();
    return name.startsWith('L');
});
console.log(allfilter);

