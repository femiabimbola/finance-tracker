import React from "react";
import { CardHeader, CardContent, Typography } from "@mui/material";
import {IncomeCard, ExpenseCard} from "./styles";

export const IncomeDetail = ({title}) => {
    return(
        <IncomeCard>
            <CardHeader title= {title}/>
            <CardContent>
                <Typography> N688</Typography>
            </CardContent>
        </IncomeCard>
    )
}

export const ExpenseDetail = ({title}) => {
    return(
        <ExpenseCard>
            <CardHeader title= {title}/>
            <CardContent>
                <Typography> N628</Typography>
            </CardContent>
        </ExpenseCard>
    )
}
