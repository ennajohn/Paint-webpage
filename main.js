canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent = "empty";
var lastX,lastY;
color = "red";
width=2;

canvas.addEventListener("mousedown",my_mousedown)

function my_mousedown(e){
mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseUp",my_mouseUp)

function my_mouseUp(e){
mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave)

function my_mouseleave(e){
mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove)

function my_mousemove(e){
current_x = e.clientX - canvas.offsetLeft;
current_y = e.clientY - canvas.offsetTop;

if (mouseEvent=="mouseDown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width;
ctx.moveTo(lastX,lastY);
ctx.lineTo(current_x,current_y);
ctx.stroke();

console.log("last position of X = "+lastX+" and Y = "+lastY);
console.log("current position of X = "+current_x+" and Y = "+current_y);
}
lastX = current_x;
lastY = current_y;
}