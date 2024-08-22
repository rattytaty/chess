import {ChessPiece, ChessPiecesNames} from "../ChessPiece.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import blackLogo from "../../assets/figures/black-bishop.svg"
import whiteLogo from "../../assets/figures/white-bishop.svg"

export class Bishop extends ChessPiece{
    constructor(color:Colors, cell:Cell) {
        super(color, cell);
        this.name = ChessPiecesNames.BISHOP
        this.logo = color===Colors.WHITE?whiteLogo:blackLogo
    }

    canMoveOnTargetCell(targetCell: Cell): boolean {
        if (!super.canMoveOnTargetCell(targetCell)) {
            return false;
        }
        if (this.cell.isDiagonalEmpty(targetCell)) {
            return true
        }
        return false
    }
}