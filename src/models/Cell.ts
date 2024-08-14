import {Colors} from "./Colors.ts";
import {Figure} from "./Figure.ts";
import {Board} from "./Board.ts";

export class Cell {
 readonly x:number
 readonly y:number
 readonly color:Colors
    figure: Figure|null
    board:Board
    available:boolean
    id:string

    constructor(x:number, y:number, color:Colors, board:Board, figure:Figure|null) {
     this.x = x;
     this.y = y;
     this.color = color;
     this.figure = figure;
     this.board = board;
     this.available = false;
     this.id = `${x}${y}`
    }

}