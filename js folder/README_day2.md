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
