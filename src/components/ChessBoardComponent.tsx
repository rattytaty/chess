import {Grid, GridItem} from "@chakra-ui/react";
import {CellComponent} from "./CellComponent.tsx";
import {FC, useEffect, useState} from "react";
import {ChessBoard} from "../models/ChessBoard.ts";
import {Cell} from "../models/Cell.ts";

interface ChessBoardProps {
    board: ChessBoard
    setBoard: (board: ChessBoard) => void
}


export const ChessBoardComponent: FC<ChessBoardProps> = ({board, setBoard}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
    const onCellClick = (cell: Cell) => {
        if (selectedCell !== cell && selectedCell?.chessPiece?.canMoveOnTargetCell(cell)) {
            selectedCell?.moveChessPieceOnTargetCell(cell)
            setSelectedCell(null)
        } else {
            setSelectedCell(cell)
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

    return <Grid templateRows='repeat(8, 64px)'
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
};
