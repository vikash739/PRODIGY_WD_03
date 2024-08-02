


let currentPlayer = 'X';
let gameActive = true;
const board = ['', '', '', '', '', '', '', '', ''];


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        document.getElementById('status').textContent = "It's a draw!";
        gameActive = false;
    }
}


function handleCellClick(e) {
    const cell = e.target;
    const cellIndex = parseInt(cell.getAttribute('data-cell-index'));

    if (!gameActive || board[cellIndex] !== '') return;

    board[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
    handleResultValidation();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}


function restartGame() {
    board.fill('');
    cells.forEach(cell => cell.textContent = '');
    document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
    gameActive = true;
}


const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
document.getElementById('restartbtn').addEventListener('click', restartGame);
