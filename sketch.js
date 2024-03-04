
let l = 0
let o = 150


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,150,120);

  stroke(255, 255, 200)
  line(0, 100, l , 100);
   
  l = l + 3;
  
   stroke(255, 255, 200)
  line(0, 150, l , 150);
   
  l = l + 3;
  
  if(l > width){
    l = width 
  }
  
  stroke(255, 255, 200);
  fill(255, 100, 0);
   triangle(150, o, 200, 50, 250,o);
  
  o = o + 3;
  if(o > height){
    o = height
  }
  
   
 }

