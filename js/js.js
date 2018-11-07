function myFunction() {
var offsetHeight = document.getElementById("vedio-wrap");
style = window.getComputedStyle(offsetHeight);
h = style.height;
w = style.width;

var over = document.getElementById("over");
over.style.width = w;
over.style.height = h;

var ma = window.matchMedia('@media (min-device-aspect-ratio :16/9)');

if (ma.matches){
  over.style.minwidth = w;
  over.style.minheight = h;

}else{
  over.style.width = w;
  over.style.height = h;
 }
}
