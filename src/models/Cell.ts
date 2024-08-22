import {Colors} from "./Colors.ts";
import {ChessPiece} from "./ChessPiece.ts";
import {ChessBoard} from "./ChessBoard.ts";

export class Cell {
    readonly x: number
    readonly y: number
    readonly color: Colors
    chessPiece: ChessPiece | null
    board: ChessBoard
    available: boolean
    id: string

    constructor(x: number, y: number, color: Colors, board: ChessBoard, chessPiece: ChessPiece | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.chessPiece = chessPiece;
        this.board = board;
        this.available = false;
        this.id = `${x}${y}`
    }

    moveChessPieceOnTargetCell(targetCell: Cell) {
        if (this.chessPiece && this.chessPiece?.canMoveOnTargetCell(targetCell)) {
            this.chessPiece.canMoveOnTargetCell(targetCell)
            targetCell.chessPiece = this.chessPiece
            this.chessPiece = null
        }
    }

}