import {Box, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {ChessBoard} from "../models/ChessBoard.ts";


type SessionInfoProps = {
    board: ChessBoard
}

export const SessionInfo = (props: SessionInfoProps) => {

    console.log(props.board.historyOfTurns)

    return <Box display="flex"
                borderRadius={10}
                m={5}
                bg="gray.700"
                color="gray.100"
    overscroll="contain"
    >


        <TableContainer>
            <Table size='sm'>
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Initial</Th>
                        <Th>Target</Th>
                        <Th>Captured</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {props.board.historyOfTurns.map((turn, index)=>

                        <Tr  height="45px">
                            <Td>{index+1})</Td>
                            <Td textAlign="center">{turn.initialCell}</Td>
                            <Td textAlign="center">{turn.targetCell}</Td>
                            <Td alignItems="center" textAlign="center">{turn.capturedPiece?<Box   display="flex" justifyContent="center"><Image boxSize="28px" src={turn.capturedPiece.logo!}/></Box>:"-"}</Td>
                        </Tr>
                    )}


                </Tbody>
            </Table>
        </TableContainer>


        {/*<Box width="150px">
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
        </Box>*/}
    </Box>
};
