// Chapter 20-25
// String Methods

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + " "+lastName;
alert("Welcome! "+fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var usrMobile = prompt("What is your favorite mobile model?");
document.write("<h1>My favorite mobile model: "+usrMobile);
document.write("<br>Lenght of String:"+usrMobile.length+"</h1>")


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

var word = "Pakistani";
document.write("<h1>String:"+ word);
document.write("<br>The index of 'n': "+word.indexOf("n"));


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser

var word1 = "Hello World";
document.write("<h1>String: "+word1);
document.write("<br>Last Index of 'l': "+word1.lastIndexOf("l"));

// 5. Write a program to find the character at 3 rd index in the
// word “Pakistani” and display the result in your browser 

var word2 = "Pakistani";
document.write("<h1>String: "+word2);
document.write("<br>Character at index 3: "+word2.charAt(3));

// 6. Repeat Q1 using string concat() method.

var firstName1 = prompt("Enter your first name");
var lastName1 = prompt("Enter your last name");
var fullName1 = "";
fullName1= fullName1.concat(firstName1," ",lastName1);
alert("Welcome! " +fullName1);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var initialWord = "Hyderabad";
var replaceWord = initialWord.replace("Hyder","Islam");
document.write("<h1>City: "+initialWord+"<br>Replacement: "+replaceWord+"</h1>");

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together";
var changedMessage = message.replace(/and/g,"&");
document.write("<h1>Initial Message: "+message+"<br>After Replacement: "+changedMessage+"</h1>");

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var a = "472";
document.write("<h1>Value: "+a+"<br>Type: "+typeof(a)+"<br>Value: "+Number(a)+"<br>Type: "+typeof(Number(a))+"</h1>");


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
var inputVal = prompt("Enter sentence or word");
document.write("<h1>User Input: "+inputVal+"<br>Uppercase: "+inputVal.toUpperCase()+"</h1>");



// 11. Write a program that takes user input. Convert and
// show the input in titlecase.
var inputVal1 = prompt("Enter sentence or word");
var b = inputVal1.split(" ");
var c=[];
for(var i=0;i<b.length;i++)
{
    c[i]=b[i][0].toUpperCase()+b[i].slice(1,);
}
c=c.join(" ");
document.write("<h1>Userinput: "+inputVal1+"<br>Title Case: "+c+"</h1>");

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.46;
str = num.toString();
str=str.replace(".","");
document.write("<h1>Number: "+num+"<br>Result: "+str);


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


var symbols = ["@",".","!",","];
var userName = prompt("Enter username");
var check=false;
for(var i=0;i<symbols.length;i++)
{
    if(userName.includes(symbols[i]))
    {
        check=true;
        break;
    }
}

if(check===true)
{
    alert("Please enter a correct valid name");
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. 

var A = ["cake","apple pie","cookie","chips","patties"];
var usrSearch = prompt("Enter name of thing.");
var index;
var check=false;
for(var i=0;i<A.length;i++)
{
    if(usrSearch.toLowerCase()===A[i])
    {
        index = i;
        check=true;
        break;
    }
}

if(check===true)
{
    document.write("<h1>"+usrSearch+" is available at index "+index+" in our bakery</h1>");
}
else
{
    document.write("<h1>We are sorry, "+usrSearch+" is not available in our bakery");
}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


var num =[1,2,3,4,5,6,7,8,9,0];
var str ="abcdefghijklmnopqrstuvxyz";
var strCapatilize=str.toUpperCase();
var password = prompt("Enter password");
var check=false;
while(true)
{
    if(password.length>=6)
    {
        for(var i=0;i<str.length;i++)
        {
            if((password.includes(str[i])|| password.includes(strCapatilize[i])){
            check=true;
            }
        }
    }else
    {
        check=false;
    }
}