class Form {
    constructor() {
        this.title = createElement();
        this.input = createInput();
        this.button = createButton("Start");
        this.reset = createButton("Reset");
        this.greeting = createElement();
    }

    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display() {
        
        this.title.html("Car Racing Game");
        this.title.position(130,10);
        
        
        this.input.position(130,150);
        this.button.position(130,250);
        this.reset.position(400,30);
        
        this.button.mousePressed( ()=> {
            
        
        player.name = this.input.value();
        playerCount+= 1;
        player.index = playerCount;
        console.log(player.index);
        player.update();
        console.log("update")
        player.updateCount(playerCount);
        this.greeting.html("Welcome " + player.name);
        this.greeting.position(130,50);
        })

        this.reset.mousePressed( ()=> {
            database.ref('/').update({
                playerCount:0,
                players:null,
                gameState: 0

            })
        })
    }
}