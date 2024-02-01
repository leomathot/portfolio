import { Square } from "./TicTacToeSquare"
import { TURNS } from "./TicTacToeConstants"

export function BoardSqures({ board, updateBoard }) {
    return (
        <div className="board-squares">
            {
                board.map((sq, index) => {
                    return (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                        >
                            {
                            sq === null ? null 
                                : sq === TURNS.X 
                                    ? <i class="fa-solid fa-x"></i> 
                                    : <i class="fa-solid fa-o"></i> 
                            }
                        </Square>
                    )
                })
            }
        </div>
    )
}
