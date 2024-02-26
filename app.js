//  Chapter No 4
//  VARIABLE NAMES: LEGAL & ILLEGAL

//  1. Declare 3 variables in one statement.

var firstName = 'Muhammad', lastName = 'Sami', age = 19;
console.log(firstName, lastName, age)

//  2. Declare 5 legal & 5 illegal variable names.

// Legal variable name
var firstName = 'Muhammad', lastName = 'Sami', age = 19, Student = true, grade =console.log(firstName, lastName, age, Student, grade);

// Illegal variable namvar 1firstName , $lastName, _age, @Student,  #grade ;

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS ________var Document1 = ("<h2>Rules for Naming JS varibales</h2>var Document2 = ("Variable names can only contain, numbers, my_variable, my_Documentvar Document3 = ("Variables must begin with a $variable, first_Variable,  or _variable.var Document4 = ("Variable names are case sensitivevar Document5 = ("Variable names cannot be JavaScript keywordsdocument.write(Document1, Document2, Document3,Document4,Document5);

//  Chapter No 05
// Math Expression

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// Additiovar num1 = 5;
var num2 = 3;
var sum = num1 + num2;
document.write("The sum of 5 and 3 is: " + sum);

// Subtraction

var num1 = 5;
var num2 = 3;
var difference = num1 - num2;
document.write("The difference of 5 and 3 is: " + difference);

// Multiplication

var num1 = 5;
var num2 = 3;
var product = num1 * num2;
document.write("The product of 5 and 3 is: " + product);

// Division

var num1 = 6;
var num2 = 3;
var division = num1 / num2;
document.write("The division of 5 and 3 is: " + division);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// . Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0”.



var num;

document.write("Value after variable declaration is: " + num);

num = 5;
document.write("Initial value: " + num);

num++;
document.write("Value after increment is: " + num);

num += 7;
document.write("Value after addition is: " + num);

num--;
document.write("Value after decrement is: " + num);

var remainder = num % 3;
document.write("The remainder is: " + remainder);


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.


var ticketPrice = 600;
var numTickets = prompt("Enter the number of tickets you want to buy:");

numTickets = Number(numTickets);
var totalCost = ticketPrice * numTickets;

setTimeout(function() {
document.write("<br/>The cost of buying " + numTickets + " tickets to a movie is: " + totalCost);}, 5000);



