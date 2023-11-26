const heading = document.querySelector(".text");

let text = "hi i\'m web developer";
let texts = ["shiv","web developer"];

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