// Chapter 38 to 42
// FUNCTIONS, SWITCH
// STATEMENTS, WHILE… DO- -
// WHILE LOOPS

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

var power = function(a,b)
{
    return Math.pow(a,b);
}


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

var leapYearCheck = function(year)
{
    if(year%4!==0)
    {
        console.log("Not Leap Year!");
    }
    else 
    {
        console.log("Leap Year!");
    }
}

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


var calculateS = function(a,b,c)
{
    return (a+b+c)/2;
}


var areaOfTriangle = function(a,b,c)
{
    var S = calculateS(a,b,c);
    var area = S*(S-a)*(S-b)*(S-c);
    return area; 
}

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

var average = function(arrOfScore)
{
    var sum =0;
    for(var i=0;i<arrOfScore.length;i++)
    {
        sum +=arrOfScore[i];
    }

    var average = sum/3;
    return average;
}

var percentage = function(arrOfScore)
{
    var sum =0;
    for(var i=0;i<arrOfScore.length;i++)
    {
        sum +=arrOfScore[i];
    }
    
    var percentage = (sum/300)*100;
    return percentage;
}

var getResult = function(){
    
    var arr = [];
    for(var i=1;i<4;i++)
    {
        arr.push(parseFloat(prompt("Enter Marks "+ i)));
    }

    var avg = average(arr);
    var perc = percentage(arr);
    console.log("Average : "+avg);
    console.log("Percentage: "+perc);
}

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

var indexOf = function(str,char)
{
    var index = -1;
    for(var i=0;i<str.length;i++)
    {
        if(char === str[i])
        {
            index = i;
            break;
        }
    }

    return index;
}


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


var deleteVowels = function(str)
{
    if(str.length>25)
    {
        return "String should not more than 25 characters long";
    }
    else 
    {
        var vowels = ['a','e','i','o','u'];
        var outputStr;
        str = str.split("");
        for(var i=0;i<vowels.length;i++)
        {
            while(true)
            {
                if(str.includes(vowels[i]))
                {
                    var index = str.indexOf(vowels[i]);
                    str.splice(index,1);
                }
                else 
                {
                    break;
                }
            }
        }

        str = str.join("");
        console.log(str);
    }
}

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

var checkVowelSuccession = function(str){
    var vowels = ['a','e','i','o','u'];
    var vowelsOccurence=[];
   for(var i=0;i<str.length;i++)
   {
       var a = str.slice(i,i+2);

        if(vowels.includes(a[0]) && vowels.includes(a[1]))
        {
            vowelsOccurence.push(a);
        }
    }

  var output = "Such occurence are: " + vowelsOccurence.join(" ");
  return output;
    
}


// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

var convertToMeter = function(arr)
{
    var outputResult = [];
    for(var i=0;i<arr.length;i++)
    {
        var calc = arr[i]*1000;
        outputResult.push(calc);
    }

    return outputResult;
}


var convertToInches = function(arr)
{
    var outputResult = [];
    for(var i=0;i<arr.length;i++)
    {
        var calc = arr[i]*39370.1;
        outputResult.push(calc);
    }
    return outputResult;

}

var convertToFeet= function(arr)
{
    var outputResult = [];
    for(var i=0;i<arr.length;i++)
    {
        var calc = arr[i]*3280.84;
        outputResult.push(calc);
    }
    return outputResult;

}

var convertToCentiMeter= function(arr)
{
    var outputResult = [];
    for(var i=0;i<arr.length;i++)
    {
        var calc = arr[i]*100000;
        outputResult.push(calc);
    }
    return outputResult;

}

var convertDistance = function(){
    var distanceOfFirstCity = parseFloat(prompt("Enter first city distance : "));
    var distanceOfSecondCity = parseFloat(prompt("Enter second city distance in km"));
    var distanceArr = [distanceOfFirstCity,distanceOfSecondCity];
    var convertedInMeter = convertToMeter(distanceArr);
    var convertedInInches = convertToInches(distanceArr);
    var convertedInFeet = convertToFeet(distanceArr);
    var convertedInCentimeters = convertToCentiMeter(distanceArr);

    console.log("The Comverted Temperature are: \n KM to M = "+convertedInMeter+"\n KM to Inche = "+convertedInInches+"\n KM to Feet = "+convertedInFeet+"\n Km to cm = "+convertedInCentimeters);


}


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

var calculateOvertime = function(hours){
    var overtimeRate = 12;
    var totalOvertimePay = 0;
    if(hours>40)
    {
        totalOvertimePay = overtimeRate*(hours-40);
    }
  
    return totalOvertimePay;
}

var hoursInput = parseFloat(prompt("Enter hours of work"));
var overtime = calculateOvertime(hoursInput);
console.log("Your overtime pay is : "+overtime);


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.


var input = Number(prompt("Enter value for notes"));


var notes = function(val)
{
    var a =[100,50,10];
    var noteCounts = [];
    
    for(var i=0;i<3;i++)
    {
        var num = parseInt(val / a[i]);
        val = val%a[i];
       noteCounts.push(num);
    }
    

    console.log("You have "+noteCounts[0]+" hundred notes, "+noteCounts[1]+" fifty notes and "+noteCounts[2]+" ten notes");

}

notes(input);

alert("See the console");
console.log("All functions that has be declared above is not called you can check it by calling in console")