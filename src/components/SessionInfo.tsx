import {Box, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {ChessBoard} from "../models/ChessBoard.ts";


type SessionInfoProps = {
    board: ChessBoard
}

export const SessionInfo = (props: SessionInfoProps) => {

    return <Box m={5}
                overflow="auto">


        <Box width="fit-content" borderRadius={10}
             bg="gray.700"
             color="gray.100">
            <TableContainer>
                <Table mb={2} size='sm'>
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>Initial</Th>
                            <Th>Target</Th>
                            <Th>Captured</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {props.board.historyOfTurns.map((turn, index) =>
                            <Tr height="45px">
                                <Td>{index + 1})</Td>
                                <Td textAlign="center">{turn.initialCell}</Td>
                                <Td textAlign="center">{turn.targetCell}</Td>
                                <Td alignItems="center" textAlign="center">{turn.capturedPiece ?
                                    <Box display="flex" justifyContent="center"><Image boxSize="28px"
                                                                                       src={turn.capturedPiece.logo!}/></Box> : "-"}</Td>
                            </Tr>
                        )}


                    </Tbody>
                </Table>
            </TableContainer>


        </Box></Box>
};
