canvas=document.getElementById("MyCanvas");
pen=canvas.getContext("2d");
    pen.beginPath();
    pen.strokeStyle="blue";
    pen.lineWidth=5;
    pen.arc(300,250, 30,0,2*Math.PI);
    pen.stroke();

    pen.beginPath();
    pen.strokeStyle="black";
    pen.lineWidth=5;
    pen.arc(380,250, 30,0,2*Math.PI);
    pen.stroke();

    pen.beginPath();
    pen.strokeStyle="red";
    pen.lineWidth=5;
    pen.arc(460,250, 30,0,2*Math.PI);
    pen.stroke();

    pen.beginPath();
    pen.strokeStyle="yellow";
    pen.lineWidth=5;
    pen.arc(340,280, 30,0,2*Math.PI);
    pen.stroke();

    pen.beginPath();
    pen.strokeStyle="green";
    pen.lineWidth=5;
    pen.arc(420,280, 30,0,2*Math.PI);
    pen.stroke();
    
    pen.beginPath();
    pen.strokeStyle="black";
    pen.lineWidth=5;
    pen.rect(150,183,485,200);
    pen.stroke();






