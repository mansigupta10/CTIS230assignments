myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);
myitem.addEventListener("mouseout", onMouseOut);

function onClick() {
    myitem.style.color = "green";
    myitem.style.fontSize = "1.4em";
}

function onMouseOut() {
    myitem.style.color = "";
    myitem.style.fontSize = "";
}

firstbutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");

firstbutton.addEventListener("click", onButtonClick);

function onButtonClick() {  
    otheritem.style.color = "red"; 
}

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}

secondbutton = document.getElementById("anotherbutton");  
anotheritem = document.getElementById("anotherbuttontest");

secondbutton.addEventListener("click", onSecondButtonClick);

function onSecondButtonClick() {  
    anotheritem.style.color = "blue"; 
}

resetbutton = document.getElementById("resetbutton");
resetbutton.addEventListener("click", onButtonClickReset);

function onButtonClickReset() {
    otheritem.style.color = "";
    anotheritem.style.color = "";
}