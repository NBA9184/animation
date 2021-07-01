var imgArray = new Array();
for (i = 0; i < 24; i++) {
  imgArray[i] = new Image();
  imgArray[i].src = "images/ball" + i + ".gif";
}
var counter = 0;

function rotate() {
  if (counter > imgArray.length - 1) counter = 0;
  document.getElementById("ball").src = imgArray[counter].src;
  counter++;
  setTimeout("rotate()", 50);
}
window.addEventListener("load", rotate);
