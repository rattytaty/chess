import {Box, Flex, HStack, VStack} from "@chakra-ui/react";
import React, {FC} from "react";

export const BoardMarks: FC<{ children: React.ReactNode }> = ({children}) => {
    const verticalMarks = [8, 7, 6, 5, 4, 3, 2, 1]
    const horizontalMarks = ["A", "B", "C", "D", "E", "F", "G", "H"]
    return <div>
        <Flex>
            <VStack w="15px" spacing={0}>
                {verticalMarks.map(i => <Box key={i}
                                             h={{base: "40px", sm: "52px", md: "64px"}}
                                             color="gray.100">{i}</Box>)}
            </VStack>
            {children}
        </Flex>
        <HStack h="15px"
                spacing={0}>
            <Box w="15px"></Box>
            {horizontalMarks.map(i => <Box key={i}
                                           w={{base: "40px", sm: "52px", md: "64px"}}
                                           color="gray.100">{i}</Box>)}
        </HStack>
    </div>
};
