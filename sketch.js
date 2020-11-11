var fixedRect, movingRect;
var object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
object1 = createSprite(50, 100, 50, 100)
object1.shapeColor = "orange";
object2 = createSprite(150, 100, 50, 100)
object2.shapeColor = "orange";

object3 = createSprite(800, 50, 50, 50)
object3.shapeColor = "orange";
object4 = createSprite(800, 750, 50, 50)
object4.shapeColor = "orange";

object3.velocityY = -5;
object4.velocityY = 5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff(object3,object4);
  if(touching(movingRect,fixedRect))
  {
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
  }
  else
  {
    movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "orange";
  }

  drawSprites();
}

