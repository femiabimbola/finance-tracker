import React from 'react';
import { Typography} from "@mui/material";
import AppBarStyle from "./styles.js"

export const TopBar = () => {
     
    return(
        <AppBarStyle >
                <Typography variant='h5'> Expense Tracker </Typography>
        </AppBarStyle>
    )
}

