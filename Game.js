class Game {
    constructor() {

    }

    getState() {
        var gameStateref = database.ref("gameState");
        gameStateref.on("value", function (data){
            gameState = data.val;

        });
    }

    update(state) {
        database.ref('/').update({gameState : state});
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef =await database.ref('playerCount').once("value");
            if(playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                console.log(playerCount);
                player.getCount();
            }
            
            form = new Form();
            form.display();
        }
    }

    play() {
        form.hide();
        console.log("inside play");
        Player.getPlayerInfo();
        if(allPlayers!==undefined) {
            var display_position = 130;
      for(var plr in allPlayers){
          console.log(allPLayers)
        if (plr === "Player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

        }

        if(keyIsDown (UP_ARROW) && player.index!= null) {
            player.distance+=30;
            player.update();
        }
    }
}