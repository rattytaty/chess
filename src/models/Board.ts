import {Cell} from "./Cell.ts";

export class Board {
    cells: Array<Array<Cell>> = []

    public initCells() {

        for (let i = 0; i < 8; i++) {//creating rows
            const row: Array<Cell> = []
            for (let j = 0; j < 8; j++) {//pushing cells to row created in outer cycle
            if ((i+j)%2!==0){
                row.push(new Cell())//white cells
            } else {
                row.push(new Cell())//black cells
            }
            }
            this.cells.push(row)
        }

    }
}