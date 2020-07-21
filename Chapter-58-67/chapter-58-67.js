// Chapter-58-67.js
// DOM

// i. Get element of id “main-content” and assign them in a variable.

var main_content_div = document.getElementById("main-content");

// ii. Display all child elements of “main-content” element
var childElements = main_content_div.children;

//Converting nodelist to arrays.
childElements = Array.prototype.slice.call(childElements);

//Display Each Elements
childElements.forEach(function(curr) {
    console.log(curr);
});


// iii. Get all elements of class “render” and show their innerHTML
// in browser.

var element_renders = document.getElementsByClassName("render");

//Converting nodelist to arrays.
element_renders= Array.prototype.slice.call(element_renders);

// Display the element of class "render" innerHTML content to the console
element_renders.forEach(function(curr)
{
    console.log(curr.innerHTML);
});

// iv. Fill input value whose element id first-name using javascript

var input_first_name = prompt("Enter first name");
var element_first_name = document.getElementById("first-name");
element_first_name.value = input_first_name;

// v. Repeat part iv for id ”last-name” and “email”.
var input_last_name = prompt("Enter last name");
var element_last_name = document.getElementById("last-name");
element_last_name.value = input_last_name;

var input_email = prompt("Enter email");
var element_email = document.getElementById("email");
element_email.value = input_email;





// 2. use HTML code of question 1 and show the result on browser.

// i. What is node type of element having id “form-content”.

var check_node_type = document.getElementById("form-content").nodeType; //Element Node
var check_node_name = document.getElementById("form-content").nodeName; //Div
console.log(check_node_type);
console.log(check_node_name);

// ii. Show node type of element having id “lastName” and its child node.

check_node_type = document.getElementById("lastName").nodeType; // returns 1;
console.log(check_node_type);
check_node_type = document.getElementById("lastName").childNodes[0].nodeType // Returns 3 because it is a text node.
console.log(check_node_type);

// iii. Update child node of element having id “lastName”.

document.getElementById("lastName").childNodes[0].textContent = "Last Name: "+input_last_name;



// iv. Get First and last child of id “main-content”.

var first_child = document.getElementById("main-content").firstElementChild;
console.log(first_child);

var last_child = document.getElementById("main-content").lastElementChild;
console.log(last_child);

// v. Get next and previous siblings of id “lastName”.

var next_sibling = document.getElementById("lastName").nextElementSibling;
console.log(next_sibling);


var previous_sibling = document.getElementById("lastName").previousElementSibling;
console.log(previous_sibling);

// vi. Get parent node and node type of element having id “email”

var parent_node = document.getElementById("email").parentNode;
console.log(parent_node);