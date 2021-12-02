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
var restylane = document.getElementById("rest");
var filorga = document.getElementById("fil");
var show = document.getElementById("showAll");


//ID'S of IMAGES
var restylaneImage = document.getElementById("rest");
var filorgaImage = document.getElementById("fil");
var hutoxImage = document.getElementById("hutox");
var iskinImage = document.getElementById("iskin");
var multiImage = document.getElementById("multi");
var omegaImage = document.getElementById("omega");
var prpImage = document.getElementById("prp");
var lipoImage = document.getElementById("lipo");
var obsImage = document.getElementById("obesitys");
var obmImage = document.getElementById("obesitym");
var qtImage = document.getElementById("qt");
var fillerImage = document.getElementById("filler");
var revolexImage = document.getElementById("revolex");
var cuteImage = document.getElementById("cute");
// var Image = document.getElementById("");




    filorgaImage.style.display = "inline";
    restylaneImage.style.display = "none";
    iskinImage.style.display = "none";
    multiImage.style.display = "none";
    omegaImage.style.display = "none";
    prpImage.style.display = "none";
    hutoxImage.style.display = "none";
    lipoImage.style.display = "none";
    obsImage.style.display = "none";
    obmImage.style.display = "none";
    qtImage.style.display = "none";
    fillerImage.style.display = "none";
    revolexImage.style.display = "none";
    cuteImage.style.display = "none";
    // Image.style.display = "none";


function Rest(){
    filorgaImage.style.display = "none";
    iskinImage.style.display = "none";
    multiImage.style.display = "none";
    omegaImage.style.display = "none";
    prpImage.style.display = "none";
    restylaneImage.style.display = "inline";
    hutoxImage.style.display = "none";    
    lipoImage.style.display = "none";
    obsImage.style.display = "none";
    obmImage.style.display = "none";
    qtImage.style.display = "none";
    fillerImage.style.display = "none";
    revolexImage.style.display = "none";
    cuteImage.style.display = "none";
    
    
}

