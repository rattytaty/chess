import {ChessPiece, ChessPiecesNames} from "../ChessPiece.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import whiteLogo from "../../assets/figures/white-knight.svg";
import blackLogo from "../../assets/figures/black-knight.svg";

export class Knight extends ChessPiece{
    constructor(color:Colors, cell:Cell) {
        super(color, cell);
        this.name = ChessPiecesNames.KNIGHT
        this.logo = color===Colors.WHITE?whiteLogo:blackLogo
    }
    canMoveOnTargetCell(targetCell: Cell): boolean {
        if (!super.canMoveOnTargetCell(targetCell)) {
            return false;
        }
        const dx = Math.abs(this.cell.x - targetCell.x);
        const dy = Math.abs(this.cell.y - targetCell.y);
        return (dx===1&&dy===2)||(dx===2&&dy===1)
    }
}