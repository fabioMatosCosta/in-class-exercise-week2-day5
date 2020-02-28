function renderRover(aRover){
    let $aRover = game.rover;
    let $game = document.querySelector("#game");
    let $roverImg = document.createElement("img");
    $roverImg.setAttribute("src", "...");
    $roverImg.setAttribute("id", "wall-e");
    
    $roverImg.style.left = `${aRover.position[0]*10}%`
    $roverImg.style.top = `${aRover.position[1]*10}%`

    document.appendChild($roverImg);
    document.appendChild($game);
}

function renderEverything(){
    let $game = 
    document.body.innerHTML = "";
    renderRover(aRover);
}

function renderObstacle(){
    let obstacle = game.obstacles;

    for(let i = 0; i< obstacle.length ; i++){
        let $obstaclesImg = document.createElement("img");
        $obstaclesImg.style.left=`${..}`;
        $obstaclesImg.style.top= `${..}`;
        $game.appendChild($obstaclesImg);
    }


}

setInterval(()=>{
    renderEverything(aRover);
}, 250)

