import { Square } from "./TicTacToeSquare"

export function WinnerModal({ winner, clearBoard }) {
    if (winner === null) return null
    const winnerText = winner === "t" ? "Tie!" : "wins!"

    return (
        <section className="winner">
            <div className="text 
                bg-gradient-to-br 
                from-teal-800 
                via-purple-900/95 
                to-sky-800">
                <div>
                    {
                        (winner === "x" || winner === "o")  && 
                            <Square>{winner === "x" 
                                ? <i class="fa-solid fa-x"></i> 
                                : <i class="fa-solid fa-o"></i>}
                            </Square>
                    }
                    <h2>
                        {winnerText}
                    </h2>
                </div>
                <button onClick={clearBoard}>Play again</button>
            </div>
        </section>
    )
}