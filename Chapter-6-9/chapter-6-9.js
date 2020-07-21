// Chapter 6-9 MATH EXPRESSIONS
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = prompt("Enter a number");
document.write("<br>Result");
document.write("<br>The Value of a: "+a);
document.write("<br>The Value of ++a is: "+ ++a);
document.write("<br>Now the value of a is: "+a);
document.write("<br>The value of a++ is: "+ a++);
document.write("<br>Now the value of a is: "+a);
document.write("<br>The value of --a is: "+ --a);
document.write("<br>Now the value of a is: "+a);
document.write("<br>The value of a-- is: "+ a--);
document.write("<br>Now the value of a is: "+a);


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

var a1 = 2, b=1;
document.write("<br>a is: "+a1);
document.write("<br>b is: "+b);
var result = --a1 - --b + ++b + b--;
// --a1 after this execute the value of a1 is 1
// --b after this execution the value of b is 0
// ++b after this execution the value of b is 1
// b-- after this execution the value of b is 2
document.write("<br>result: "+result);


// 3. Write a program that takes input a name from user &
// greet the user.
var name  = prompt("Enter your name");
document.write("<br><h1>Welcome "+name+"</h1>");

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var tableNumber = prompt("Enter a number");
if(tableNumber==="")
{
    for(var i=1;i<=10;i++)
    {
        document.write("<br>5x"+i+"="+5*i);
    }
}
else 
{
    for(var i=1;i<=10;i++)
    {
        document.write("<br>"+tableNumber+"x"+i+"="+tableNumber*i);
    }
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var subjects=[],obt=[],percentage=[];
for(var i=0;i<3;i++)
{
    subjects[i]=prompt("Enter Subject "+i+" Name");
}

for(var i=0;i<3;i++)
{
    obt[i]=prompt("Enter "+subjects[i]+ " Marks");
}

for(var i=0;i<3;i++)
{
    percentage[i]=(obt[i]/100)*100;
}

var totalMarks=0;
for(var i=0;i<3;i++)
{
    totalMarks+=Number(obt[i]);
}

var tableHead = "<br><table><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th>";
var tableData="<tr><td>"+subjects[0]+"</td><td>100</td><td>"+obt[0]+"</td><td>"+percentage[0]+"%</td></tr>";
var tableData1="<tr><td>"+subjects[1]+"</td><td>100</td><td>"+obt[1]+"</td><td>"+percentage[1]+"%</td></tr>";
var tableData2="<tr><td>"+subjects[2]+"</td><td>100</td><td>"+obt[2]+"</td><td>"+percentage[2]+"%</td></tr>";
var tableData3="<tr><td>Total</td><td>300</td><td>"+totalMarks+"</td><td>"+(totalMarks/300)*100+"%</td></tr>";

document.write(tableHead);
document.write(tableData);
document.write(tableData1);
document.write(tableData2);
document.write(tableData3);


