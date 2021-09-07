window.onresize = screen;
window.onload = screen;

function screen() {
  mywidth = window.innerWidth;
  document.getElementById("size").innerHTML = "Width: " + mywidth + "px";
}
