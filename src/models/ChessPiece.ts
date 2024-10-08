import {Colors} from "./Colors.ts";
import {Cell} from "./Cell.ts";
import chessPieceExample from "../../assets/figures/white-pawn.svg"

export enum ChessPiecesNames {
    PIECE = "",
    BISHOP = "bishop",
    KING = "king",
    KNIGHT = "knight",
    PAWN = "pawn",
    QUEEN = "queen",
    ROOK = "rook",
}

export class ChessPiece {
    color: Colors
    logo: null | typeof chessPieceExample
    cell: Cell
    name: ChessPiecesNames
    id: string

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.chessPiece = this
        this.name = ChessPiecesNames.PIECE
        this.logo = null
        this.id = cell.id
    }

    canMoveOnTargetCell(targetCell: Cell): boolean {
        if (targetCell.chessPiece?.color === this.color)
            return false
        if (targetCell.chessPiece?.name === ChessPiecesNames.KING)
            return false

        return true
    }

    moveChessPieceOnTargetCell(targetCell: Cell) {

    }

}