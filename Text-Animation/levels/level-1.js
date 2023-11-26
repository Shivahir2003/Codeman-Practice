const heading = document.querySelector(".text-main");

let text = "hi i\'m web developer";

let endvalue = 1
let id = setInterval(function()
{
    heading.textContent = text.substring(0,endvalue);
    endvalue++;
    console.log(endvalue);

    if(endvalue > text.length)
    {
        window.clearInterval(id)
    }
},100)