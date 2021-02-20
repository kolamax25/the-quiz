var canvas;
var database;

var gameState = 0;
var playerCount,player, allPlayers;
var form, quiz;
function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
 quiz =new Quiz();
 quiz.getState();
  quiz.start();

 
}


function draw(){
  background("pink");

  if(playerCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    quiz.play();
  }


  
}
