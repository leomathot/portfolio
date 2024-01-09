import { useState } from 'react'
import { BoardSqures } from './TicTacToeBoardSquares'
import { Turn } from './TicTacToeTurn'
import { TURNS } from './TicTacToeConstants'
import { checkWinner, checkEndGame } from './TicTacToeLogic'
import { WinnerModal } from './TicTacToeWinnerModal'
import { saveGameToLocalStorage, resetGameLocalStorage } from './TicTacToeLocalStorage'

export default function TicTacToe() {

    const [board, setBoard] = useState(() => {
        const boardFromLocalStorage = window.localStorage.getItem('board')
        return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
    })
        
    const [turn, setTurn] = useState(() => {
        const turnFromLocalStorage = window.localStorage.getItem('turn')
        return turnFromLocalStorage ? JSON.parse(turnFromLocalStorage) : TURNS.X
    })

    const [winner, setWinner] = useState(null) // null => no winner, false => tie

    const [start, setStart] = useState(TURNS.X)

    const changeStart = () => setStart( start === TURNS.X ? TURNS.O : TURNS.X )

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(start)
        setWinner(null)
        resetGameLocalStorage()
    }

    const updateBoard = (index) => {
        // check if the square is empty
        if (board[index] || winner) return
        // if the square is empty, add the mark
        const newBoard = [... board]
        newBoard[index] = turn
        setBoard(newBoard)
        // if the mark is X, switch to O, and vice versa
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
        // save in local storage
        saveGameToLocalStorage({board: newBoard, turn: newTurn})
        // check if there is a winner
        const newWinner = checkWinner(newBoard) // returns X or O if any won or NULL if did not
        if (newWinner) {
            setWinner(newWinner)
            changeStart()
        } else if (checkEndGame(newBoard)) {
            setWinner(false) // tie
            changeStart()
        }
    }
    
    return (
        <article className='app-article' id='tic-tac-toe'>
            <h3>Tic Tac Toe</h3>
            <main className='board'>
                <BoardSqures board={board} updateBoard={updateBoard} />
                
                <Turn turn={turn} resetGame={resetGame} />

                <WinnerModal winner={winner} resetGame={resetGame} />
            </main>
        </article>
    )
}