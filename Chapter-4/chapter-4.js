// Chapter 4 VARIABLE NAMES: LEGA


//1. Declare 3 variables in one statement.
var userName, userEmail, userPassword;

//2.Declare 5 legal & 5 illegal variable names.

//legalNames
var _playingGame, $xyz_variable, variable_2, var1_JS, VAR_32$;

//illegal Names;
//var #fahad, &abc_js, 12varjs, js#$1, onetow1; //because of error the whole web page not render so comment it.

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

var heading = "<h1>Rules for name Of JS Variables</h1>";
var str1 = "Variable names can only contain letters, $, numbers and underscore.<br>"
var str2 = "Variables must begin with a letter, $ or underscore. For example $name, _name or name. <br>";
var str3 = "Variable names are case sensitive. <br>";
var str4 = " Variable names should not be JS keywords. <br>";

document.write(heading);
document.write(str1);
document.write(str2);
document.write(str3);
document.write(str4);
