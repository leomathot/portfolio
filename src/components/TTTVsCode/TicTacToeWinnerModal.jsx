import { Square } from "./TicTacToeSquare"

export function WinnerModal({ winner, resetGame }) {
    if (winner === null) return null
    const winnerText = winner === false ? "Tie!" : "wins!"

    return (
        <section className="winner">
            <div className="text">
                <div>
                    {
                        winner  && 
                            <Square>{winner === "x" 
                                ? <i class="fa-solid fa-x"></i> 
                                : <i class="fa-solid fa-o"></i>}
                            </Square>
                    }
                    <h2>
                        {winnerText}
                    </h2>
                </div>
                <button onClick={resetGame}>Play again</button>
            </div>
        </section>
    )
}