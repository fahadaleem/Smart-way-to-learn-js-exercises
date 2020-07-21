// chapter 14-16 ARRAYS

// 1- Declare an empty array using JS literal notation to store
//    student names in future.
var stdArr = [];


// 2. Declare an empty array using JS object notation to store
// student names in future.

var stdArrywithObj = {
    students :[]
};

// 3. Declare and initialize a strings array
var strArr = ["cat", "mouse","elephant","dog"];

// 4. Declare and initialize a numbers array.
var numArr = [1,2,3,4,5];

// 5. Declare and initialize a boolean array.
var boolArr = [true,false,true,true];

// 6. Declare and initialize a mixed array.
var mixArr = ["cat", "mouse",1,2,3,4,true,NaN,null];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var qualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","Phd"];
document.write("Qualifications <br><br>");
for(var i=0;i<qualification.length;i++)
{
    document.write(i+1+") "+qualification[i]+"<br>");
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var stdName = [];
var stdMarks =[];
for(var i=0;i<3;i++)
{
    stdName.push(prompt("Enter your name"));
    stdMarks.push(prompt("Enter your score, "+stdName[i]));
}

var total_Marks = 500;

var stdPercentages =[];
for(var i=0;i<3;i++)
{
    var calc = (parseFloat(stdMarks[i])/500)*100;
    stdPercentages.push(calc);
}
//Display results
for(var i=0;i<3;i++)
{
    document.write("Score of "+stdName[i]+" is "+stdMarks[i]+". Percentage: "+stdPercentages[i]+"%<br>");
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.

var colors = ["Red","Green","Blue"];
document.write("<h1>Colors</h1><br><br>");
for(var i=0;i<colors.length;i++)
{
        document.write(i+1+"-"+colors[i]+"<br>");
}

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.

var UserColor = prompt("Enter the color that you want to add at the beginning");
while(UserColor==="")
{
    UserColor = prompt("Enter the color that you want to add at the beginning");
}

colors.unshift(UserColor);
document.write("<h1>Updated List of colors</h1>");
for(var i=0;i<colors.length;i++)
{
        document.write(i+1+"-"+colors[i]+"<br>");
}

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
UserColor = prompt("Enter the color that you want to add at the End");
while(UserColor==="")
{
    UserColor = prompt("Enter the color that you want to add at the End");
}
colors.push(UserColor);
document.write("<h1>Updated List of colors, Color added at the end</h1>");
for(var i=0;i<colors.length;i++)
{
        document.write(i+1+"-"+colors[i]+"<br>");
}

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
document.write("<h1>Updated List of colors, two colors added at the start</h1>");

UserColor = prompt("Enter first Color");
while(UserColor==="")
{
    UserColor = prompt("Enter First Color");
}
colors.unshift(UserColor);
UserColor = prompt("Enter Second Color");
while(UserColor==="")
{
    UserColor = prompt("Enter Second Color");
}
colors.unshift(UserColor);
for(var i=0;i<colors.length;i++)
{
        document.write(i+1+"-"+colors[i]+"<br>");
}

// d. Delete the first color in the array. Display the updated
// array in your browser
colors.shift();
document.write("<h1>Updated List of colors, Deleted the first color</h1>");
for(var i=0;i<colors.length;i++)
{
        document.write(i+1+"-"+colors[i]+"<br>");
}

// e. Delete the last color in the array. Display the updated
// array in your browser.

colors.pop();
document.write("<h1>Updated List of colors, Deleted the Last color</h1>");
for(var i=0;i<colors.length;i++)
{
        document.write(i+1+"-"+colors[i]+"<br>");
}

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

var index = Number(prompt("In which index do you want to add color, enter index number"));
UserColor = prompt("Enter Color");
while(UserColor==="")
{
    UserColor = prompt("Enter Color");
}

colors.splice(index-1,0,UserColor);
document.write("<h1>Updated List of colors, Added color at given index</h1>");
for(var i=0;i<colors.length;i++)
{
        document.write(i+1+"-"+colors[i]+"<br>");
}


// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser
index = Number(prompt("In which index do you want to delete color, enter index number"));
colors.splice(index-1,1);
document.write("<h1>Updated List of colors, Deleted color at given index</h1>");
for(var i=0;i<colors.length;i++)
{
        document.write(i+1+"-"+colors[i]+"<br>");
}


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var studentScores = [320,230,480,112,120];
document.write("Score of students : "+studentScores.join(",")+"<br>");

studentScores = studentScores.sort();
document.write("Ordered Scores of students : "+studentScores.join(",")+"<br>");


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var citiesName = ["karachi", "quetta","peshawar", "islamabad","rawalpindi"];
var selectedCityName = citiesName.slice(2,4);
document.write("<h1>Cities List:<br> "+ citiesName.join(",")+"</h1>");
document.write("<h2>Selected Cities List:<br> "+selectedCityName.join(",")+"</h2><br>");


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = [" This ", "is ", "my ", "cat" ];
document.write("<h2>Arrarys <br>"+arr.join(",")+"</h2>");
document.write("<h2>String: <br>"+arr.join(" ")+"</h2>");

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var productsforQueue = ["keyboard","mouse","laptops","mouse pads","cooling pad"];
document.write("<h1>First In FIrst Out <br> <h2>Devices: <br> "+productsforQueue.join(","));
var len = productsforQueue.length;
for(var i=0;i<len;i++)
{
        document.write("<h3>Out: <br> "+productsforQueue.shift());
}

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

var productsforStack = ["keyboard","mouse","laptops","mouse pads","cooling pad"];
document.write("<h1>Last In FIrst Out <br> <h2>Devices: <br> "+productsforStack.join(",")+"</h2><h1>");
var len = productsforStack.length;
for(var i=0;i<len;i++)
{
        document.write("<h3>Out: <br> "+productsforStack.pop());
}


// 15. Write a program to store phone manufacturers (Apple,
//         Samsung, Motorola, Nokia, Sony & Haier) in an array.
//         Display the following dropdown/select menu in your
//         browser using document.write() method:

var mobileCompanies = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<h1>Drop Down using Js</h1>");
document.write("<select>");
for(var i=0;i<mobileCompanies.length;i++)
{
document.write("<option>"+mobileCompanies[i]+"</option>");
}
document.write("</select>")