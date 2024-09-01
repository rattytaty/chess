import {Cell} from "./Cell.ts";
import {Colors} from "./Colors.ts";
import {Queen} from "./figures/Queen.ts";
import {Bishop} from "./figures/Bishop.ts";
import {King} from "./figures/King.ts";
import {Knight} from "./figures/Knight.ts";
import {Pawn} from "./figures/Pawn.ts";
import {Rook} from "./figures/Rook.ts";
import {ChessPiece} from "./ChessPiece.ts";

export class ChessBoard {

    cells: Array<Array<Cell>> = []

    capturedWhitePieces:Array<ChessPiece>=[]
    capturedBlackPieces:Array<ChessPiece>=[]

    public initCells() {
        for (let i = 0; i < 8; i++) {//creating rows
            const row: Array<Cell> = []
            for (let j = 0; j < 8; j++) {//pushing cells to row created in outer cycle
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(j, i, Colors.BLACK, this, null))//black cells
                } else {
                    row.push(new Cell(j, i, Colors.WHITE, this, null))//white cells
                }
            }
            this.cells.push(row)
        }
    }

    public getCellByCoordinates(x: number, y: number): Cell {
        return this.cells[y][x]
    }

    public highlightCellsAvailableToMoveOn(cell: Cell | null) {
        for (let i = 0; i < this.cells.length; i++) {
            const row = this.cells[i]
            for (let j = 0; j < row.length; j++) {
                const targetCell = row[j]
                targetCell.available = !!cell?.chessPiece?.canMoveOnTargetCell(targetCell)
            }
        }
    }

    public getCopyOfBoard() {
        const newBoard = new ChessBoard()
        newBoard.cells = this.cells
        newBoard.capturedBlackPieces=this.capturedBlackPieces
        newBoard.capturedWhitePieces=this.capturedWhitePieces
        return newBoard
    }

    private initBishops() {
        new Bishop(Colors.BLACK, this.getCellByCoordinates(2, 0))
        new Bishop(Colors.BLACK, this.getCellByCoordinates(5, 0))
        new Bishop(Colors.WHITE, this.getCellByCoordinates(2, 7))
        new Bishop(Colors.WHITE, this.getCellByCoordinates(5, 7))
    }

    private initKings() {
        new King(Colors.BLACK, this.getCellByCoordinates(4, 0))
        new King(Colors.WHITE, this.getCellByCoordinates(4, 7))
    }

    private initKnights() {
        new Knight(Colors.BLACK, this.getCellByCoordinates(1, 0))
        new Knight(Colors.BLACK, this.getCellByCoordinates(6, 0))
        new Knight(Colors.WHITE, this.getCellByCoordinates(1, 7))
        new Knight(Colors.WHITE, this.getCellByCoordinates(6, 7))
    }

    private initPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCellByCoordinates(i, 1))
        }
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.WHITE, this.getCellByCoordinates(i, 6))
        }
    }

    private initQueens() {
        new Queen(Colors.BLACK, this.getCellByCoordinates(3, 0))
        new Queen(Colors.WHITE, this.getCellByCoordinates(3, 7))
    }

    private initRooks() {
        new Rook(Colors.BLACK, this.getCellByCoordinates(0, 0))
        new Rook(Colors.BLACK, this.getCellByCoordinates(7, 0))
        new Rook(Colors.WHITE, this.getCellByCoordinates(0, 7))
        new Rook(Colors.WHITE, this.getCellByCoordinates(7, 7))
    }

    public initChessPieces() {
        this.initBishops()
        this.initKings()
        this.initKnights()
        this.initPawns()
        this.initQueens()
        this.initRooks()
    }
}