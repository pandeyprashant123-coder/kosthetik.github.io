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

//ID'S OF BUTTON
var mask = document.getElementById("mask");
var martigen = document.getElementById("martigen");
var reboncel = document.getElementById("reboncel");


//ID'S of IMAGES
var maskImage = document.getElementById("rest");
var martigenImage = document.getElementById("fil");
var reboncelImage = document.getElementById("rebon");

martigenImage.style.display = "none";
reboncelImage.style.display = "none";

mask.addEventListener("click", function() {
    // document.getElementByID("martigen").innerHTML= "none";
    martigenImage.style.display = "none";
    reboncelImage.style.display = "none";
    maskImage.style.display = "inline";
    if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else this.classList.add("active");
});
martigen.addEventListener("click", function() {
    // document.getElementByID("martigen").innerHTML= "none";
    maskImage.style.display = "none";
    reboncelImage.style.display = "none";
    martigenImage.style.display = "inline";
});
reboncel.addEventListener("click", function() {
    // document.getElementByID("martigen").innerHTML= "none";
    maskImage.style.display = "none";
    martigenImage.style.display = "none";
    reboncelImage.style.display = "inline";
});