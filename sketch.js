var path,girl,boy, leftBoundary,rightBoundary;
var pathImg,girlImg,boyImg;
var coinImg,obstacleImg;
var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;
var score = 0;
var life = 3;
var i;

function preload() {
  heart1Img = loadImage("heart_1.png")
  heart2Img = loadImage("heart_2.png")
  heart3Img = loadImage("heart_3.png")
  pathImg = loadImage("path.png");
  girlImg = loadImage("girlrunning.png");
  boyImg = loadImage("boyrunning.jpg");
  coinImg = loadImage("coin.png");
  obstacleImg = loadImage("obstacle.png");
}

function setup() {
  createCanvas(800,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  girl = createSprite(180,340,30,30);
  girl.scale=0.08;
  girl.addAnimation("girlRunning",girlImg);

  boy = createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("boyRunning",boyImg);

  heart1 = createSprite(displayWidth-150,40,20,20)
   heart1.visible = false
    heart1.addImage("heart1",heart1Img)
    heart1.scale = 0.4

    heart2 = createSprite(displayWidth-100,40,20,20)
    heart2.visible = false
    heart2.addImage("heart2",heart2Img)
    heart2.scale = 0.4

    heart3 = createSprite(displayWidth-150,40,20,20)
    heart3.addImage("heart3",heart3Img)
    heart3.scale = 0.4
   
  createSprite(400, 200, 50, 50);

  leftBoundary=createSprite(0,0,100,800);

  leftBoundary.invisible = true;
  leftBoundary.visible = false;
 
 
 rightBoundary=createSprite(410,0,100,800);
 rightBoundary.visible = false;

}

function draw() {
  background(255,255,255);
  path.velocityY = 4;
  
  girl.x = World.mouseX;
  boy.y = World.mouseY;

  edges= createEdgeSprites();
  girl.collide(edges[3]);
  girl.collide(leftBoundary);
  girl.collide(rightBoundary);

  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  if(life===3){
    heart3.visible = true
    heart1.visible = false
    heart2.visible = false
  }
  if(life===2){
    heart2.visible = true
    heart1.visible = false
    heart3.visible = false
  }
  if(life===1){
    heart1.visible = true
    heart3.visible = false
    heart2.visible = false
  }
  if(path.y > 400 ){
    path.y = height/2;
  }

  if(path.y > 400 ){
   
  path.y = height/2;
  }

  if(path.y > 400 ){
path.y = height/2;}

if(path.y > 400 ){path.y = height/2;}

background(backgroundImage);
if (playerCount === 2) {
  game.update(1);
}

if (gameState === 1) {
  game.play();
}
if (gameState === 2) {
  game.showLeaderboard();
  game.end();

  player.rank+=1;
}

  drawSprites();

}