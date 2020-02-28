window.addEventListener("keydown", function(event){
    debugger
    switch(event.key){
        case "a":
            gam.rover.turnLeft();
            break;
        case "d":
            game.rover.turnRight();
            break;
        case " ":
            game.rover.moveForward();
            break;
    }
})