import {Colors} from "./Colors.ts";
import {ChessPiece} from "./ChessPiece.ts";
import {ChessBoard, historyOfMove} from "./ChessBoard.ts";

const cellsLettersNaming = {
    0 : "A",
    1 : "B",
    2 : "C",
    3 : "D",
    4 : "E",
    5 : "F",
    6 : "G",
    7 : "H",
}

const cellsNumbersNaming = {
    0 : 8,
    1 : 7,
    2 : 6,
    3 : 5,
    4 : 4,
    5 : 3,
    6 : 2,
    7 : 1,
}

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
        this.id = `${cellsLettersNaming[x]}${cellsNumbersNaming[y]}`
    }

    isCellEmpty(): boolean {
        return !this.chessPiece;
    }

    isEnemyOnTargetCell(targetCell: Cell): boolean {
        if (targetCell.chessPiece) {
            return this.chessPiece?.color !== targetCell.chessPiece.color
        }
        return false
    }

    isVerticalEmpty(targetCell: Cell): boolean {
        if (targetCell.x !== this.x) return false;
        const min = Math.min(this.y, targetCell.y);
        const max = Math.max(this.y, targetCell.y)
        for (let y = min + 1; y < max; y++) {
            if (!this.board.getCellByCoordinates(this.x, y).isCellEmpty())
                return false;

        }
        return true
    }

    isHorizontalEmpty(targetCell: Cell): boolean {
        if (targetCell.y !== this.y) return false;
        const min = Math.min(this.x, targetCell.x);
        const max = Math.max(this.x, targetCell.x)
        for (let x = min + 1; x < max; x++) {
            if (!this.board.getCellByCoordinates(x, this.y).isCellEmpty()) return false
        }
        return true
    }

    isDiagonalEmpty(targetCell: Cell): boolean {
        const absX = Math.abs(targetCell.x - this.x)
        const absY = Math.abs(targetCell.y - this.y)
        if (absY !== absX) return false
        const xDirection = this.x < targetCell.x ? 1 : -1
        const yDirection = this.y < targetCell.y ? 1 : -1
        for (let i = 1; i < absX; i++) {
            if (!this.board.getCellByCoordinates(this.x + xDirection * i, this.y + yDirection * i).isCellEmpty()) return false
        }
        return true
    }

    /*addCapturedPiece(chessPiece:ChessPiece) {
        chessPiece.color===Colors.WHITE ?this.board.capturedWhitePieces.push(chessPiece) :this.board.capturedBlackPieces.push(chessPiece)
    }*/

    addMoveToHistory(initialCell:Cell, targetCell:Cell){
        const move:historyOfMove = {initialCell:initialCell.id, targetCell:targetCell.id, capturedPiece:targetCell.chessPiece}
        this.board.historyOfTurns.push(move)
    }

    moveChessPieceOnTargetCell(targetCell: Cell) {
        if (this.chessPiece && this.chessPiece?.canMoveOnTargetCell(targetCell)) {
            this.chessPiece.moveChessPieceOnTargetCell(targetCell)
            this.addMoveToHistory(this, targetCell)
             /*if (targetCell.chessPiece){
                 this.addCapturedPiece(targetCell.chessPiece)
             }*/
            targetCell.chessPiece = this.chessPiece
            targetCell.chessPiece.cell = targetCell
            this.chessPiece = null
        }
    }


}