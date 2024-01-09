export const saveGameToLocalStorage = ({ board, turn }) => {
    localStorage.setItem('board-vs-code', JSON.stringify(board))
	localStorage.setItem('turn-vs-code', JSON.stringify(turn))
}

export const resetGameLocalStorage = () => {
    window.localStorage.removeItem('board-vs-code')
    window.localStorage.removeItem('turn-vs-code')
}