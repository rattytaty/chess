import {Box} from "@chakra-ui/react";
import React, {memo} from "react";

type CellProps = { color: "white" | "black" }

export const Cell: React.FC<CellProps> = memo(({color}) => {


    return <Box width={16}
                height={16}
                bg={color === "white" ? "orange.100" : "orange.600"}
                justifyContent="center"
                alignItems="center">

    </Box>
})
