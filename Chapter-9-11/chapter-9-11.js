// chapter 9-11 USER INPUT & CONDITIONAL STATEMENT

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var cityName = prompt("Enter city name: ");
if(cityName.toLowerCase()==="karachi")
{
    alert("Welcome to city of lights");
}
else 
{
    alert("welcome!");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender");
var message = gender.toLowerCase()==="male"?"Good Morning Sir":"Good Morning Ma'am";
alert(message);

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var signalColor = prompt("Enter signal color: ");
if(signalColor.toLowerCase() === "red")
{
    alert("Must Stop");
}
else if(signalColor.toLowerCase()=== "yellow")
{
    alert("Ready to start!");
}
else if(signalColor.toLowerCase() === "green")
{
    alert("Move Now!");
}


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var remainingFuel = parseFloat(prompt("Enter your remaining fuel in liter"));
console.log(remainingFuel<=0.25);
if(remainingFuel<=0.25)
{
    alert("Please refill the fuel in your car");
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}  //Output Generated.

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} // Output not generate because condition is false.

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
} // This condition is false
if (c === 13){
alert("condition 2 is true");
} // This condition will be true 
if (++c < 14){
alert("condition 3 is true");
} // This condition is false
if(c === 14){
alert("condition 4 is true");
} // this condition is true

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
} // Condition true

if (true){
    alert("True");
    } // This condition runs
if (false){
alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
    } // Condition true

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var marks = [], remarks, grade;
var totalMarks = 300;
var sum=0;
for(var i=0;i<3;)
{
    var numbers = prompt("Enter marks of subject " + ++i);
    marks.push(numbers);
}

for(var i=0;i<3;i++)
{
    sum+= parseInt(marks[i]);
}

var percentage = (sum/totalMarks)*100;

if(percentage>=80)
{
    grade = "A-One";
    remarks = "Excellent";
}
else if(percentage>=70)
{
    grade = "A";
    remarks = "Good";
}
else if(percentage>=60)
{
    grade = "B";
    remarks = "You need to improve";
}
else if(percentage<60)
{
    grade = "Fail";
    remarks = "Sorry!";
}

document.write("<h1>Mark Sheet</h1>");
document.write("<br>Total Marks: "+totalMarks);
document.write("<br>Obtained Marks: "+sum);
document.write("<br>Percentage: "+percentage+"%");
document.write("<br>Grade: "+grade);
document.write("<br>Remarks: "+remarks);



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNum = 7;
var userInput = Number(prompt("Enter a number"));
if(userInput===secretNum)
{
    alert("Bingo! Correct answer.");
}
else if(userInput===++secretNum)
{
    alert("Close enough to the correct answer.");
}
else
{
    alert("Sorry! wrong answer, try again!");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var num = Number(prompt("Enter a number"));
if(num%3===0)
{
    alert("Number is divisible by 3");
}


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var inputNum = Number(prompt("Enter a number"));
if(inputNum%2===0)
{
    alert("Even Number");
}
else
{
    alert("Odd Number");
}


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = parseInt(prompt("Enter temperature."));
if(temp>40)
{
    alert("It is too hot outside.");
}
else if(temp>30)
{
    alert("The Weather today is Normal.");
}
else if(temp>20)
{
    alert("Today’s Weather is cool.");
}
else if(temp>10)
{
    alert("OMG! Today’s weather is so Cool.");

}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var firstNum = parseFloat(prompt("Enter first number"));
var secondNum = parseFloat(prompt("Enter second number"));
var operation = prompt("Enter operation +,-,x,/,%");
var ans;

switch(operation)
{
    case "+":
        ans = firstNum+secondNum;
    break;
    case "-":
        ans = firstNum-secondNum;
    break;
    case "x":
        ans = firstNum*secondNum;
    break;
    case "/":
        ans = firstNum/secondNum;
    break;
    case "%":
        ans = firstNum%secondNum;
    break;
    default:
        ans = "Wrong Operation";
}

alert(ans);