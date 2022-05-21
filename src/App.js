import React from "react";
import { TopBar } from "./component/TopBar/TopBar.js";
import { IncomeDetail, ExpenseDetail } from "./component/Details/Details.js";
import Main from "./component/Main/Main.js"
import { Grid } from "@mui/material";
import {GridContainer} from "./App.styles"

const App = () => {

    return(
      <>  
     <TopBar />
     <GridContainer container spacing={2}>
         <Grid item sm={3}> < IncomeDetail/> </Grid>
         <Grid item sm={4}> < Main /> </Grid>
         <Grid item sm={3}>< ExpenseDetail /> </Grid>
     </GridContainer>
     </>
    )
}

export default App;
