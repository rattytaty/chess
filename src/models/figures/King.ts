import {ChessPiece, ChessPiecesNames} from "../ChessPiece.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import whiteLogo from "../../assets/figures/white-king.svg";
import blackLogo from "../../assets/figures/black-king.svg";

export class King extends ChessPiece{
    constructor(color:Colors, cell:Cell) {
        super(color, cell);
        this.name = ChessPiecesNames.KING
        this.logo = color===Colors.WHITE?whiteLogo:blackLogo
    }
    canMoveOnTargetCell(targetCell: Cell): boolean {
        if (!super.canMoveOnTargetCell(targetCell)) {
            return false;
        }
        return true
    }
}