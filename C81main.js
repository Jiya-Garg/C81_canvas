var canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
color = "purple"
ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidth = 2
ctx.arc(200 , 200 , 50 , 0, 2*Math.PI)
ctx.stroke()
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e) {
     mouse_x = e.clientX - canvas.offsetLeft
     mouse_y = e.clientY - canvas.offsetTop
    circle(mouse_x , mouse_y)
}
function circle(mouse_x , mouse_y) {
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.arc(mouse_x , mouse_y , 50 , 0, 2*Math.PI)
    ctx.stroke()
}

