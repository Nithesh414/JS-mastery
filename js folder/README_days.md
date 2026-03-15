# 📅 Day 2 --- JavaScript Variables and Operators

This repository documents my **JavaScript learning journey**.\
Today's focus is on **Variables and Operators**, which form the
foundation of JavaScript programming.

------------------------------------------------------------------------

# 🔹 Variables in JavaScript

## What is a Variable?

A **variable** is a container used to store data values.

``` javascript
let name = "Nithesh";
```

Here:

-   `name` → variable\
-   `"Nithesh"` → value

Variables allow programs to **store, update, and manipulate data**.

------------------------------------------------------------------------

# 🔹 Types of Variable Declarations

JavaScript provides three ways to declare variables.

    var
    let
    const

------------------------------------------------------------------------

## 1️⃣ var

``` javascript
var age = 20;
```

Characteristics:

-   Function scoped
-   Can be redeclared
-   Can be updated
-   Hoisted

Example:

``` javascript
var x = 10;
var x = 20;
```

------------------------------------------------------------------------

## 2️⃣ let

``` javascript
let score = 50;
```

Characteristics:

-   Block scoped
-   Cannot be redeclared in the same scope
-   Can be updated

Example:

``` javascript
let score = 50;
score = 70;
```

------------------------------------------------------------------------

## 3️⃣ const

``` javascript
const PI = 3.14;
```

Characteristics:

-   Block scoped
-   Cannot be redeclared
-   Cannot be updated
-   Must be initialized when declared

Example:

``` javascript
const country = "India";
```

------------------------------------------------------------------------

# 🔹 Difference Between var, let, and const

  Feature     var        let         const
  ----------- ---------- ----------- -----------
  Scope       Function   Block       Block
  Redeclare   Yes        No          No
  Update      Yes        Yes         No
  Hoisting    Yes        Yes (TDZ)   Yes (TDZ)

------------------------------------------------------------------------

# 🔹 Variable Naming Rules

1.  Must start with a **letter, \_ or \$**
2.  Cannot start with a number
3.  Cannot use reserved keywords
4.  Use meaningful names

Example:

    userName
    totalPrice
    productCount

------------------------------------------------------------------------

# 🔹 JavaScript Operators

Operators are used to **perform operations on variables and values**.

Example:

``` javascript
let result = 5 + 3;
```

------------------------------------------------------------------------

# 🔹 Arithmetic Operators

Used for mathematical calculations.

  Operator   Meaning
  ---------- ----------------
  \+         Addition
  \-         Subtraction
  \*         Multiplication
  /          Division
  \%         Modulus
  \*\*       Exponent

Example:

``` javascript
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
```

------------------------------------------------------------------------

# 🔹 Assignment Operators

Used to assign values to variables.

  Operator   Example
  ---------- ---------
  =          x = 10
  +=         x += 5
  -=         x -= 5
  \*=        x \*= 2
  /=         x /= 2

Example:

``` javascript
let score = 10;
score += 5;

console.log(score);
```

------------------------------------------------------------------------

# 🔹 Comparison Operators

Used to compare values and return **true or false**.

  Operator   Meaning
  ---------- ----------------------
  ==         Equal value
  ===        Equal value and type
  !=         Not equal
  \>         Greater than
  \<         Less than
  \>=        Greater or equal
  \<=        Less or equal

Example:

``` javascript
console.log(10 > 5);
console.log(10 === "10");
```

------------------------------------------------------------------------

# 🔹 Logical Operators

Used when working with conditions.

  Operator   Meaning
  ---------- ---------
  &&         AND
  \|\|       OR
  !          NOT

Example:

``` javascript
let age = 20;
console.log(age > 18 && age < 30);
```

------------------------------------------------------------------------

# 🔹 Increment and Decrement Operators

Used to increase or decrease a value by **1**.

  Operator   Meaning
  ---------- -----------
  ++         Increment
  --         Decrement

Example:

``` javascript
let x = 5;
x++;
console.log(x);
```

------------------------------------------------------------------------

