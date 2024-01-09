import { Square } from "./TicTacToeSquare"

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
                            {sq}
                        </Square>
                    )
                })
            }
        </div>
    )
}
