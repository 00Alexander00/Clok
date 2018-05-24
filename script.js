var can=document.getElementById('box');
var cont=can.getContext('2d');
var scvar, cerkl;

scvar=new Path2D();
scvar.moveTo(50,50);
scvar.lineTo(250,50);
scvar.lineTo(300,25);
scvar.lineTo(50,50);
scvar.lineTo(50,50);
cont.lineWidth=10;
cont.stroke(scvar);
// cont.fillRect(50,25,200,250);
cerkl=new Path2D();
cerkl.arc(150,150,100,0,2*Math.PI);
cont.fillStyle='red';
cont.fill(cerkl);