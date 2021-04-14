canvas = document.getElementById("olympicCanvas");
canvas_olympic = canvas.getContext("2d");

canvas_olympic.beginPath();
canvas_olympic.strokeStyle = "blue";
canvas_olympic.lineWidth = 5;
canvas_olympic.arc(70, 100, 40, 0, 2*Math.PI);
canvas_olympic.stroke();

canvas_olympic.beginPath();
canvas_olympic.strokeStyle = "black";
canvas_olympic.lineWidth = 5;
canvas_olympic.arc(170, 100, 40, 0, 2*Math.PI);
canvas_olympic.stroke();

canvas_olympic.beginPath();
canvas_olympic.strokeStyle = "red";
canvas_olympic.lineWidth = 5;
canvas_olympic.arc(270, 100, 40, 0, 2*Math.PI);
canvas_olympic.stroke();

canvas_olympic.beginPath();
canvas_olympic.strokeStyle = "yellow";
canvas_olympic.lineWidth = 5;
canvas_olympic.arc(120, 145, 40, 0, 2*Math.PI);
canvas_olympic.stroke();

canvas_olympic.beginPath();
canvas_olympic.strokeStyle = "green";
canvas_olympic.lineWidth = 5;
canvas_olympic.arc(220, 145, 40, 0, 2*Math.PI);
canvas_olympic.stroke();