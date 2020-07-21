var domStr = {
    form_container:".form-container",
    firstName:"#first_name",
    lastName:"#last_name",
    email:"#email",
    password:"#password",
    id_output:"#id_no",
    firstname_output:"#fname",
    lastname_ouput:"#lname",
    email_output:"#email",
    password_output:"#password-output"
};


var generateId = function(){
    var lastElementId = document.querySelector("tbody").lastElementChild.id;
    if(lastElementId!=="")
    {
    lastElementId = lastElementId.split("-");
    var id = Number(lastElementId[1]);
    id++;
    return id;
    }else 
    {
        return 1;
    }
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


var insertDataintoTable = function(obj){

    var html = ' <tr id="data-%id%"> <td id="id_no">%id%</td> <td id="fname">%firstname%</td><td id="lname">%lastname%</td><td id="email">%email%</td><td id="password-output">%password%</td><th><button id="delete-btn">Delete</button> <button id="edit-btn">Edit</button></th></tr>';

    var id = generateId();
    html = html.replace(/%id%/g, id);
    html = html.replace("%firstname%", obj.first_name);
    html = html.replace("%lastname%", obj.last_name);
    html = html.replace("%email%", obj.email);
    html = html.replace("%password%", obj.password);

    document.querySelector("tbody").insertAdjacentHTML("beforeend",html);

}

var deleteData = function(event){

    if(event.target.textContent==="Delete")
    {
     var id = event.target.parentNode.parentNode.id;
     document.querySelector("#"+id).remove();
     checkForEdit =false;
    }
    
}
var checkForEdit =false;
var id1;

var editData = function(event)
{
    if(event.target.textContent==="Edit")
    {
    var id = event.target.parentNode.parentNode.id;
    var childs = document.querySelector("#"+id).children;
     id1= id.split("-");
    id1=Number(id1[1]);
    document.querySelector(domStr.firstName).value = childs[1].textContent;
    document.querySelector(domStr.lastName).value = childs[2].textContent;
    document.querySelector(domStr.email).value = childs[3].textContent;
    document.querySelector(domStr.password).value = childs[4].textContent;
    checkForEdit=true;
    console.log(id1);
    }


}

var clearFields = function(){
    var fields = document.querySelectorAll("input");

    fields = Array.prototype.slice.call(fields);

    fields.forEach(function(curr){
        curr.value = "";
    });

}


var submitData = function(event){

    var inputValues = getInputs();
    var checkEmptyFields =  checkValidation(event, inputValues);

    if(checkEmptyFields===true && checkForEdit===false)
    {   
        insertDataintoTable(inputValues);
    clearFields();


    }else if(checkForEdit===true)
    {
        var a = document.querySelector("tbody").children.item(id1).children;
        a[0].textContent = id1;
        a[1].textContent=inputValues.first_name;
        a[2].textContent=inputValues.last_name;
        a[3].textContent=inputValues.email;
        a[4].textContent=inputValues.password;
        console.log(a);
    clearFields();

    }


}

document.querySelector("#submit-btn").addEventListener("click",submitData);
document.querySelector("tbody").addEventListener("click", deleteData)
document.querySelector("tbody").addEventListener("click", editData);
