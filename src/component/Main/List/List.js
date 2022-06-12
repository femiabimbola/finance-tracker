import React, {useContext } from 'react';
import { List as MuiList, ListItem, ListItemAvatar, Avatar, Divider, ListItemText, ListItemSecondaryAction, IconButton} from '@mui/material';
import {Delete, MoneyOff} from "@mui/icons-material";

import { ExpenseTrackerContext } from '../../../context/Context';

const listStyle = {
    maxHeight: '130px', 
    overflow: 'auto',
    width:'400px'
}

const avatarIncome = {
    color: "white",
    backgroundColor: "green",
}

const avatarExpense = {
    color: "white",
    backgroundColor: "red",
}

const List = () => { 
 const {deleteTransaction, transactions} =  useContext(ExpenseTrackerContext)

    return (
        <MuiList dense={false} sx={listStyle}>
            {transactions.map((transaction) => (
               //<Slide direction='down' key={transaction.id} in mountOnEnter unmountOnExit>
                    <>
                    <ListItem >
                        <ListItemAvatar> 
                            <Avatar sx= { transaction.type === 'Income'? avatarIncome : avatarExpense }> 
                                <MoneyOff/> 
                            </Avatar> 
                        </ListItemAvatar>
                        <ListItemText sx= {{width:'100%'}} primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton onClick={()=> deleteTransaction(transaction.id)} edge='end' aria-label='delete'>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                    </>
                //</Slide>
            ))}
        </MuiList>
    )
}

export default List;