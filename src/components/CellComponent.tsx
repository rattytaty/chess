import {Box, Image} from "@chakra-ui/react";
import React, {memo} from "react";
import {Cell} from "../models/Cell.ts";

type CellProps = {
    cell: Cell
    selected: boolean
    onCellClick: (cell: Cell) => void
}

export const CellComponent: React.FC<CellProps> = memo(({cell, selected, onCellClick}) => {


    return <Box width={16}
                height={16}
                onClick={() => onCellClick(cell)}
                bg={cell.available&&cell.chessPiece?"red.300" :(selected ? "green.300" :(cell.color === "white" ? "gray.50" : "gray.400"))}
                display="flex"
                justifyContent="center"
                alignItems="center">
        {cell.available&&!cell.chessPiece&& <Box boxSize="24px" borderRadius={50} opacity={0.5} bg="gray.600"></Box>}
        {cell.chessPiece?.logo && <Image boxSize="64px"
                                     alt={cell.chessPiece.name}
                                     src={cell.chessPiece.logo}/>}
    </Box>
})
