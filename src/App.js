import React from "react";
import { TopBar } from "./component/TopBar/TopBar.js";
import { IncomeDetail } from "./component/Details/Details.js";
import Main from "./component/Main/Main.js"
import { Grid } from "@mui/material";
import {GridContainer} from "./App.styles"

const App = () => {

    return(
      <>  
     <TopBar />
     <GridContainer container spacing={2} sx={{height:'100vh'}}>
        <Grid item xs={12} sm={3} >
            <IncomeDetail title="Income" amount={200}/> 
        </Grid>
        <Grid item xs={12} sm={4}>   
          <Main />
        </Grid>
        <Grid item xs={12} sm={3}>
         <IncomeDetail title='Expense' amount={500}/> 
        </Grid>
     </GridContainer>
     </>
    )
}

export default App;
