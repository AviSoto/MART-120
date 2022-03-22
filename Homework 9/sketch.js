function setup()
{
    createCanvas(500,500);
}
function draw()
{
    background(220)
    ;background('deepskyblue');

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
    circle(230,220,350);
    square(180, 350, 100);

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

  // eyebrows
    noStroke();
    fill(a);
    rect(90, 140, 110, 15);
    rect(250, 140, 110, 15);

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
    rect(60, 450, 350, 180);

// title
  fill(b);
   textSize(25);
   text('Squared by Avianna Soto', 80, 25);
}
