import {Box, Flex, HStack, VStack} from "@chakra-ui/react";
import React, {FC} from "react";

export const BoardMarks: FC<{ children: React.ReactNode }> = ({children}) => {
    const verticalMarks = [8, 7, 6, 5, 4, 3, 2, 1]
    const horizontalMarks = ["A", "B", "C", "D", "E", "F", "G", "H"]
    return <div>
        <Flex>
            <VStack w="20px" spacing={0}>
            {verticalMarks.map(i => <Box key={i} h="64px" color="gray.100">{i}</Box>)}
        </VStack>
            {children}
        </Flex>

        <HStack h="20px" spacing={0}>
            <Box w="20px"></Box>
            {horizontalMarks.map(i => <Box key={i} w="64px" color="gray.100">{i}</Box>)}
        </HStack>
    </div>
};
