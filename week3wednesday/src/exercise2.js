

// 1 - Create a new JavaScript file and add these three functions

// Function Declaration - Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2;
}

//Callback example
var cb = function (n1, n2, callback) {
    return "Result from the two numbers: " + n1 + "+/-" + n2 + "=" + callback(n1, n2);
};

//2 What will this print?

// 1- It prints the result of 1 + 2 = 3
console.log(add(1, 2));

// 2- It represents the function add
console.log(add);

// 3- It will print the result of 1 + 2 = 3, because the function only accepts to parameters
console.log(add(1, 2, 3));

// 4- It prints NaN (not a number) because the parameter n2 is not defined.
console.log(add(1));

// 5- It prints the String, where n1 and n2 both are defined as 3 and adds the two together in callback
console.log(cb(3, 3, add));

// 6- It prints the String, where n1 is defined as 4 and n2 is defined as 3 and subtract the two from eachother in callback
console.log(cb(4, 3, sub));

// 7- It prints the typeerror: callback is not a function - the problem is that the brackets declare add as a function 
//console.log(cb(3, 3, add()));

// 8- The function add has the ability to distinguish between numbers and strings, therefor it prints the result "3hh" 
console.log(cb(3, "hh", add));


// 3 Error handling
//Rewrite the Callback function expression (cb) to make a check for all its 
//three required arguments, and throw an Error if any of the arguments do not match

var cb = function (n1, n2, callback) {

    try {
        if (typeof n1 !== "number" || typeof n2 !== "number" || typeof callback !== "function")
        {
            throw new Error("Whooops, this didn't work!");

        } else {
            return "Result from the two numbers: " + n1 + "+*-/" + n2 + "=" + callback(n1, n2);
        }
    } catch (e) {
        console.error(e.name + ': ' + e.message);
    }

};

// here it works with the new cb function, it shows the new error 
console.log(cb(3, 3, add()));

// 4 -  Write a mul(n1, n2) and use it as the callback for the cb function

function mul(n1, n2)
{
    return n1 * n2;
}

console.log(cb(2, 3, mul));

// 5 - Call cb, this time with an anonymous function that divides the first argument with the second

console.log(cb(1, 2, function (n1, n2) {
    return n1 / n2;
}));

// Callbacks (with map, filter and forEach)

// 1 - Declare a JavaScript array and initialize it with some names

var names = ["Jens", "Lone", "Gitte", "Klaus", "Janne", "Bo", "Jan"];
console.log(names);

// Use the filter method to create a new array with only names of length <=3.
const namesWith3 = names.filter(names => names.length <= 3);
console.log(namesWith3);

// 2 - Use map method and create the array with all names uppercased
const namesUpperCase = names.map(names => names.toUpperCase());
console.log(namesUpperCase);

// 3 - return a String with the HTML
var listArray = names.map(name => "<li>" + name + "</li>");
var lis = listArray.join("\n");
console.log(lis);

// - return a String in one line
var list = listArray.join();
console.log(list);

// 4 - create the car array
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

// Cars newer than 1999
const newerThan1999 = cars.filter(cars => cars.year > 1999);
console.log("Cars newer than 1999: ");
console.log(newerThan1999);

// All  Volvo’s
const allVolvo = cars.filter(cars => cars.make === 'Volvo');
console.log("All volvo: ");
console.log(allVolvo);

// All cars with a price below 5000
const priceBelow = cars.filter(cars => cars.price < 5000);
console.log("All cars with a price below 5000: ");
console.log(priceBelow);

// 4a - create, and return a string with valid SQL statements 
// to insert the data into a table with matching column names

var carArray = cars.map(car => "INSERT INTO cars (id, year, make, model, price) VALUES ("
            + car.id + " " + car.year + " " + car.make + " " + car.model + " " + car.price + ")");
var list = carArray.join("\n");
console.log(list);

// Asynchronous Callbacks

// 1 & 2 - In what order you would expect to see the outputs

var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};

// this is the order you will see the outputs:

// "aaaaaaaaaa"
// "dddddddddd"
// "ffffffffff"
// "eeeeeeeeee",1000
// "bbbbbbbbbb",2000 


// This and constructor functions 

// 1 - Add this code

function Person(name) {
    this.name = name;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);
    }, 2000);
}

Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: " + name);

// It is a constructor function. The Function() constructor expects any number of string arguments.

// 2 - Create a Person instance and rerun the example

var p = new Person("Karl Johan");  //Create an instance using the constructor function
console.log("I'm global: " + name);  // This still takes the name from the person created above "Kurt Wonnegut", because its the outer name

// 3 - Change your code to fix the problem, using both strategies given below.

function Person(name) {
    this.name = name;
    var self = this;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + self.name);
    }.bind(this), 2000);
}

var p = new Person("Gitte Gammelbæk");  //Create an instance using the constructor function
console.log("I'm global: " + name);


// 4 - Write, run and UNDERSTAND the example below

var greeter = function () {
    console.log(this.message);
};
var comp1 = {message: "Hello World"};
var comp2 = {message: "Hi"};

var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2);//And here another “this”
setTimeout(g1, 500);
setTimeout(g2, 1000);

// The bind() method creates a new function that, when called, 
// has its "this" keyword set to the provided value, with a given 
// sequence of arguments preceding any provided when the new function is called


// JavaScript Objects

// 1 - create an object with four properties

var myObj = {name: 'Sten', birthyear: 1995, hobby: 'Football', email: 'sten@hotmail.com'};
for (prop in myObj) {
    console.log(prop, myObj[prop]);
}

// This is how you delete a property from an object
delete myObj.email;
for (prop in myObj) {
    console.log(prop, myObj[prop]);
}

// This is how you add a property to an object
myObj.email = 'sten@gmail.dk';
for (prop in myObj) {
    console.log(prop, myObj[prop]);
}

// 2 - Create a Constructor function to create new Persons having

function Human(firstName, lastName, age)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    return {
        retrieveInfo: function () {
            return "Firstname: " + firstName + " Lastname: " + lastName + " Age: " + age;
        }
    };
}

var Hans = new Human("Hans", "Hansen", 24);
console.log(Hans.retrieveInfo());

// I havn't done the last part called "Reusable Modules with Closures" because it's to differcult for me.



























