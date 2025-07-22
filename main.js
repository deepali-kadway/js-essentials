  //Single line comment
        /* Multi line comment
        */
       //Primitive Data Types
       //1. String
       var firstname = "John"
       console.log("FirstName: " + firstname) 
       //2. Number
       var age = 30
       console.log("Age: " + age)
       //3.Booleans
       var isAdult= true
        console.log("Adult: " + isAdult);
        //4 Empty Data types
        //i. null: declares a variable but assigns it an empty value
        var emptyVariable = null
        console.log("Null State: " + emptyVariable);
        //ii. Undefined: declared a varible but have not assigned a value
        var undefinedVariable = undefined
        console.log("Undefined State: " + undefinedVariable);

        //Object data types: collection of different data types. Defined using {}
        var person = {
            firstname: "Jane",
            lastname: "Doe",
            age: 30,
            isAdult: true,
        }
        console.log(person);
        
        //Array Object []: zero indexed list of items
        var languages = ["Javascript", "Python", "Java"]
        console.log(languages);
        
        //Functin data type: block of code that performs a specific task
        var date = Date()
        console.log("Date: " + date);

        //Arithmetic operators: +, -, *, %, /
        var x = 10
        var y = 15

        console.log("Addition: ", x+y)
        console.log("Subtraction: ", x-y)
        console.log("Multiplication: ", x*y)
        console.log("Division: ", x/y)
        console.log("Modulo: ", x%y)
        //Increment Operator (++): increases the value of variable by 1
        console.log("Increment x: ", x++)
        console.log("After increment: ", x)
        console.log("Increment x again: ", ++x)
        //Decrement Operator (--): decreases the value of variable by 1
        console.log("Decrement y: ", y--)
        console.log("After Decrement: ", y)
        console.log("Decrement y again", --y)

        //Compount Assignment Operators: +, -, *, /, %
        var t = 9
        var p = 11
        var r = 3
        var g = 5
        console.log("+=: ", t+=p) //t = t+p -> 20
        console.log("-= ", p-t); //p = p-t => -9, as t was equal to 20 from the previous assignment
        console.log("*=: ", (r*=g)) //r = 15
        console.log("/=: ", (r/=g)); //r = 3, 15/5 = 3
        console.log("%=:", (t%=r)); //t=20, r=3; t = t%r => 3
        
//Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
//!: not operator
//!=: not equal to
//==: equal to
//===: equal to and type

var num = 10
var str = "10"
var num2 = 20
console.log("Is num equal to str? ", num == str); //true, value is same
console.log("Is num strictly equal to str? ", num === str); //false, different types
console.log("Is num not equal to str? ", num != str); //false, value is same
console.log("Is num strictly not equal to str? ", num !== str); //true, different types
console.log("Is num greater than str? ", num > str); //false, value is same
console.log("Is num less than str? ", num < str); //false, value is same
console.log("Is num greater than or equal to str? ", num >= str); //true, value is same
console.log("Is num less than or equal to str? ", num <= str); //true, value is same

//Logical Operators: &&, ||, !
//&&: and operator
//||: or operator
//!: not operator

console.log("&&: ", num == str && num === str); //false, one condition is false
console.log("||: ", num2 > num || num2 < str); //true, one condition is true and second is false
console.log("!: ", num == str && !(num == num2)); //true, first condition is true, second is false

//String Manupulation
var firstname = "John"
var lastname = "Doe"

// string concatenation - joining two or more strings together
var fullname = firstname + " " + lastname
console.log("Full Name: " + fullname);

// using template literals
var fullname2 = `${firstname}`
console.log("Full Name 2 " + fullname2 + " " + lastname);

// using .concat method
var fullname3 = firstname.concat(" ", lastname)
console.log("Full Name 3: " + fullname3);

// string methods (function) & peroperties (variables)
//1. length: returns the length of the string
// strings are zero indexed like arrays 
console.log("Firstname Length: " + firstname.length); // 4

//2. Uppercase: converts the string to uppercase
console.log("Uppercase Firstname: " + firstname.toUpperCase()); // JOHN

//3. indexOf: returns the index of the first occurrence of a substring
console.log("Index of 'o' in Firstname: " + firstname.indexOf("o")); // 1

//4. charAt: returns the character at the specified index
console.log("Character at index 1 in Firstname: " + firstname.charAt(1)); // o

//Arrays: zero indexed list of items
// Creating an array:
var cars = ["Toyota", "Honda", "Ford", "BMW"];
console.log(cars);

//Array functions:
var fruit = Array("Apple", "Banana", "Cherry");
console.log(fruit);

//Accessing array elements:
console.log("First car: " + cars[0]); // Toyota

// Assigning a new value to an array element:
cars[0] = "Lexus"
console.log("Updated First car: ", cars); // Lexus

// Array methods (functions) & properties (variables):
//1. length: returns the length of the array
console.log("Number of cars: " + cars.length); // 4
//2. push: adds an element to the end of the array
cars.push("Mercedes");
console.log("After push: ", cars); // ["Lexus", "Honda", "Ford", "BMW", "Mercedes"]
//3. unshift: adds an element to the beginning of the array
cars.unshift("Audi");
console.log("After unshift: ", cars); // ["Audi", "Lexus", "Honda", "Ford", "BMW", "Mercedes"]
//4. pop: removes the last element of the array
cars.pop();
console.log("After pop: ", cars); // ["Audi", "Lexus", "Honda", "Ford", "BMW"]
//5. shift: removes the first element of the array
cars.shift();
console.log("After shift: ", cars); // ["Lexus", "Honda", "Ford", "BMW"]
//6. sort: sorts the array in ascending order
cars.sort();
console.log("After sort: ", cars); // ["Audi", "BMW", "Ford", "Honda", "Lexus"]
//7. reverse: reverses the order of the array
cars.reverse();
console.log("After reverse: ", cars); // ["Lexus", "Honda", "Ford", "BMW", "Audi"]
//8. slice: returns a copied portion of the array
var newCars = cars.slice(1, 2); // index 1 to index 2 (not inclusive)
console.log("After slice: ", cars); // ["Lexus", "BMW", "Audi"]
//9a. slice: returns a shallow copy of a portion of an array
//splice(startIndex, deleteCount, item1, item2, ...): modifies the original array
cars.splice(1,0, "Tesla", "Nissan"); // at index 1, delete 0 items and add Tesla and Nissan
console.log("After splice: ", cars); // ["Lexus", "Tesla", "Nissan", "Honda", "Ford", "BMW", "Audi"]
//9b. splice: remove elements from an array
cars.splice(3,2);
console.log(("Splice Remove: ", cars)); // ["Lexus", "Tesla", "Nissan", "Audi"]

var numbers = [4, 9, 16, 25]
//10. Map: creates a new array with results from calling a function for every item within the current array
var sqrnumbers = numbers.map(Math.sqrt)
console.log("Square Root of Numbers: ", sqrnumbers); // [2, 3, 4, 5]

//2d arrays
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log("2D Array: ", matrix);
//Accessing elements in a 2D array
console.log("Element at row 1, column 2: ", matrix[1][2]); // 6

//Functions: block of code that performs a specific task
//Syntax: funtion functionName(parameters) { code }
//Parameters are variables that are used in the function definition
// return keyword can be used to return a value from the function

//Defining a function required the function keyword
function sum(a,b){
  var result = a + b;
  return result;  // returns the result of the addition
}
//Calling a function: using the function name followed by parentheses
var total = sum(5, 10);
console.log("Total: " + total); // Total: 15
