// Chapter-49-52
// Events

// 1. Create a signup form and display form data in your web
// page on submission.

var domStr = {
    form_container:".form-container",
    firstName:"#first_name",
    lastName:"#last_name",
    email:"#email",
    password:"#password",
    display_container:"#display-data",
    display_name:"#display-name",
    display_email:"#display-email",
    display_password:"#display-password"
};


var generateId = function(){
    var lastElementId = document.querySelector("tbody").lastElementChild.id;
    lastElementId = lastElementId.split("-");
    var id = lastElementId[1];
    return id;
}

var getInputs = function(){
    var firstName = document.querySelector(domStr.firstName).value;
    var lastName = document.querySelector(domStr.lastName).value;
    var email = document.querySelector(domStr.email).value;
    var password = document.querySelector(domStr.password).value;

    return {
        first_name:firstName,
        last_name:lastName,
        email:email,
        password:password
    }
}

var checkValidation = function(event, inputValues)
{
    if(inputValues.first_name==="" || inputValues.last_name==="" || inputValues.email==="" || inputValues.password==="")
    {
        alert("Please Fill All Fields");
        event.preventDefault();
        return false;
    }
    else if(inputValues.password.length<8)
    {
        alert("Password should contains atleast 8 characters");
        event.preventDefault();
        return false;
    }
    else
    {
        event.preventDefault();
        alert("submitted");
        return true;
    }
}

var process = function(inputValues){
    document.querySelector(domStr.form_container).style.display="none";
    document.querySelector(domStr.display_container).style.display="block";
    var display_name_content = document.querySelector(domStr.display_name).textContent;
    var display_email_content = document.querySelector(domStr.display_email).textContent;
    var display_password_content = document.querySelector(domStr.display_password).textContent; 

    var fullName = inputValues.first_name+" "+inputValues.last_name;
    display_name_content = display_name_content.replace("%name%", fullName);
    display_email_content = display_email_content.replace("%email%", inputValues.email);
    display_password_content = display_password_content.replace("%password%", inputValues.password);


    document.querySelector(domStr.display_name).textContent = display_name_content;
    document.querySelector(domStr.display_email).textContent= display_email_content;
    document.querySelector(domStr.display_password).textContent =display_password_content;


    console.log(display_name_content);
    console.log(display_email_content);
    console.log(display_password_content);


}

var submitData = function(event){

    var inputValues = getInputs();
    var checkEmptyFields =  checkValidation(event, inputValues);

    if(checkEmptyFields===true)
    {   
        process(inputValues);
    }
}

document.querySelector("#submit-btn").addEventListener("click",submitData);


























// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.


var readmore_btns = document.querySelectorAll(".readmore-btn");

var expand  = function(){
    this.parentNode.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
}


var readmore_btns_arrays = Array.prototype.slice.call(readmore_btns);
readmore_btns_arrays.forEach(function(curr, index, arr) {
   curr.addEventListener("click", expand);
});



// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.