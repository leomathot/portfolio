import { useState } from 'react'
import { BoardSqures } from './TicTacToeBoardSquares'
import { Turn } from './TicTacToeTurn'
import { TURNS, WINNING_MOVES } from './TicTacToeConstants'
import { checkWinner, checkEndGame } from './TicTacToeLogic'
import { WinnerModal } from './TicTacToeWinnerModal'
import { saveGameToLocalStorage, resetGameLocalStorage } from './TicTacToeLocalStorage'

export default function TicTacToeVsCode() {

    const indexesArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
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
    const changeStart = () => setStart(start === TURNS.X ? TURNS.O : TURNS.X)

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
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)
        // if the mark is X, switch to O, and vice versa
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
        // save in local storage
        saveGameToLocalStorage({ board: newBoard, turn: newTurn })
        // check if there is a winner
        const newWinner = checkWinner(newBoard) // returns  or O if any won or NULL if did not
        if (newWinner[0]) {
            setWinner(newWinner[0])
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
                const xSquares = indexesArr.filter(i => board[i] === 'x');
                const oSquares = indexesArr.filter(i => board[i] === 'o');
                const freeSquares = indexesArr.filter(indEl =>
                    !xSquares.includes(indEl) && !oSquares.includes(indEl))
    
                const possibleLinesO = WINNING_MOVES.filter(wMove => 
                    wMove.every(wMoveIdx => board[wMoveIdx] === "o" || board[wMoveIdx] === null))
    
                // Check if computer is about to win
                const computerWinningLines = possibleLinesO.filter(line => 
                    line.filter(idx => board[idx] === "o").length === 2);
    
                // Check if user is about to win
                const possibleLinesX = WINNING_MOVES.filter(wMove => 
                    wMove.every(wMoveIdx => board[wMoveIdx] === "x" || board[wMoveIdx] === null))
                const userWinningLines = possibleLinesX.filter(line => 
                    line.filter(idx => board[idx] === "x").length === 2);
    
                let move = null;
                // If computer is about to win, play the winning move
                if (computerWinningLines.length > 0) {
                    const computerWinningLine = computerWinningLines[0];
                    move = computerWinningLine.find(idx => board[idx] === null);
                } 
                // If user is about to win, block it
                else if (userWinningLines.length > 0) {
                    const userWinningLine = userWinningLines[0];
                    move = userWinningLine.find(idx => board[idx] === null);
                } 
                else if (possibleLinesO.length > 0) {
                    // Prioritize lines with 2 'O's
                    const twoOsLines = possibleLinesO.filter(line => 
                        line.filter(idx => board[idx] === "o").length === 2);
                    // Prioritize lines with 1 'O'
                    const oneOsLines = possibleLinesO.filter(line => 
                        line.filter(idx => board[idx] === "o").length === 1);
    
                    let selectedLine;
                    if (twoOsLines.length > 0) {
                        // Select a random line with 2 'O's
                        selectedLine = twoOsLines[Math.floor(Math.random() * twoOsLines.length)];
                    } else if (oneOsLines.length > 0) {
                        // Select a random line with 1 'O'
                        selectedLine = oneOsLines[Math.floor(Math.random() * oneOsLines.length)];
                    } else {
                        // If no prioritized lines, select a random line
                        selectedLine = possibleLinesO[Math.floor(Math.random() * possibleLinesO.length)];
                    }
                    move = selectedLine.find(idx => board[idx] === null);
                } else {
                    // Otherwise, make a random move
                    move = freeSquares[Math.floor(Math.random() * freeSquares.length)];
                }
    
                // Computer plays
                updateBoard(move);
            }, 800)
        }
    }
    
    codePlay()

    // output

    return (
        <article className='app-article py-10' id='tic-tac-toe'>
            <h3 className='font-[600] mb-3'>Tic Tac Toe</h3>

            <div className='flex items-center w-[276px] justify-between gap-1 text-zinc-300 font-[600]'>
                <div className='flex gap-2 justify-center bg-zinc-900/20 py-1 px-3 w-28 text-sm text-cyan-300'>
                    <span>You</span>
                </div>
                <div>
                    vs
                </div>
                <div className='flex gap-2 justify-center bg-zinc-900/20 py-1 px-3 w-28 text-sm text-cyan-300'>
                    <span>Computer</span>
                </div>
            </div>

            <div className='board'>
                <BoardSqures board={board} updateBoard={turn === TURNS.X ? updateBoard : () => null} />

                <Turn turn={turn} resetGame={resetGame} />

                <WinnerModal winner={winner} resetGame={resetGame} />
            </div>
        </article>
    )
}