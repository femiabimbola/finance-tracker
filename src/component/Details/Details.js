import React from "react";
import { CardHeader, CardContent, Typography } from "@mui/material";
import {IncomeCard, ExpenseCard} from "./styles";

 const style = {
    borderBottom:'10px solid rgba(0, 255, 0, 0.6)',
    };

const style2 = {
        borderBottom:'10px solid rgba(255, 0, 0, 0.6)',
        };

export const IncomeDetail = ({title, amount}) => {
    return(
        <IncomeCard sx= { title === 'Income'? style : style2} >
            <CardHeader title={title} />
            <CardContent>
                <Typography> {amount }</Typography>
            </CardContent>
        </IncomeCard>
    )
}


export const ExpenseDetail = ({title}) => {
    return(
        <ExpenseCard>
            <CardHeader title={title}/>
            <CardContent>
                <Typography> N628</Typography>
            </CardContent>
        </ExpenseCard>
    )
}