# 🔹 Operator Precedence

JavaScript follows mathematical order of operations.

Example:

``` javascript
let result = 10 + 5 * 2;
console.log(result);
```

Output:

    20

------------------------------------------------------------------------

# 🔹 Example Program

``` javascript
let price = 100;
let quantity = 3;

let total = price * quantity;

console.log("Total price is:", total);
```

Output:

    Total price is: 300

------------------------------------------------------------------------

# 🎯 Key Concepts Learned

-   JavaScript variables
-   `var`, `let`, and `const`
-   Variable naming rules
-   Arithmetic operators
-   Assignment operators
-   Comparison operators
-   Logical operators
-   Increment and decrement
-   Operator precedence

------------------------------------------------------------------------

# 🚀 Next Learning Topics

    Conditional Statements
    Loops
    Functions
    Arrays
    Objects
    DOM Manipulation

⭐ Goal: **Build strong JavaScript fundamentals by practicing daily.**


## 📅 Day 3 — Conditional Logic, Debugging & Mini Project
📌 Overview

Today’s learning focused on decision making in JavaScript, understanding how programs choose different actions based on conditions, and improving skills by debugging code and building a mini project.

# 1️⃣ Conditional Logic in JavaScript

Conditional statements allow programs to execute different code depending on conditions.

```Basic Syntax
let age = 18

if(age >= 18){
console.log("Eligible to vote")
}
else{
console.log("Not eligible")
}
Types of Conditional Statements
if

Runs code only when condition is true.

if(score > 50){
console.log("Pass")
}
if...else

Chooses between two possible outcomes.

let number = 10

if(number % 2 === 0){
console.log("Even")
}
else{
console.log("Odd")
}
if...else if...else

Used when multiple conditions exist.

let marks = 85

if(marks >= 90){
console.log("Grade A")
}
else if(marks >= 70){
console.log("Grade B")
}
else{
console.log("Grade C")
}
```
# 2️⃣ Debugging JavaScript Code

Debugging means finding and fixing errors in code.

Common JavaScript Errors
1. Syntax Error

Occurs when JavaScript syntax is incorrect.

Example:
```
if(true
console.log("Hello")

Problem → Missing closing parenthesis.

2. Reference Error

Occurs when a variable is not defined.

console.log(age)
```
If age was never declared, JavaScript throws an error.

# 3. Logical Error

The program runs but produces wrong output.

Example:
```
let price = 100
let quantity = 2

let total = price + quantity

Correct calculation should be:

let total = price * quantity
Useful Debugging Method

Using console.log() to inspect values.

let a = 10
let b = 20

console.log(a)
console.log(b)
```
This helps track where the issue occurs.

# 3️⃣ Mini Project — Password Validation

A simple project to validate password length in real time.

Features

User enters password

System checks password length

Displays validation message

Example Logic
function validate(){

if(password.value.length < 5){
message.innerText = "Password must be at least 5 characters"
}
else{
message.innerText = "Password is valid"
}

}
Concepts Used

This project combines multiple JavaScript concepts:

Variables

DOM selection

Event handling (oninput)

Conditional logic

Real-time validation

🎯 Learning Outcome

After completing Day 3, the following skills were practiced:

Writing conditional statements

Understanding program decision flow

Identifying and fixing coding errors

Building a small interactive JavaScript project
-------------------------------------------------------
## 📅 Day 4 — JavaScript Functions & Calculator Project
# 📌 Overview
-------------------------------------------------
Today’s learning focused on JavaScript Functions, which are reusable blocks of code used to perform specific tasks.
Functions help make programs organized, reusable, and easier to maintain.

🧠 Topics Covered
# 1️⃣ What is a Function

A function is a block of code designed to perform a specific task.

Instead of repeating code many times, we create a function and call it whenever needed.

```Example:

function greet(){
console.log("Hello JavaScript")
}

greet()
```
Output:

Hello JavaScript
# 2️⃣ Function Parameters

Functions can receive values called parameters.

```Example:

function greet(name){
console.log("Hello " + name)
}

greet("Nithesh")
```
Output:

