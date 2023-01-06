var score = 0
var life = 3
var scoreboard
var gameState = 1

var player, playerImg;
var backgroundImg;
var asteroid, asteroidImg
var bullet, bulletImg

var resetButton, resetButtonImg

var bulletGroup = []
var asteroidGroup = []


function preload(){
  playerImg = loadImage("./assets/spaceship.png");
  backgroundImg = loadImage("./assets/background2.jpg");
  asteroidImg = loadImage("./assets/asteroid.png")
  bulletImg = loadImage("./assets/bullet.png")
  resetButtonImg = loadImage("./assets/resetButton.png")

}

function setup() {
  createCanvas(1903,1007);

  bulletGroup = createGroup();
  asteroidGroup = createGroup();

  player = createSprite(150,540,10,10);
  player.addImage(playerImg);
  player.rotation = 90;
  player.scale = 1.2;

  resetButton = createSprite(1860,50,100,100)
  resetButton.addImage(resetButtonImg)
  resetButton.scale = 0.15
  
  


  // asteroid = createSprite(800,200,10,10);
  // asteroid.addImage(asteroidImg);
  // asteroid.scale = 1;

  // bullet = createSprite(10,10);
  // bullet.addImage(bulletImg);
  // bullet.scale = 1;

  life = createElement("h1");
  scoreboard= createElement("h1");


}

function draw() {
  background(backgroundImg)  

  drawSprites();

  if(keyDown("space")){
    shootBullet();
  }



  if(gameState===1){
    player.y=mouseY
    player.visible = true

    life.html("Life: " +life)
    life.style('color:white')
    life.position(150,20)

    scoreboard.html("Score: " +score)
    scoreboard.style('color:white')
    scoreboard.position(500,20)


  }
}


function drawBullet(){
  bullet = createSprite(10,10);
  bullet.y=player.y
  bullet.addImage(bulletImg);
  bullet.scale = 1;  
}

function mousePressed(button){
  gameState=1
}

function mouseReleased(resetButton){
  gameState=0
  resetFrameCount()
}

function resetFrameCount(){
  frameCount = 0
}

function shootBullet(){
  bullet = createSprite(150, width/2,50,20)
  bullet.y = player.y
  bullet.addImage(bulletImg)
  bullet.velocityX = 120
  bulletGroup.add(bullet)

}




