class Quiz{

    constructor(){}
//read gamestate
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })

    }
//update gameState
   update(state){
    database.ref('/').update({
        gameState: state
      });
        
    }


   //start function
   async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }  
  }

   play(){
    form.hide();

    if(allPlayers != undefined){

        background("yellow")

        var index = 0
        var x = 100
        var y = 300

        for(var plr in allPlayers){

            index += 1;

            x += 100

            var RightA = "A"

            if(rightA === allPlayers[plr].answer){

                fill("green")
            }

            else{
                fill("red")
            }

            text(allPlayers[plr].name + " : " + allPlayers[plr].answer, x, y)
        }
    }
    
    




   }
}