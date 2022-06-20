import React from "react";
import 'chart.js/auto'
import { CardHeader, CardContent, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import {IncomeCard} from "./styles";
import useTransaction from "../../useTransaction";

 const style = {
    borderBottom:'10px solid rgba(0, 255, 0, 0.6)',
    };

const style2 = {borderBottom:'10px solid rgba(255, 0, 0, 0.6)'};

export const IncomeDetail = ({title}) => {

    const {total, chartData} = useTransaction(title);
    console.log(chartData)

    return(
        <IncomeCard sx= { title === 'Income'? style : style2} >
            <CardHeader title={title} />
            <CardContent>
                <Typography> ₦ {total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </IncomeCard>
    )
}

