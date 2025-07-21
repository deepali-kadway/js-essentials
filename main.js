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