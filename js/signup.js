var div1 = document.getElementById("signin");
var div2 = document.getElementById("signup");
var div1content = document.getElementById("signindiv");
var div2content = document.getElementById("signupdiv");
function signin(){
    div1.style.backgroundColor = "#545c64";
    div2.style.backgroundColor = "white";
    div1.style.color = "white";
    div2.style.color = "#545c64";
    div1.style.borderColor = "white";
    div2.style.borderColor = "#545c64";
    div1content.style.display = "block";
    div2content.style.display = "none";
}
function signup(){
    div1.style.backgroundColor = "white";
    div2.style.backgroundColor = "#545c64";
    div1.style.color = "#545c64";
    div2.style.color = "white";
    div1.style.borderColor = "#545c64";
    div2.style.borderColor = "white";
    div1content.style.display = "none";
    div2content.style.display = "block";
}