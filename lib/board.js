let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = [];
  for (let i = 0; i < 8; i++) {
    grid.push(new Array(8).fill(undefined));
  }


  grid[3][4] = new Piece("black");
  grid[4][3] = new Piece("black");
  grid[3][3] = new Piece("white");
  grid[4][4] = new Piece("white");
  return grid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
//  * throwing an Error if the position is invalid.
//  */
Board.prototype.getPiece = function (pos) {
  let piece = this.grid[pos[0]][pos[1]];
  return piece;
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
    let piece = this.getPiece(pos);
    if (piece === undefined){
      return false;
    }
    return piece.color === color;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  const piece = this.getPiece(pos);
  return piece !== undefined;

};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  if (!this.hasMove("black") && !this.hasMove("white")) {
    return true;
  }
  return false;
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if (pos[0] > 8 || pos[0] < 0 || pos[1] > 8 || pos[1] < 0){
    return false;
  }
  return true;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  const piece = new Piece(color);
  this.grid[pos[0]][pos[1]] = piece;

};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  this.grid.forEach ( row => { 
    const newRow = row.map ( ele => {
    if (!ele) { 
      return "_";
    } else {
      return ele.toString();
    }
  })
  console.log(newRow);
});
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
// 1. we can;t place same color next to each other
  
  const testPiece = this.getPiece(pos);
  // debugger;
  if (this.isOccupied(pos) || !this.isValidPos(pos)){
    return false;
  }

  for (let i = 0; i < Board.DIRS.length; i++) {
    const dir = Board.DIRS[i];
    const adjacentPiece = this.getPiece([pos[0] + dir[0], pos[1] + dir[1]]);
    //  debugger
    if (adjacentPiece !== undefined && adjacentPiece.color !== color) {
      let n = 2;

      let newPosition = [pos[0] + dir[0] * n, pos[1] + dir[1] * n];

      while (this.isValidPos(newPosition)) {
        newPosition = [pos[0] + dir[0] * n, pos[1] + dir[1] * n];
        // debugger;
        const newPiece = this.getPiece(newPosition);
        if (newPiece) {
          // debugger
          if (newPiece.color === color) {
            return true;
          }
        }
        else {
          return false;
        }
        n++;
      }
    }
  }
};


/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

module.exports = Board;
