import {ChessPiece, ChessPiecesNames} from "../ChessPiece.ts";
import {Colors} from "../Colors.ts";
import {Cell} from "../Cell.ts";
import whiteLogo from "../../assets/figures/white-pawn.svg";
import blackLogo from "../../assets/figures/black-pawn.svg";

export class Pawn extends ChessPiece {

    isFirstStep: boolean=true

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.name = ChessPiecesNames.PAWN
        this.logo = color === Colors.WHITE ? whiteLogo : blackLogo

    }

    canMoveOnTargetCell(targetCell: Cell): boolean {
        if(!super.canMoveOnTargetCell(targetCell))
            return false;
        const direction = this.cell.chessPiece?.color === Colors.BLACK ? 1 : -1
        const firstStepDirection = this.cell.chessPiece?.color === Colors.BLACK ? 2 : -2

        if ((targetCell.y === this.cell.y + direction || this.isFirstStep
                && (targetCell.y === this.cell.y + firstStepDirection))
            && targetCell.x === this.cell.x
            && this.cell.board.getCellByCoordinates(targetCell.x, targetCell.y).isCellEmpty()) {
            return true;
        }

        if(targetCell.y === this.cell.y + direction
            && (targetCell.x === this.cell.x + 1 || targetCell.x === this.cell.x - 1)
            && this.cell.isEnemyOnTargetCell(targetCell)) {
            return true;
        }

        return false;
    }

    moveChessPieceOnTargetCell(targetCell:Cell){
        super.moveChessPieceOnTargetCell(targetCell)
        this.isFirstStep=false
    }
}