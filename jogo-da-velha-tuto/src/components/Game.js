import Board from "./Board";

export default function Game() {
    return (
        <div className="game">
            <div className="board">
                <Board />
            </div>
            <div className="game-info">
                <ol>{/* TODO: */}</ol>
            </div>

        </div>
    )
}