myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);
myitem.addEventListener("mouseout", onMouseOut);

function onClick() {
    myitem.style.color = "green";
    myitem.style.fontSize = "1.5em";
}

function onMouseOut() {
    myitem.style.color = "";
    myitem.style.fontSize = "";
}

firstbutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick);

function onButtonClick() {  
    otheritem.style.color = "red";  
}

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}

