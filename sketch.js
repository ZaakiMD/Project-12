//adding variable
var track;
var way;
var surfer;
var player;
var leftBoundary;
var rightBoundary;

function preload(){
  
  //pre-load images
  way = loadImage("path.png");
  player = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  
  //create sprites here, add images/animations and making boundaries invisible
  track = createSprite(200,200,50,50);
  track.addImage("trackimage",way);

  surfer = createSprite(200,320,50,50);
  surfer.addAnimation("runner",player);
  surfer.scale = 0.07;

  leftBoundary = createSprite(10,200,100,400);
  leftBoundary.visible = false;

  rightBoundary = createSprite(395,200,100,400);
  rightBoundary.visible = false;
}

function draw() {
  background("black");
  
  //making the track move
  track.velocityY=3;

  //making the player move with mouseX
  surfer.x = mouseX;

  //making the player collide with the boundaries
  surfer.collide(leftBoundary);
  surfer.collide(rightBoundary);

  //infinte scrolling effect
  if(track.y > 400){
    track.y = height/2;
  }

  drawSprites();
}
