window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function toggleMenu() {
  var x = document.getElementById("menu");
  var toggleBtn = document.getElementById('toggle-btn')
  if (x.style.display === "flex") {
    x.style.display = "none";
    toggleBtn.className ="fa fa-bars";
  } else {
    x.style.display = "flex"
    toggleBtn.className ="fa fa-close";
  }
}