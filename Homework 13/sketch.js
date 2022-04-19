var characterX = 90;
var characterY = 30;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var shapeX = 50;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(800, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(characterX,characterY,30);
}

function draw()
{
  // canvas background
    background(167,89,228);
    stroke(0);
    fill(0);
    // borders
    createBorders(10);
    // obstacles
    drawObstacles();
    // text
    textSize(14);
    text("FINISH", width-70,height-20);
    text("START", width-785,height-565);
    // character
    drawCharacter();
    characterMovement();
    // enemy
    drawEnemy();
    // mouse click shape
    drawMouse();
    // exit gate
    if(characterX > width-10 && characterY > height-50)
    {
        fill(255,255,255);
        stroke(5);
        textSize(28);
        text("YOU WIN!", width-450, height-310);
    }
}

function characterMovement()
{
    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;
    }
    if(keyIsDown(s))
    {
        characterY += 10;
    }
    if(keyIsDown(a))
    {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
}

function drawCharacter()
{
    fill(255,255,255);
    circle(characterX,characterY,30);
}

function drawObstacles()
{
  rect(10,50,300,10);
rect(50,100,750,10);
rect(500,50,10,50);
rect(500,50,250,10);
rect(50,150,700,10);
rect(50,150,10,50);
rect(50,200,400,10);
rect(500,200,400,10);
rect(200,200,10,50);
rect(300,250,10,50);
rect(300,250,450,10);
rect(10,250,250,10);
rect(150,300,700,10);
rect(10,300,100,10);
rect(50,350,700,10);
rect(200,350,10,50);
rect(200,400,300,10);
rect(10,400,150,10);
rect(550,400,300,10);
rect(500,400,10,50);
rect(10,450,750,10);
rect(50,500,800,10);
rect(600,500,10,50);
rect(300,550,250,10);
rect(650,550,750,10);
rect(10,550,250,10);
rect(300,550,10,50);
}

function drawEnemy()
{
  fill(244,255,0);
    // draw the shape
    rect(shapeX, shapeY, 20);

     // get a random speed when the it first starts
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 2);

    // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX <= 600)
    {
        shapeX+=10;
    }
    else if(shapeX > 600)
    {
        shapeX = 20;
    }
    if(shapeY <= 800)
    {
        shapeY+=10;
    }
    else if(shapeY > 800)
    {
        shapeY = 50;
    }

}

function createBorders(thickness)
{
  rect(0,0,width,thickness);
  rect(0,0,thickness,height);
  rect(0, height-thickness,width, thickness);
  rect(width-thickness,0,thickness,height-50);
}

function drawMouse()
{
fill(250,0,250);
circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
