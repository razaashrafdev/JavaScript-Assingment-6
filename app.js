// Answer - 1

console.log("Answer- 1")
let emptyArray = [[]];

console.log(emptyArray);


// Answer - 2

console.log("Answer- 2")
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

console.log("Multidimensional Array (Matrix):");
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
}


// Answer - 3

console.log("Answer- 3")
for (let i = 1; i < 11; i++) {
    console.log(i)
}

// Answer - 4

console.log("Answer- 4")
let number = parseInt(prompt("Enter a number to show its multiplication table"));

let length = parseInt(prompt("Enter length of multiplication table"));

if (isNaN(number) || isNaN(length)) {
    alert("Please enter valid numbers!");
} else {
    let result = `Multiplication table of ${number}\nLength ${length}\n\n`;
    
    for (let i = 1; i <= length; i++) {
        result += `${number} x ${i} = ${number * i}\n`;
    }

    
    console.log(result);
}

// Answer - 5

console.log("Answer- 5")
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("List of fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("\nElements with Index:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Element at index ${i} is ${fruits[i]}`);
}

// Answer - 6

document.write("<h1>Answer- 6</h1>")
let counting = "";
let reverseCounting = "";
let even = "";
let odd = "";
let series = "";

for (let i = 1; i <= 15; i++) {
    counting += i + ", ";
}

for (let i = 10; i >= 1; i--) {
    reverseCounting += i + ", ";
}

for (let i = 0; i <= 20; i += 2) {
    even += i + ", ";
}

for (let i = 1; i <= 19; i += 2) {
    odd += i + ", ";
}

for (let i = 2; i <= 20; i += 2) {
    series += i + "k, ";
}

document.write("<h3>Counting:</h3>");
document.write(counting.slice(0, -2));

document.write("<h3>Reverse counting:</h3>");
document.write(reverseCounting.slice(0, -2));

document.write("<h3>Even:</h3>");
document.write(even.slice(0, -2));

document.write("<h3>Odd:</h3>");
document.write(odd.slice(0, -2));

document.write("<h3>Series:</h3>");
document.write(series.slice(0, -2));

// Answer - 7

let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("Welcome to ABC Bakery! What do you want to order sir/madam?").toLowerCase();

let index = bakeryItems.indexOf(userInput);

if (index !== -1) {
    alert(`${userInput} is available at index ${index} in our bakery`);
} else {
    alert(`We are sorry. ${userInput} is not available in our bakery`);
}

// Answer - 8

document.write("<h1>Answer- 8</h1>")
let A = [24, 53, 78, 91, 12];

let largestNumber = Math.max(...A);

document.write("<h3>Array items: " + A.join(", ") + "</h3>");
document.write("<h3>The largest number is " + largestNumber + "</h3>");

// Answer - 9

document.write("<h1>Answer- 9</h1>")
let B = [24, 53, 78, 91, 12];

let smallestNumber = Math.min(...B);

document.write("<h3>Array items: " + B.join(", ") + "</h3>");
document.write("<h3>The smallest number is " + smallestNumber + "</h3>");


// Answer - 10

document.write("<h1>Answer- 10</h1>")
let multiplesOfFive = [];

for (let i = 5; i <= 100; i += 5) {
    multiplesOfFive.push(i);
}

document.write("<h3>" + multiplesOfFive.join(", ") + "</h3>");