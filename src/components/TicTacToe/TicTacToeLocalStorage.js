export const saveGameToLocalStorage = ({ board, turn, score }) => {
    localStorage.setItem('board', JSON.stringify(board))
	localStorage.setItem('turn', JSON.stringify(turn))
	localStorage.setItem('score', JSON.stringify(score))
}

export const clearBoardLocalStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}

export const reset = () => {
    window.localStorage.removeItem('score')
}