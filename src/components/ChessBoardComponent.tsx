import {Box, Grid, GridItem} from "@chakra-ui/react";
import {CellComponent} from "./CellComponent.tsx";
import {FC, useEffect, useState} from "react";
import {ChessBoard} from "../models/ChessBoard.ts";
import {Cell} from "../models/Cell.ts";
import {Player} from "../models/Player.ts";
import {BoardMarks} from "./BoardMarks.tsx";

interface ChessBoardProps {
    board: ChessBoard
    setBoard: (board: ChessBoard) => void
    currentPlayer: Player | null
    changePlayer: () => void
}


export const ChessBoardComponent: FC<ChessBoardProps> = ({board, setBoard, currentPlayer, changePlayer}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
    const onCellClick = (cell: Cell) => {

        if (selectedCell !== cell && selectedCell?.chessPiece?.canMoveOnTargetCell(cell)) {
            selectedCell?.moveChessPieceOnTargetCell(cell)
            setSelectedCell(null)
            changePlayer()
        } else {
            if (cell.chessPiece?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
        }
    }
    const highlightCellsAvailableToMoveOn = () => {
        board.highlightCellsAvailableToMoveOn(selectedCell)
        updateBoard()
    }

    const updateBoard = () => {
        const newBoard = board.getCopyOfBoard()
        setBoard(newBoard)
    }
    useEffect(() => highlightCellsAvailableToMoveOn(), [selectedCell])



    return <Box m={5}>

       <BoardMarks>
           <Grid templateRows='repeat(8, 64px)'
                         templateColumns='repeat(8, 64px)'>
           {board.cells.map(row =>
               row.map(cell => <GridItem key={cell.id}>
                   <CellComponent cell={cell}
                                  selected={selectedCell?.x === cell.x && selectedCell.y === cell.y}
                                  onCellClick={onCellClick}
                   />
               </GridItem>)
           )}
       </Grid>
       </BoardMarks>

    </Box>
};
