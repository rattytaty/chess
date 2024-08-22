import {ChessPiece, ChessPiecesNames} from "../ChessPiece.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import whiteLogo from "../../assets/figures/white-rook.svg";
import blackLogo from "../../assets/figures/black-rook.svg";

export class Rook extends ChessPiece{
    constructor(color:Colors, cell:Cell) {
        super(color, cell);
        this.name = ChessPiecesNames.ROOK
        this.logo = color===Colors.WHITE?whiteLogo:blackLogo
    }
    canMoveOnTargetCell(targetCell: Cell): boolean {
        if (!super.canMoveOnTargetCell(targetCell)) {
            return false;
        }
        if(this.cell.isVerticalEmpty(targetCell)){
            return true
        }
        if(this.cell.isHorizontalEmpty(targetCell)){
            return true
        }
        return false
    }
}