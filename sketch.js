var ground;
var bananaGroup, obstacleGroup;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bg,bgImg;
var stone;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bgImage=loadImage("f1.jpg");
  

 
}



function setup() {
createCanvas(600,470);
  
  
  bg = createSprite(0,0,7000,7000);
  bg.addImage("f",bgImage);
  
  
  monkey = createSprite(90,300,30,30);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  ground = createSprite(0,350,900,2)
  
}


function draw() {
  background("white")
  
   text("SurvivalTime: "+ survivalTime, 500,50);
  
  
  
   monkey.collide(ground);
  
  bg.velocityX=-5;
  
  if(bg.x<0){
    bg.x=bg.width/2
  }
  
  if(keyDown("space")&&monkey.y>=100){
    monkey.velocityY=-9;
   
  }
   monkey.velocityY = monkey.velocityY + 0.8
  
 food();

  
  ground.visible=false;
  
  bananaGroup=new Group();
   spawnObstacles();
  
drawSprites();
  
}
function food(){
  
  if(frameCount%80===0){
   var banana = createSprite(900,120,10,10);
   banana.y=Math.round(random(120,200))
   banana.addImage(bananaImage);
   banana.scale=0.1;
   banana.velocityX=-3;
   bananaGroup.add(banana);
  }
}
  
  function spawnObstacles(){
    if (frameCount%300===0){
      var stone= createSprite(900,320,10,20)
      stone.x=Math.round(random(120,200))
      stone.addImage(obstacleImage);
      stone.scale=0.2;
      stone.velocityX=-3;
    
  }
  
  
}









