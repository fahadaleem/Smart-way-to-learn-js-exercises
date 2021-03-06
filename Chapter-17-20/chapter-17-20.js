// Chapter 17-20 ARRAYS AND LOOP

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var multiArr = [[]];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var multiArr1 = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for(var i=0;i<multiArr1.length;i++)
{
    document.write(multiArr1[i]+"<br>");
}

// 3. Write a program to print numeric counting from 1 to 10.

for(var i=0;i<10;i++)
{
    document.write(i+"<br>");
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var tableNum = Number(prompt("Enter Table Number"));
var lengthOfTable = Number(prompt("Enter length of table"));
for(var i=1;i<=lengthOfTable;i++)
{
    document.write(tableNum+"x"+i+"="+tableNum*i+"<br>");
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i=0;i<fruits.length;i++)
{
    document.write(fruits[i]+"<br>");
}
for(var i=0;i<fruits.length;i++)
{
    document.write("Element at "+i+" is "+fruits[i]+"<br>");
}


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


document.write("<h1>Counting</h1>");
for(var i=1;i<=15;i++)
{
    document.write(i+",");
}

document.write("<h1>Reverse</h1>");
for(var i=10;i>=1;i--)
{
    document.write(i+",");
}

document.write("<h1>Even</h1>");
for(var i=0;i<=20;i++)
{
    if(i%2===0)
    document.write(i+",");
}

document.write("<h1>Odd</h1>");
for(var i=0;i<=20;i++)
{
    if(i%2!==0)
    document.write(i+",");
}

document.write("<h1>Series</h1>");
for(var i=2;i<=20;i++)
{
    if(i%2===0)
    document.write(i+"k, ");
}



// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var A = ["cake","apple pie","cookie","chips","patties"];

var searchVal = prompt("Enter Search Value");
var check = false, index;
for(var i = 0;i<A.length;i++)
{
    if(searchVal===A[i]){
        check=true;
        index=i;
        console.log("hello");
        break;
    }
}

if(check===true)
{
    document.write("<h1>"+searchVal+" is available at index "+index+" in our bakery");
}
else
{
    document.write("<h1>We are sorry "+searchVal+" is not available in our bakery");

}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var arr = [24, 53, 78, 91, 12];
var max = 0; 
for(var i=0;i<arr.length;i++)
{
    if(max<arr[i])
    {
        max = arr[i];
    }
}

document.write("Array Items:");
for (let index = 0; index < arr.length; index++) {
    document.write(arr[index]+",");    
}

document.write("<br> The largest Number is: "+max);


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var arr1 = [24, 53, 78, 91, 12];
var min= 0; 
arr1= arr1.sort();
min = arr1[0];
document.write("<br>Array Items:");
for (let index = 0; index < arr1.length; index++) {
    document.write(arr1[index]+",");    
}

document.write("<br> The minimum Number is: "+min+"<br>");


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

document.write("<h1>Multiple of 5 <h1>");

for(var i=1;i<=100;i++)
{
    if(i%5===0)
    {
        document.write(i+",");
    }
}