
var secAngle, minAngle, hrAngle, hr, sec, min;
function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);
}

function draw() {
  background("#000");  
  translate(200,200);
  rotate(-90);

   hr = hour();
   min = minute();
   sec = second();


   secAngle =(sec, 0, 60, 0, 360);
   minAngle = (min, 0, 60, 0 ,360);
   hrAngle = (hr%12,0,12,0,360);

   push();
   rotate(secAngle);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0);

   pop();


   push();
   rotate(minAngle);
   stroke(0,255,0);
   strokeWeight(7);
   line(0,0,75,0);

   pop();

   push();
   rotate(hrAngle);
   stroke(0,0,255);
   strokeWeight(7);
   line(0,0,50,0);

   pop();

   stroke(255,0,255);
   point(0,0);
   strokeWeight(10);
   noFill();
   stroke(255,0,0);
   arc(0,0,300,300,0,secAngle);
   stroke(0,255,0);
   arc(0,0,280,280,0,minAngle);
   stroke(0,0,255);
   arc(0,0,280,280,0,hrAngle);


  drawSprites();
}