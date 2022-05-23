import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    return(
        <Card>
            <CardHeader title="Expense Tracker" subheader='Made by Abimbola Femi'/>
            <CardContent>
                <Typography> Total balance N900</Typography>
                <Typography> Input in words</Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent>
                <Grid container>
                    <Grid item>
                       <List />
                    </Grid>
                </Grid>
            </CardContent>

        </Card>
    )
}

export default Main;