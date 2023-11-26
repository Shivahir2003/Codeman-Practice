const heading = document.querySelector(".text-main");

let text = "hi i\'m web developer";

let endvalue = 1
isforword = true; 
let id = setInterval(function()
{
    heading.textContent = text.substring(0,endvalue);
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
    }
},100)