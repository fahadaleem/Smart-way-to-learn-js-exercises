// Chapter 5 MATH EXPRESSIONS

// 1.  Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var firstNum, secondNum, result;
firstNum = prompt("Enter First Number");
secondNum = prompt("Enter Second Number");
result = Number(firstNum)+Number(secondNum);
document.write("Sum of "+firstNum+" and "+secondNum+" is "+result);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// For Subtraction
firstNum = prompt("Enter First Number");
secondNum = prompt("Enter Second Number");
result = Number(firstNum)-Number(secondNum);
document.write("<br>Subtraction of "+firstNum+" and "+secondNum+" is "+result);

// For Multiplication
firstNum = prompt("Enter First Number");
secondNum = prompt("Enter Second Number");
result = Number(firstNum)*Number(secondNum);
document.write("<br>Multiplication of "+firstNum+" and "+secondNum+" is "+result);

// For Division
firstNum = prompt("Enter First Number");
secondNum = prompt("Enter Second Number");
result = Number(firstNum)/Number(secondNum);
document.write("<br>Division of "+firstNum+" and "+secondNum+" is "+result);


// For Modulus
firstNum = prompt("Enter First Number");
secondNum = prompt("Enter Second Number");
result = Number(firstNum)%Number(secondNum);
document.write("<br>Modulus of "+firstNum+" and "+secondNum+" is "+result);


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// MATH EXPRESSIONS | JAVASCRIPT
// Page 2 of 9
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.


var mathVar;
var str = "Value After ";
document.write(str+"variable declaration is "+mathVar);

mathVar = 5;
document.write("<br>Initial value: "+mathVar);

mathVar++;
document.write("<br>"+str+"increment is: "+mathVar);

mathVar+=7;
document.write("<br>"+str+"addition is: "+mathVar);
mathVar--;
document.write("<br>"+str+"decrement is: "+mathVar);
mathVar%=3;
document.write("<br> Remainder is: "+mathVar);


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:


var ticketPrice = 600;
var totalPrice = 600 *5;
document.write("<br>Total Cost to buy 5 tickets is "+totalPrice+"PKR");

// 5. Write a script to display multiplication table of any
// number in your browser.

var tableNum = prompt("Enter a number");
document.writeln("<br>Table Of "+tableNum);
for(var i = 1;i<=10;i++)
{
    var cal = tableNum * i;
    document.write("<br>"+tableNum+"x"+i+"="+cal);
}


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NN o C is NN o F”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NN o F is NN o C”.

var farh, celc;
// Celcius COnversion
celc = prompt("Enter tempereture in Celcius");
farh = (celc * (9/5))+32;
document.write("<br>"+celc+"oC is "+farh+"oF");
//Farhenheite Conversion
farh = prompt("Enter temperature in Farhenhiete");
celc = (farh-32) * (5/9);
document.write("<br>"+farh+"oF is "+celc+"oC");



// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser

var item1, item2, quantityItem1, quantityItem2, shippingCharges, totalCost;

item1 = 650;
quantityItem1 = 3;
item2 = 100;
quantityItem2 = 7;
shippingCharges = 100;
totalCost = (item1*quantityItem1)+(item2*quantityItem2)+shippingCharges;
document.write("<br><h1>Shopping Cart</h1>");
document.write("<br> Price of item 1 is "+item1);
document.write("<br> Quantity of item 1 is "+quantityItem1);
document.write("<br> Price of item 2 is  "+item2)
document.write("<br> Quantity of item 2 is "+quantityItem2);
document.write("<br>Shipping Charges is "+shippingCharges);
document.write("<br><br> Total cost of your order is "+totalCost);


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks, obtMarks, percentage;
totalMarks = prompt("Enter total Marks");
obtMarks = prompt("Enter Obtained Marks");
percentage = (obtMarks/totalMarks)*100;
document.write("<br><h1>Mark Sheet</h1>")
document.write("<br>Total Marks: "+totalMarks);
document.write("<br>Obtained Marks: "+obtMarks);
document.write("<br>Percentage: "+percentage);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var totalCurrency, dollarRate, riyal;
dollarRate = 104.80;
riyal = 28;
totalCurrency = (10*dollarRate)+(25*riyal);
document.write("<br><h1>Currency in PKR</h1>");
document.write("<br>Total Currency in PKR: "+totalCurrency);


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var num ;
num = 10;
num = (num+5 *10)/2;
document.write("<br>The number after arthematic operation "+ num);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

const currentYear = 2020;
var birthYear = prompt("Enter your Birth Year ");
while(true)
{
    var check = false;
    if(birthYear<0)
    {
     birthYear = prompt("Enter your Birth Year Correctly! ");
    }
    else if(birthYear >currentYear)
    {
     birthYear = prompt("Enter your Birth Year Correctly! ");
    }
    else if(birthYear>0 && birthYear<currentYear)
    {
        break;
    }


}
const age = currentYear - birthYear;
document.write("<br><h1>Age Calculator</h1>");
document.write("<br>Current Year: "+currentYear);
document.write("<br>Birth Year: "+birthYear);
document.write("<br>Your Age is: "+age);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r 2 , π = 3.142)

var radius = prompt("Enter radius ");
var circumference, area;
circumference = 2 * Math.PI*radius;
area = Math.PI*Math.pow(Math.PI,2);
document.write("<br><h1>The Geometrizer</h1>");
document.write("<br>Radius of Circle: "+radius);
document.write("<br>The Circumference is: "+circumference);
document.write("<br>The Area is: "+area);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.

var snack,currentAge, maxAge, estimateUse, totalEat;
snack = prompt("Enter your favourite snack");
currentAge = prompt("Enter your current Age");
maxAge = prompt("Enter your Maximum Age");
estimateUse = prompt("Enter the Usage of snack per day");
totalEat = (maxAge - currentAge)*estimateUse;
document.write("<br><h1>The Lifetime supply calculator</h1>")
document.write("<br>Favourite Snack: "+snack);
document.write("<br>Current Age: "+currentAge);
document.write("<br>Estimate Maximum Age: "+maxAge);
document.write("<br>Amount of snack per day: "+estimateUse);
document.write("<br>You will need "+totalEat+" "+snack+" to last you until the ripe old age of "+maxAge);
