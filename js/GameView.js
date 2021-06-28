export default class GameView{
    constructor(){
        // console.log("init game view");
    }

    updateBoard(game){
        this.updateTurn(game);
        const winningCombination = game.findWinnigCombination();
        for(let i=0;i<game.board.length;i++){
            // console.log(game.board[i]);
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            tile.classList.remove("tile-winner");
            tile.textContent = game.board[i];
            let tileType = game.board[i] === 'X' ? "tile-x": "tile-o";
            tile.innerHTML = `<span class=${tileType}> ${game.board[i] ? game.board[i] :""} </span>`;
                     //result box modal
        let winnerDeclare = document.querySelector(".winner-declare")

            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add("tile-winner");
                winnerDeclare.innerHTML = `Congratulation 🎉 Winner is Player ${game.board[i]}!`;
                var modal = document.querySelector(".modal");
                modal.style.display = "block";

                document.querySelector(".replay").addEventListener("click",()=>{
                    window.location.reload();
                })
            }

   
       
        }
       
    }

    updateTurn(game){
            let playerX= document.querySelector(".player-X");
            let playerO= document.querySelector(".player-O");
            playerX.classList.remove('active');
            playerO.classList.remove('active');
        if(game.turn === "X"){
            playerX.classList.add('active');
        }else{
            playerO.classList.add('active');
        }
    }
}