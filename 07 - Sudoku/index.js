// initialize sudoku board
var board = [
  [1, 9, 5, 7, 8, 4, 2, 0, 0],
  [3, 0, 6, 5, 2, 9, 1, 4, 7],
  [4, 7, 2, 1, 0, 3, 9, 8, 5],
  [6, 3, 7, 8, 5, 2, 4, 1, 9],
  [8, 5, 9, 6, 0, 1, 7, 3, 2],
  [2, 1, 4, 3, 9, 7, 6, 5, 8],
  [9, 2, 0, 4, 1, 8, 5, 7, 6],
  [5, 0, 8, 9, 7, 6, 3, 2, 1],
  [7, 6, 1, 2, 3, 5, 8, 0, 4],
];

var res;

function findEmpty(board) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] === 0) return [i, j];
    }
  }
  return [-1, -1];
}

function checkRow(board, row, value) {
  for (var i = 0; i < board[row].length; i++) {
    if (board[row][i] === value) {
      return false;
    }
  }

  return true;
}

function checkColumn(board, column, value) {
  for (var i = 0; i < board.length; i++) {
    if (board[i][column] === value) {
      return false;
    }
  }

  return true;
}

function checkSquare(board, row, column, value) {
  boxRow = Math.floor(row / 3) * 3;
  boxCol = Math.floor(column / 3) * 3;

  for (var r = 0; r < 3; r++) {
    for (var c = 0; c < 3; c++) {
      if (board[boxRow + r][boxCol + c] === value) return false;
    }
  }

  return true;
}

function checkValue(board, row, column, value) {
  if (
    checkRow(board, row, value) &&
    checkColumn(board, column, value) &&
    checkSquare(board, row, column, value)
  ) {
    return true;
  }

  return false;
}

function solve(board) {
  let emptySpot = findEmpty(board);
  let row = emptySpot[0];
  let col = emptySpot[1];

  if (row === -1) {
    return board;
  }

  for (let num = 1; num <= 9; num++) {
    if (checkValue(board, row, col, num)) {
      board[row][col] = num;
      solve(board);
    }
  }

  if (findEmpty(board)[0] !== -1) board[row][col] = 0;

  return (res = board);
}

solve(board);

console.log(res);
