var headX = 230;
var headY = 220;
var headDirection = 3;

var neckX = 300;
var neckY = 350;
var neckDirection = -8;

var eyebrow1X = 100;
var eyebrow1Y = 350;
var eyebrow1Direction = 3;

var eyebrow2X = 250;
var eyebrow2Y = 350;
var eyebrow2Direction = 6;

var shirtX = 60;
var shirtY = 450;
var shirtDirection = 3;

var size = 22;
var count = 0;
var sizeDirection = 2;

function setup()
{
    createCanvas(500,600);
}
function draw()
{
  background(0,225,225);

// hair
  noStroke();
  let f = color('hotpink');
  fill(f);
  rect(30, 30, 250, 400);
  let a = color('saddlebrown');
  fill(a);
  rect(230, 30, 200, 400);

// head
    noStroke();
    let d = color('burlywood');
    fill(d);
    circle(headX,headY,350);
    headX+=headDirection;
    if(headX >= 325 || headX <= 170)
    {
        headDirection *= -1;
    }

// neck
    noStroke();
    fill(d);
    square(neckX, neckY, 100)
    neckX+=neckDirection;
    if(neckX >= 400 || neckX <= 5)
    {
        neckDirection *= -1;
    }
// eyes
    stroke(1);
    strokeWeight(5);
    let c = color('white');
    fill(c);
    ellipse(150, 200, 75, 50);
    ellipse(300, 200, 75, 50);
    stroke(1);
    strokeWeight(5);
    fill(a);
    circle(150,200,50);
    circle(300,200,50);
    noStroke();
    let b = color('black');
    fill(b);
    circle(150,200,30);
    circle(300,200,30);
    stroke(1);
    strokeWeight(10);
    stroke('c');
    point(140, 190);
    point(315, 190);

  // eyebrow1
    noStroke();
    fill(a);
    rect(eyebrow1X, eyebrow1Y, 110, 15)
    eyebrow1Y+=eyebrow1Direction;
    if(eyebrow1Y >= 355 || eyebrow1Y <= 120)
    {
        eyebrow1Direction *= -1;
    }

// eyebrow2
noStroke();
fill(a);
rect(eyebrow2X, eyebrow2Y, 110, 15)
eyebrow2Y+=eyebrow2Direction;
if(eyebrow2Y >= 355 || eyebrow2Y <= 120)
{
    eyebrow2Direction *= -1;
}
// nose
  stroke(a);
  line(250, 250, 230, 180);

// mouth
  noStroke();
  let e = color('salmon');
  fill(e);
  triangle(150, 320, 220, 300, 280, 320);
  triangle(180, 320, 280, 300, 330, 320);
  ellipse(235, 335, 150, 20);

// bangs
  fill(f);
  rect(30, 30, 250, 100);
  fill(a);
  rect(230, 30, 200, 100);

// shirt
  let g = color('gold');
  fill(g);
    rect(shirtX, shirtY, 350, 180)
    shirtX+=shirtDirection;
    if(shirtX >= 380 || shirtX <= 550)
    shirtY+=shirtDirection;
    if(shirtY >= 550 || shirtY <= 380)
    {
      shirtDirection *= -1;
    }

// title
fill(25);
fill(b);
  textSize(size);
  size+= sizeDirection;
  count++;
  if(count > 5)
  {
      sizeDirection *=-1;
      count = 0;
  }
   text('Squared by Avianna Soto', 80, 25);
}