Hello Nithesh

Parameters allow functions to work with different inputs.

# 3️⃣ Function with Multiple Parameters

Functions can accept multiple values.

```Example:

function add(a, b){
console.log(a + b)
}

add(5,3)
```
Output:

8
# 4️⃣ Return Statement

The return statement sends a value back from the function.

```Example:

function multiply(a, b){
return a * b
}

let result = multiply(4,5)

console.log(result)
```
Output:

20
# 5️⃣ Function Expression

Functions can also be stored inside variables.

```Example:

let greet = function(){
console.log("Hello")
}
```
greet()
# 6️⃣ Arrow Functions

Arrow functions are a modern and shorter syntax for writing functions.

```Example:

const add = (a,b) => {
return a + b
}
```
Short version:
```
const add = (a,b) => a + b
```
# 7️⃣ Function Scope

Variables declared inside a function are local to that function.

```Example:

function test(){
let a = 10
}

console.log(a)
```
Output:

ReferenceError

Because the variable exists only inside the function.

## 💻 Mini Project — Simple Calculator

A simple calculator was built using JavaScript functions.

Features

User enters two numbers

User selects an operation

Result is displayed instantly

Operations Implemented
Addition
Subtraction
Multiplication
Division
```Example Logic
function calculate(a,b,operation){

if(operation === "+"){
return a + b
}

if(operation === "-"){
return a - b
}

if(operation === "*"){
return a * b
}

if(operation === "/"){
return a / b
}

}

```
## 🎯 Skills Practiced

During this session the following JavaScript skills were practiced:

Creating functions

Passing parameters

Returning values

Function expressions

Arrow functions

Function scope

DOM manipulation

Event handling

🚀 Learning Outcome

By completing Day 4, the following concepts are now understood:

Writing reusable functions

Using functions to organize code

Handling user input

Performing operations dynamically


## 📅 Day 5 — JavaScript Arrays
## 📌 Overview

Today’s learning focused on JavaScript Arrays, which allow us to store multiple values in a single variable.
Arrays are widely used when working with lists of data such as numbers, products, users, or tasks.

🧠 Topics Covered
# 1️⃣ Introduction to Arrays

An array is a data structure used to store multiple values in a single variable.

```Example:

let fruits = ["apple", "banana", "mango"]
```
Here the array contains three elements.

# 2️⃣ Accessing Array Elements

Array elements are accessed using index numbers.

```Example:

let fruits = ["apple", "banana", "mango"]

console.log(fruits[0])
console.log(fruits[1])
```
```Output

apple
banana
```
⚠️ Important rule:

Array index starts from 0
# 3️⃣ Updating Array Elements

We can modify elements using their index.

```Example:

let numbers = [10,20,30]

numbers[1] = 50

console.log(numbers)
```
```Output

[10,50,30]
```
# 4️⃣ Array Methods

JavaScript provides built-in methods to work with arrays.

push()

Adds an element to the end of the array.

```Example:

let numbers = [1,2,3]

numbers.push(4)

console.log(numbers)
```
```Output

[1,2,3,4]
```
pop()
Removes the last element.

numbers.pop()
shift()

Removes the first element.

numbers.shift()
unshift()

Adds an element to the beginning.

numbers.unshift(10)
# 5️⃣ Array Length

The length property returns the number of elements in an array.

```Example:

let numbers = [10,20,30]

console.log(numbers.length)
```
```Output

3
```
# 6️⃣ Looping Through Arrays

Arrays are commonly used with loops.

```Example:

let numbers = [10,20,30]

for(let i = 0; i < numbers.length; i++){
console.log(numbers[i])
}
```
```Output

10
20
30
```
# 7️⃣ Removing a Specific Element

To remove a specific value, we can use indexOf() and splice().

```Example:

let fruits = ["apple","banana","mango"]

let index = fruits.indexOf("banana")

if(index !== -1){
fruits.splice(index,1)
}

console.log(fruits)
```
```Output

["apple","mango"]
```
