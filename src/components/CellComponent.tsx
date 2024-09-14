import {Box, Image} from "@chakra-ui/react";
import React, {memo} from "react";
import {Cell} from "../models/Cell.ts";
import {DotOfAvailability} from "./DotOfAvailability.tsx";

type CellProps = {
    cell: Cell
    selected: boolean
    onCellClick: (cell: Cell) => void
}

export const CellComponent: React.FC<CellProps> = memo(({cell, selected, onCellClick}) => {

    const onDrop = (event: React.DragEvent<HTMLDivElement>, cell: Cell) => {
        event.preventDefault()
        onCellClick(cell)
    }
    return <Box width={{base: "40px", sm: "52px", md: "64px"}}
                height={{base: "40px", sm: "52px", md: "64px"}}
                onDrag={() => onCellClick(cell)}
                onDragOver={e => e.preventDefault()}
                onDrop={event => onDrop(event, cell)}
                onClick={() => onCellClick(cell)}
                bg={cell.available && cell.chessPiece ? "red.300" : (selected ? "green.300" : (cell.color === "white" ? "gray.50" : "gray.400"))}
                display="flex"
                justifyContent="center"
                alignItems="center">
        {cell.available && !cell.chessPiece && <DotOfAvailability/>}
        {cell.chessPiece?.logo && <Image boxSize={{base: "40px", sm: "52px", md: "64px"}}
                                         alt={cell.chessPiece.name}
                                         src={cell.chessPiece.logo}/>}
    </Box>
})
