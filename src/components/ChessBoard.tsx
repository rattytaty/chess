import {Grid, GridItem} from "@chakra-ui/react";
import {Cell} from "./Cell.tsx";

export const ChessBoard = () => {
    return <Grid  templateRows='repeat(8, 64px)'
                  templateColumns='repeat(8, 64px)'>
        <GridItem><Cell color="white"/></GridItem>

    </Grid>
};
