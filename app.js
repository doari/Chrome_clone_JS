
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.style.color ="blue";
}
function handleMouseEnter(){
    h1.innerText = ("mouse is hear!")
}
function handleMouseLeave(){
    h1.innerText = ("mouse is gone!")
}


function handleWindowResize(){
    document.body.style.backgroundColor = "tomato!";
}
function handleWindowCopy(){
    alert("copier!")
}
function handleWindowOffline(){
    alert("No wifi!")
}
function handleWindowOnline(){
    alert("On wifi!")
}
h1.addEventListener("click",handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
