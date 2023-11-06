const input = document.querySelector("#task-name");
const button = document.querySelector("button");
const alltask = document.querySelector(".all-task");
const clearbutton = document.querySelector(".clear-task");

button.addEventListener('click', function(){
   
    alltask.innerHTML += "<h3>" + input.value + "</h3>";
    input.value = "";
    
})

clearbutton.addEventListener('click', function(){
    alltask.innerHTML="";
})