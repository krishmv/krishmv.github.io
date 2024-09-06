/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }
var bar = document.body.classList;

var keepOpen = false;

function openNavBar() {
    keepOpen = true;
    bar.add("open");
}

function keepBarOpen() {
    keepOpen = true;
}

function closeNavBar()  {
    if(keepOpen) keepOpen = false;
    else bar.remove("open");
}