function Fil(){
    filorgaImage.style.display = "inline";
    restylaneImage.style.display = "none";
    iskinImage.style.display = "none";
    multiImage.style.display = "none";
    omegaImage.style.display = "none";
    prpImage.style.display = "none";
    hutoxImage.style.display = "none";
    lipoImage.style.display = "none";
    obsImage.style.display = "none";
    obmImage.style.display = "none";
    qtImage.style.display = "none";
    fillerImage.style.display = "none";
    revolexImage.style.display = "none";
    cuteImage.style.display = "none";

}
function hutox(){
    filorgaImage.style.display = "none";
    restylaneImage.style.display = "none";
    iskinImage.style.display = "none";
    multiImage.style.display = "none";
    omegaImage.style.display = "none";
    prpImage.style.display = "none";
    hutoxImage.style.display = "inline";
    lipoImage.style.display = "none";
    obsImage.style.display = "none";
    obmImage.style.display = "none";
    qtImage.style.display = "none";
    fillerImage.style.display = "none";
    revolexImage.style.display = "none";
    cuteImage.style.display = "none";

}
function lipo(){
    filorgaImage.style.display = "none";
    restylaneImage.style.display = "none";
    iskinImage.style.display = "none";
    multiImage.style.display = "none";
    omegaImage.style.display = "none";
    prpImage.style.display = "none";
    hutoxImage.style.display = "none";
    lipoImage.style.display = "inline";
    obsImage.style.display = "none";
    obmImage.style.display = "none";
    qtImage.style.display = "none";
    fillerImage.style.display = "none";
    revolexImage.style.display = "none";
    cuteImage.style.display = "none";

}
function iskin(){
    filorgaImage.style.display = "none";
    restylaneImage.style.display = "none";
    iskinImage.style.display = "inline";
    multiImage.style.display = "none";
    omegaImage.style.display = "none";
    prpImage.style.display = "none";
    hutoxImage.style.display = "none";
    lipoImage.style.display = "none";
    obsImage.style.display = "none";
    obmImage.style.display = "none";
    qtImage.style.display = "none";
    fillerImage.style.display = "none";
    revolexImage.style.display = "none";
    cuteImage.style.display = "none";
    if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else this.classList.add("active");

}
function multi(){
    filorgaImage.style.display = "none";
    restylaneImage.style.display = "none";
    iskinImage.style.display = "none";
    multiImage.style.display = "inline";
    omegaImage.style.display = "none";
    prpImage.style.display = "none";
    hutoxImage.style.display = "none";
    lipoImage.style.display = "none";
    obsImage.style.display = "none";
    obmImage.style.display = "none";
    qtImage.style.display = "none";
    fillerImage.style.display = "none";
    revolexImage.style.display = "none";
    cuteImage.style.display = "none";

}
function omega(){
    filorgaImage.style.display = "none";
    restylaneImage.style.display = "none";
    iskinImage.style.display = "none";
    multiImage.style.display = "none";
    omegaImage.style.display = "inline";
    prpImage.style.display = "none";
    hutoxImage.style.display = "none";
    lipoImage.style.display = "none";
    obsImage.style.display = "none";
    obmImage.style.display = "none";
    qtImage.style.display = "none";
    fillerImage.style.display = "none";
    revolexImage.style.display = "none";
    cuteImage.style.display = "none";

}
function prp(){
    filorgaImage.style.display = "none";
    restylaneImage.style.display = "none";
    iskinImage.style.display = "none";
    multiImage.style.display = "none";
    omegaImage.style.display = "none";
    prpImage.style.display = "inline";
    hutoxImage.style.display = "none";
    lipoImage.style.display = "none";
    obsImage.style.display = "none";
    obmImage.style.display = "none";
    qtImage.style.display = "none";
    fillerImage.style.display = "none";
    revolexImage.style.display = "none";
    cuteImage.style.display = "none";
}
function obs(){
    filorgaImage.style.display = "none";
    restylaneImage.style.display = "none";
    iskinImage.style.display = "none";
    multiImage.style.display = "none";
    omegaImage.style.display = "none";
    prpImage.style.display = "none";
    hutoxImage.style.display = "none";
    lipoImage.style.display = "none";
    obsImage.style.display = "inline";
    obmImage.style.display = "none";
    qtImage.style.display = "none";
    fillerImage.style.display = "none";
    revolexImage.style.display = "none";
    cuteImage.style.display = "none";
}
function obm(){
    filorgaImage.style.display = "none";
    restylaneImage.style.display = "none";
    iskinImage.style.display = "none";
    multiImage.style.display = "none";
    omegaImage.style.display = "none";
    prpImage.style.display = "none";
    hutoxImage.style.display = "none";
    lipoImage.style.display = "none";
    obsImage.style.display = "none";
    obmImage.style.display = "inline";
    qtImage.style.display = "none";
    fillerImage.style.display = "none";
    revolexImage.style.display = "none";
    cuteImage.style.display = "none";
}
function qt(){
    filorgaImage.style.display = "none";
    restylaneImage.style.display = "none";
    iskinImage.style.display = "none";
    multiImage.style.display = "none";
    omegaImage.style.display = "none";
    prpImage.style.display = "none";
    hutoxImage.style.display = "none";
    lipoImage.style.display = "none";
    obsImage.style.display = "none";
    obmImage.style.display = "none";
    qtImage.style.display = "inline";
    fillerImage.style.display = "none";
    revolexImage.style.display = "none";
    cuteImage.style.display = "none";
}
function filler(){
    filorgaImage.style.display = "none";
    restylaneImage.style.display = "none";
    iskinImage.style.display = "none";
    multiImage.style.display = "none";
    omegaImage.style.display = "none";
    prpImage.style.display = "none";
    hutoxImage.style.display = "none";
    lipoImage.style.display = "none";
    obsImage.style.display = "none";
    obmImage.style.display = "none";
    qtImage.style.display = "none";
    fillerImage.style.display = "inline";
    revolexImage.style.display = "none";
    cuteImage.style.display = "none";
}
function revolex(){
    filorgaImage.style.display = "none";
    restylaneImage.style.display = "none";
    iskinImage.style.display = "none";
    multiImage.style.display = "none";
    omegaImage.style.display = "none";
    prpImage.style.display = "none";
    hutoxImage.style.display = "none";
    lipoImage.style.display = "none";
    obsImage.style.display = "none";
    obmImage.style.display = "none";
    qtImage.style.display = "none";
    fillerImage.style.display = "none";
    revolexImage.style.display = "inline";
    cuteImage.style.display = "none";
}
function cute(){
    filorgaImage.style.display = "none";
    restylaneImage.style.display = "none";
    iskinImage.style.display = "none";
    multiImage.style.display = "none";
    omegaImage.style.display = "none";
    prpImage.style.display = "none";
    hutoxImage.style.display = "none";
    lipoImage.style.display = "none";
    obsImage.style.display = "none";
    obmImage.style.display = "none";
    qtImage.style.display = "none";
    fillerImage.style.display = "none";
    revolexImage.style.display = "none";
    cuteImage.style.display = "inline";
}


// function (){
//     filorgaImage.style.display = "none";
//     restylaneImage.style.display = "none";
//     iskinImage.style.display = "none";
//     multiImage.style.display = "none";
//     omegaImage.style.display = "none";
//     prpImage.style.display = "none";
//     hutoxImage.style.display = "none";
//     lipoImage.style.display = "none";
//     obsImage.style.display = "none";
//     obmImage.style.display = "none";
//     qtImage.style.display = "none";
//     fillerImage.style.display = "none";
//     revolexImage.style.display = "none";
//     cuteImage.style.display = "none";
// }

