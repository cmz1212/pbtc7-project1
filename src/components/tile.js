import React, { Component } from "react";

class Tile extends Component {
  render() {
    const { play, columnIndex, rowIndex, hover, out, value, board, curr } =
      this.props;
    let space = "open";

    if (value === 1) {
      space = "player1";
    } else if (value === 2) {
      space = "player2";
    } else if (value === 3) {
      space = "trap";
    }else if (value === 4) {
      space = "freeze";
    }


    return (
      <td>
        {rowIndex === 0 ? (
          <div
            
            className="top"
            onClick={() => play(columnIndex)}
            onMouseOver={() => hover(board, columnIndex, curr)}
            onMouseOut={() => out(columnIndex)}
          >
            <div id={`top${columnIndex}`} className={[space, "circle"].join(" ")}></div>
          </div>
        ) : (
          <div
            id={`${rowIndex}${columnIndex}`}
            className="tile"
            onClick={() => play(columnIndex)}
            onMouseOver={() => hover(board, columnIndex, curr)}
            onMouseOut={() => out(columnIndex)}
          >
            <div className={[space, "circle"].join(" ")}></div>
          </div>
        )}
      </td>
    );
  }
}

export default Tile;
