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
thirditem = document.getElementById("thirdbutton");
item4 = document.getElementById("classfour");

firstbutton.addEventListener("click", onButtonClick);

function onButtonClick() {  
    otheritem.style.color = "red"; 
    otheritem.innerHTML = "Grade: A";
    anotheritem.style.color = "red";
    anotheritem.innerHTML = "Grade: A"
    thirditem.style.color = "red";
    thirditem.innerHTML = "Grade: A"
    item4.style.color = "red";
    item4.innerHTML = "Grade: A"
}

secondbutton = document.getElementById("anotherbutton");  
anotheritem = document.getElementById("anotherbuttontest");

secondbutton.addEventListener("click", onSecondButtonClick);

function onSecondButtonClick() {  
    anotheritem.style.color = "blue"; 
    anotheritem.innerHTML = "Teacher: Rebecca Johnson-Kaserman"
    otheritem.style.color = "blue"; 
    otheritem.innerHTML = "Teacher: Bryan Haywood";
    thirditem.style.color = "blue"; 
    thirditem.innerHTML = "Teacher: Alison Welch";
    item4.style.color = "blue";
    item4.innerHTML = "Teacher: Zane Chamra"
}


resetbutton = document.getElementById("resetbutton");
resetbutton.addEventListener("click", onButtonClickReset);

function onButtonClickReset() {
    otheritem.style.color = "";
    anotheritem.style.color = "";
    thirditem.style.color = "";
    item4.style.color = "";
    anotheritem.innerHTML = "Honors Civics & Economics";
    otheritem.innerHTML = "Honors Math III"
    thirditem.innerHTML = "Honors English I"
    item4.innerHTML = "Physical Education"
}

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}