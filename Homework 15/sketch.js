var characterX = 90;
var characterY = 30;

var w = 87;
var s = 83;
var a = 65;
var d = 68;

var mouseShapeX;
var mouseShapeY;

var enemyXs = [];
var enemyYs = [];
var diameters - [];

var enemyXSpeeds = [];
var enemyYSpeeds = [];

function setup()
{
    createCanvas(800, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 50; i++) {
      enemyXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      enemyYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      enemyXs[i] = getRandomNumber(500);
      enemyYs[i] = getRandomNumber(600);
      diameters[i] = getRandomNumber(30);
}
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
    // enemy
       fill(244,255,0);
    // draw enemy
       for (var i = 0; i < 5; i++) {
         circle(enemyXs[i], enemyYs[i], diameters[i]);
         enemyXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
         enemyYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    // move enemy
          enemyXs[i] += enemyXSpeeds[i];
          enemyYs[i] += enemyXSpeeds[i];
    // enemy bounds
          if (enemyXs[i] > width) {
              enemyXs[i] = 0;
              }
              if (enemyXs[i] < 0) {
              enemyXs[i] = width;
              }
              if (enemyYs[i] > width) {
              enemyYs[i] = 0;
            }
              if (enemyYs[i] < 0) {
              enemyYs[i] = width;
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
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 1;
}
