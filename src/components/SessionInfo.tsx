import {
    Box,
    Divider,
    Image,
    Table,
    TableCaption,
    TableContainer,
    Tbody, Td,
    Text, Tfoot,
    Th,
    Thead,
    Tr,
    VStack
} from "@chakra-ui/react";
import {ChessBoard} from "../models/ChessBoard.ts";


type SessionInfoProps = {
    board: ChessBoard
}

export const SessionInfo = (props: SessionInfoProps) => {

    return <Box display="flex"
                width="300px"
                borderRadius={10}
                m={5}
                bg="gray.700"
                color="gray.100">






        <Box width="150px">
            <Text textAlign="center">Captured pieces:</Text>
            <Box display="flex"
                 width="150px">
                <VStack width="75px">{props.board.capturedBlackPieces.map(piece => piece.logo && <Image boxSize="32px"
                                                                                                        alt={piece.name}
                                                                                                        src={piece.logo}/>)}</VStack>
                <VStack width="75px">{props.board.capturedWhitePieces.map(piece => piece.logo && <Image boxSize="32px"
                                                                                                        alt={piece.name}
                                                                                                        src={piece.logo}/>)}</VStack>
            </Box>
        </Box>

        <Box width="150px">
            <Text  textAlign="center">History:</Text>




        </Box>
    </Box>
};
