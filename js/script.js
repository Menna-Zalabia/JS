//Task-1

//function-1

// function printHelloWorld(){
//     document.writeln("Hello World")
//     alert("Hello World")
//     console.log("Hello World")
// }
// printHelloWorld()

//function-2

// function checkLeapYear(year) {
//     (year%4==0 &&(year%100!=0 || year%400==0))?console.log(`${year } is Leap Year`):console.log(`${year } is Not Leap Year`);
// }
// let year = +prompt("Please,Enter the year to check if it is a Leap or Not : ");
// checkLeapYear(year);

// function-3

// function multiplyFive(number){
//     return number%5==0
// }
// let number = +prompt("please,Enter The Number  : ")
// console.log(multiplyFive(number))

// End Task-1

// Task-2

const button = document.getElementById("generateRandomNumber");
const display = document.getElementById("randomNumber");
function updateRandomNumber(){
    display.innerHTML = Math.floor(Math.random() * (1000 - 100)) + 100;
}
button.onclick=updateRandomNumber;

// End Task-2
