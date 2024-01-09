import { useState } from 'react'
import { BoardSqures } from './TicTacToeBoardSquares'
import { Turn } from './TicTacToeTurn'
import { TURNS } from './TicTacToeConstants'
import { checkWinner, checkEndGame } from './TicTacToeLogic'
import { WinnerModal } from './TicTacToeWinnerModal'
import { saveGameToLocalStorage, resetGameLocalStorage } from './TicTacToeLocalStorage'

export default function TicTacToeVsCode() {

    // borad [0,0,0,0,0,0,0,0,0]
    const [board, setBoard] = useState(() => {
        const boardFromLocalStorage = window.localStorage.getItem('board-vs-code')
        return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
    })
        
    // 'x' or 'o'
    const [turn, setTurn] = useState(() => {
        const turnFromLocalStorage = window.localStorage.getItem('turn-vs-code')
        return turnFromLocalStorage ? JSON.parse(turnFromLocalStorage) : TURNS.X
    })

    // null => no winner, false => tie
    const [winner, setWinner] = useState(null) 

    // who starts the round
    const [start, setStart] = useState(TURNS.O)
    // flip the start
    const changeStart = () => setStart( start === TURNS.X ? TURNS.O : TURNS.X )

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(start)
        setWinner(null)
        resetGameLocalStorage()
    }

    // original click handler --> user has to play

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

    // computer has to play

    const codePlay = () => {
        if (turn === TURNS.O) {
            setTimeout(() => {
                const indexesArr = board.map((sq, idx) => idx);
                const xSquares = indexesArr.filter(i => board[i] === 'x');
                const oSquares = indexesArr.filter(i => board[i] === 'o');

                const freeSquares = indexesArr.filter(indEl => 
                    !xSquares.includes(indEl) && !oSquares.includes(indEl))

                const rdmPlayIndex = freeSquares[Math.floor(Math.random() * freeSquares.length)] 

                updateBoard(rdmPlayIndex)

                console.log(board)
                console.log(xSquares)
                console.log(oSquares)
                console.log(freeSquares)
                console.log(rdmPlayIndex)
            }, 500)
        }
    }

    codePlay()


    // output
    
    return (
        <article className='app-article' id='tic-tac-toe'>
            <h3>Tic-Tac-Toe Vs Computer</h3>
            <main className='board'>
                <BoardSqures board={board} updateBoard={turn === TURNS.X ? updateBoard : () => null} />
                
                <Turn turn={turn} resetGame={resetGame} />

                <WinnerModal winner={winner} resetGame={resetGame} />
            </main>
        </article>
    )
}