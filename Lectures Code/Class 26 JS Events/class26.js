function fun1() {
  var x = document.getElementById("container");
  document.getElementById("heading").style.display = "none";
  x.style.backgroundColor = "yellow";
}
function fun2() {
  var x = document.getElementById("container");
  document.getElementById("heading").style.display = "block";
  x.style.backgroundColor = "greenyellow";
}
function fun3() {
  var x = document.getElementById("input");
  x.style.border = "5px solid deeppink";
  x.style.outline = "none";
}
function fun4() {
  var x = document.getElementById("input");
  x.style.border = "5px solid skyblue";
  x.style.color = "skyblue";
}

function pageLoad() {
  setTimeout(myPage, 5000);
}

function myPage() {
  window.open("http://beta-labs.in");
}
