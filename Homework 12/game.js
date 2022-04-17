// character
var characterX = 90;
var characterY = 30;
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 50;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(800, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(167, 89, 228);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);
    // maze
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

    // exit message
    textSize(14);
    text("FINISH", width-70,height-20);
    text("START", width-785,height-565);
    //character
    fill(255,255,255);
    circle(characterX,characterY,30);

    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 5;
    }
    if(keyIsDown(s))
    {
        characterY += 5;
    }
    if(keyIsDown(a))
    {
        characterX -= 5;
    }
    if(keyIsDown(d))
    {
        characterX += 5;
    }

    // potential enemy
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

    // exit
    if(characterX > width-80 && characterY > height-50)
    {
        fill(255,255,255);
        stroke(5);
        textSize(28);
        text("YOU WIN!", width-450, height-310);
    }

    // click
    fill(255,0,250);
    square(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
