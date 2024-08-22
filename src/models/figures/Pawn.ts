import {ChessPiece, ChessPiecesNames} from "../ChessPiece.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import whiteLogo from "../../assets/figures/white-pawn.svg";
import blackLogo from "../../assets/figures/black-pawn.svg";

export class Pawn extends ChessPiece{
    constructor(color:Colors, cell:Cell) {
        super(color, cell);
        this.name = ChessPiecesNames.PAWN
        this.logo = color===Colors.WHITE?whiteLogo:blackLogo
    }
    canMoveOnTargetCell(targetCell: Cell): boolean {
        if (!super.canMoveOnTargetCell(targetCell)) {
            return false;
        }
        return true
    }
}