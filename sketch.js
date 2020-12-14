var courtimg;
var circle1, circle2, circle3, circle4;
var myteam, opponentteam;
var circle1img, circle2img, circle3img, circle4img;
var ballimg, ball;
var inv1, inv2, inv3, inv4;
var gameState = "START";
var basket1, basket2;
var points1 = 0;
var points2 = 0;
function preload(){
 courtimg = loadImage("images/court.jpg");
 circle1img = loadImage("images/walluigi.png");
 circle2img = loadImage("images/mario.png");
 circle3img = loadImage("images/KD.png");
 circle4img = loadImage("images/wario.png");
 ballimg = loadImage("images/Basketball.png");
}
function setup() {
  createCanvas(windowWidth - 100, windowHeight);
    myteam = createGroup();
    opponentteam = createGroup();
    circle1 = createSprite(width/2 - 300, height/2 - 200, 10, 10);
    circle1.addImage("circle1", circle1img);
    circle1.scale = 0.1;
    opponentteam.add(circle1);
    circle3 = createSprite(width/2 - 300, height/2 + 200, 10, 10);
    circle3.addImage("circle3", circle2img);
    circle3.scale = 0.1;
    myteam.add(circle3);
    ball = createSprite(width/2 - 50, height/2 - 30, 10, 10);
    ball.addImage("ball", ballimg);
    ball.scale = 0.1;
    inv1 = createSprite(width-150, height/2, 10, height-100);
    inv1.shapeColor = "blue";
    inv1.visible = true;
    inv2 = createSprite(width-1110, height/2, 10, height-100);
    inv2.shapeColor = "yellow";
    inv2.visible = true;
    inv3 = createSprite(width-630, height/2 + 270, width-300, 9);
    inv3.shapeColor = "green";
    inv3.visible = true; 
    inv4 = createSprite(width/2 - 10, height/2 - 270, width-200, 9);
    inv4.shapeColor = "red";
    inv4.visible = true;
    basket1 = createSprite(width/2 - 10, 595, 10, 30);
    basket1.shapeColor = "red";
    basket2 = createSprite(width/2 - 10, 49, 10, 30);
    basket2.shapeColor = "blue";
}
function draw() {
  if(gameState === "START"){
    background("white");
    text("touch anywhere or press space to start", width/2, height/2);
    if(touches.lenght > 10 || keyDown("space")){
      gameState = "PLAY";
    }
    hidden();
  }
    if(gameState === "PLAY"){
      background(courtimg);
      seen();
      text("your points:" + points1, 639, 625);
      text("opponent's points: " + points2, 639, 29);
      circle1.x = ball.x;
      if(keyDown("up")){
        circle3.y-=10;
      }
      if(keyDown("down")){
        circle3.y+=10;
      }
      if(keyDown("right")){
        circle3.x+=10;
      }
      if(keyDown("left")){
        circle3.x-=10;
      }
      if(touches.length>10||keyDown("space")){
        ball.velocityX = 10;
        ball.velocityY = -10;
      }
    }
    if(ball.isTouching(basket1)){
      gameState = "START";
      points2=points2 + 1;
    }
    if(ball.isTouching(basket2)){
      gameState = "START";
      points1=points1 + 1;
    }
    if(points2 === 10){
      gameState = "END";
      text("YOU LOST THE GAME", width/2, height/2);
    }
    if(points1 === 10){
      gameState = "END";
      text("YOU WON THE GAME", width/2, height/2);
    }
    if(gameState === "END"){
      text("touch anywhere or press space to restart", width/2, height/2);
      if(touches.length>10||keyDown("space")){
        gameState = "PLAY";
      }
    }
  ball.bounceOff(inv1);
  ball.bounceOff(inv2);
  ball.bounceOff(inv3);
  ball.bounceOff(inv4);
  ball.bounceOff(circle3);
  ball.bounceOff(circle1);
  drawSprites();
}
function hidden(){
  ball.visible = false;
  circle1.visible = false;
  circle3.visible = false;
  basket1.visible = false;
  basket2.visible = false;
}
function seen(){
  ball.visible = true;
  circle1.visible = true;
  circle3.visible = true;
  basket1.visible = true;
  basket2.visible = true;
}