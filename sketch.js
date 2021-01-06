var fixedRect, movingRect;
var g1,g2,g3,g4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 0, 80, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(600,800,80,80);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
   
  g1=createSprite(100,100,50,50);
  g1.shapeColor="green";
  g2=createSprite(200,100,50,50);
  g2.shapeColor="green";
  g3=createSprite(300,100,50,50);
  g3.shapeColor="green";
  g4=createSprite(400,100,50,50);
  g4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
movingRect.velocityY=-5;
fixedRect.velocityY=+5;

  bounceOff(movingRect,fixedRect);
  

  drawSprites();
}
function isTouching(object1,object2){
if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
  }
  else {
    return false;
  }
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
    return true
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
    return true
  }

}