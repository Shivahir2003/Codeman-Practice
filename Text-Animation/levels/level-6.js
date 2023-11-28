const heading = document.querySelector(".text");
const textAdd = document.querySelector(".text-add");
const addBtn = document.querySelector(".add");
const rmBtn = document.querySelector(".remove");

let text = "hi i\'m web developer";
const texts = [""];


let endvalue = 1
isforword = true; 
textcount= 0;

let id = setInterval(function()
{
    heading.textContent = texts[textcount].substring(0,endvalue);
    if(isforword){
        endvalue++;
    }
    else{
        endvalue--;
    } 

    if(endvalue > text.length + 3)
    {
        isforword  = false;
    }
    if(endvalue < -3)
    {
        isforword= true;
        textcount++;
    }
    if(textcount == texts.length)
    {
        textcount = 0
    }
},100)


addBtn.addEventListener('click' , function(){
    texts.push(textAdd.value); 
    textAdd.value = "";
});

rmBtn.addEventListener('click' , function(){
    texts.shift();
    
});