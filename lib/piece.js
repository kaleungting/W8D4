/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
  this.color = color;
}

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
  if (this.color === 'black') {
    return 'white';
  } else {
    return 'black';
  }
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
  if (this.color === 'black'){
    this.color = 'white';
  } else {
    this.color = 'black';
  }
  return this.color;
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
  let color;
  if (this.color === 'black') {
    color = "B";
  } else {
    color = "W";
  }
  return color;
};

module.exports = Piece;
