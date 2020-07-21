// // IF… … ELSE & ELSE IF STATEMENT,
// // TESTING SET OF CONDITIONSS


// // 1. Write a program that takes a character (number or string)
// // in a variable & checks whether the given input is a
// // number, uppercase letter or lower case letter. (Hint: ASCII
// // codes:- A=65, Z=90, a=97, z=122).


// var letter = prompt("Enter a alphabet letter");
// while(letter.length>1)
// {
//     letter = prompt("Just input a single letter");
// }

// var asciiCode = letter.charCodeAt();
// if(asciiCode>=65 && asciiCode<=90)
// {
//     alert("It is uppercase letter");
// }
// else if(asciiCode>=97 && asciiCode<=122)
// {
//     alert("It is lowercase letter");
// }

// // 2. Write a JavaScript program that accept two integers and
// // display the larger. Also show if the two integers are equal.

// var n1 = Number(prompt("Enter a number"));
// var n2 = Number(prompt("Enter a number"));
// if(n1>n2)
// {
//     alert(n1+" is greater than "+n2);
// }
// else if(n1<n2)
// {
//     alert(n2+" is greater than "+n1);
// }
// else if(n1===n2)
// {
//     alert("Boht numbers are equal");
// }

// // 3. Write a program that takes input a number from user &
// // state whether the number is positive, negative or zero.

// var num = Number(prompt("Enter number"));
// if(num>0)
// {
//     alert("Positive Number!");
// }
// else if(num<0)
// {
//     alert("Negative Number!");
// }
// else if(num===0)
// {
//     alert("Number is Zero");
// }


// // 4. Write a program that takes a character (i.e. string of
// //    length 1) and returns true if it is a vowel, false otherwise
// var character = prompt("Enter a alphabet character");
// var vowels = ['a','e','i','o','u'];
// alert(vowels.includes(character.toLowerCase()));

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


var originalPass = "karachi99";
var userPass = prompt("Enter password");
while(userPass==="")
{
    userPass = prompt("Enter Password");
}

if(userPass===originalPass)
{
    alert("Correct! The password you entered matches the original password");
}
else 
{
    alert("Incorrect Password!");
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}else
{
greeting = "Good evening";
}
alert(greeting);

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = Number(prompt("Enter time in this format 1900=7pm or 2000=8pm etc"));
if(time>=0000 && time <1200)
{
    alert("Good Morning!");
}
else if(time>=1200 && time <1700)
{
    alert("Good Afternoon!");
}
else if(time>=1700 && time<2100)
{
    alert("Good Evening!");
}
else if(time>=2100 && time<2359)
{
    alert("Good Night!");
}