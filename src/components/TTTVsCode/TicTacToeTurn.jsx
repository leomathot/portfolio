import { TURNS } from "./TicTacToeConstants"
import { Square } from "./TicTacToeSquare"

export function Turn({ turn, resetGame }) {
    return (
        <section className="turn">
            <Square isSelected={turn === TURNS.X}>
                { <i class="fa-solid fa-x"></i> }
            </Square>
            <Square isSelected={turn === TURNS.O}>
                { <i class="fa-solid fa-o"></i> }
            </Square>
            <div>
                <button onClick={resetGame}>Reset game</button>
            </div>
        </section>
    )
}
