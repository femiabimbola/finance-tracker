import React, {useContext } from 'react';
import { List as MuiList, Slide, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton} from '@mui/material';
import {Delete, MoneyOff} from "@mui/icons-material";

import { ExpenseTrackerContext } from '../../../context/Context';

const List = () => {

 const {deleteTransaction, transactions} =  useContext(ExpenseTrackerContext)

    return (
        <MuiList dense={false} sx={{maxHeight: '150px', overflow: 'auto',}}>
            {transactions.map((transaction) => (
                <Slide direction='down' key={transaction.id} in mountOnEnter>
                    <ListItem>
                        <ListItemAvatar> 
                            <Avatar> <MoneyOff/> </Avatar> 
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton onClick={()=> deleteTransaction(transaction.id)} edge='end' aria-label='delete'>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MuiList>
    )
}

export default List;