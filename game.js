class Game {
    constructor(){
        this.rover = new Rover([3,4]);
        this.obstacle = [new Flash([8,8])];
    }

    start(){
        setInterval(()=>{
            renderEverything();
        }, 250);

        setInterval(()=>{
            let randomX = Math.floor(Math.random()*10);
            let randomY = Math.floor(Math.random()*10);
            this.obstacle.push(new Flash([randomX, randomY]));
        }, 250);

        setInterval(()=>{

            if(this.obstacle.length > 0){
                let randomObstacle = Math.floor(Math.random()*this.obstacle.length);
                this.obstacles.splice(randomObstacle, 1);
                this.obstacle.push(new Flash([randomX, randomY]));
            }
            
        }, 250);
        
    }
}

let game = new Game();
game.start();