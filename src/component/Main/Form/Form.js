import React, {useState, useContext} from 'react';
import { FormControl, Grid, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import { ButtonStyle } from './Form.styles';
import { v4 as uuid } from 'uuid'; 

// import formatDate from '../../../utlis/formatDate'
import { ExpenseTrackerContext} from '../../../context/Context';
import { incomeCategories, expenseCategories } from '../../../constant/categories';


const initialState = {
    amount: '',
    type: '',
    category: '',
    date: new Date().toString(),
    // date:formatDate(new Date()),
}


const Form = () => {
    // Can a grid item be a container and an item alltogether
    const [formData, setFormData] = useState(initialState)
    const {addTransaction} = useContext(ExpenseTrackerContext);

    const selectedCategory = formData.type === 'Income'? incomeCategories : expenseCategories;

    const createTransaction = () => {
        if(Number.isNaN(Number(formData.amount)) || formData.date.includes('/')) return;

        const transaction = {...formData, amount: Number(formData.amount), id: uuid()}
        addTransaction(transaction);
        setFormData(initialState)
    }

    return(
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel> Select </InputLabel>
                    <Select value={formData.type} onChange={(e)=> setFormData({...formData, type:e.target.value})}>
                        <MenuItem value='Income'> Income </MenuItem>
                        <MenuItem value='Expense'> Expense </MenuItem>
                    </Select>
                 </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel> Category </InputLabel>
                    <Select value={formData.category} onChange={(e)=> setFormData({...formData, category:e.target.value})}>
                       {selectedCategory.map(c => <MenuItem value={c.type} key={c.type}> {c.type} </MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type='number' label='amount' value={formData.amount} onChange={(e)=> setFormData({...formData, amount:e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <TextField  fullWidth type='date' label='date' value={formData.date} onChange={(e)=> setFormData({...formData, date:e.target.value})}/>
            </Grid>
            <ButtonStyle variant='outlined' onClick={createTransaction}> Create Transaction </ButtonStyle>
        </Grid>
    )
}

export default Form; 