// Chapter-43-48
// Events

var table = document.querySelector("table");

table.addEventListener("click", function(event){

    var id = event.target.parentNode.parentNode.id;

    var aa = document.querySelector("#"+id).remove();;
})

var count =0;
//increase button
document.querySelector("#increase").addEventListener("click", function(){
    count = count+1;
    document.querySelector("#counter-value").innerHTML = count;
})


//decrease button
document.querySelector("#decrease").addEventListener("click", function(){
    if(count>0)
    {
    count = count-1;
    document.querySelector("#counter-value").innerHTML = count;

}})