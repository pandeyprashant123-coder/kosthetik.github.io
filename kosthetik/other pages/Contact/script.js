
// -------navtoggle------
var navbar = document.getElementById("navbar");
navbar.style.height="0px";
function toggle(){
    if(navbar.style.height=="0px")
    {
        navbar.style.height="240px";
    }
    else{
        navbar.style.height="0px";
    }
}