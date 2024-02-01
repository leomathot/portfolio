import { TURNS } from "./TicTacToeConstants"
import { Square } from "./TicTacToeSquare"

export function Turn({ turn, clearBoard, reset }) {
    return (
        <section className="turn">
            <Square isSelected={turn === TURNS.X}>
                { <i class="fa-solid fa-x"></i> }
            </Square>
            <Square isSelected={turn === TURNS.O}>
                { <i class="fa-solid fa-o"></i> }
            </Square>
            <div>
                <button onClick={clearBoard}>Clear</button>
            </div>
            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </section>
    )
}
