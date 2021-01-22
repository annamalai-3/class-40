var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var carimage,car1image,car2image,car3image;
var trackimage1 ,  trackimage2;
function preload(){
  
carimage = loadImage("images/car1.png");
car1image = loadImage("images/car2.png");
car2image = loadImage("images/car3.png");
car3image = loadImage("images/car4.png");
trackimage1 = loadImage("images/track.jpg");
trackimage2 = loadImage("images/track.png");

}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){

   game.end();
   
  }
}
