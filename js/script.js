import Game from './Game.js';
import GameView from './GameView.js';

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click",()=>{
onRestartNewGame();
});

let tiles = document.querySelectorAll(".board-tile");
// console.log(tiles);
tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
       onTitleClicked(tile.dataset.index);
        // console.log(tile.dataset.index);
    });
});
// console.log("my turn is ", game.turn);

function onTitleClicked(i){
    game.makeMove(i);
    gameView.updateBoard(game);
    // game.nextTurn(i);
}

function onRestartNewGame(){
    game = new Game();
    gameView.updateBoard(game);
}
