import {Box, HStack, Image} from "@chakra-ui/react";
import {ChessBoard} from "../models/ChessBoard.ts";


type SessionInfoProps = {
    board: ChessBoard
}

export const SessionInfo = (props: SessionInfoProps) => {

    return <Box boxSize="500px" m={10} bg="gray.700" color="gray.100">

        <HStack>{props.board.capturedBlackPieces.map(piece=>piece.logo&&<Image boxSize="32px"
                                                                   alt={piece.name}
                                                                   src={piece.logo}/>)}</HStack>
        <HStack>{props.board.capturedWhitePieces.map(piece=>piece.logo&&<Image boxSize="32px"
                                                                   alt={piece.name}
                                                                   src={piece.logo}/>)}</HStack>
    </Box>
};
