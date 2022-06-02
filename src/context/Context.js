import React, { createContext, useReducer } from "react";
// import ContextReducer from './contextReducer';

const initalState = [];
export const ExpenseTrackerContext = createContext(initalState);


const expenseReducer = ( state, action) => {
    let transactions;

    switch(action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload )
            return transactions
        case 'ADD_TRANSACTION':
            transactions =  [action.payload, ...state]
            return transactions
        default:
            return state;

    }
}
// Reducer takes in a state and an action
export const Provider = ({ children }) => {
        const [transactions, dispatch] = useReducer(expenseReducer, initalState)

        const deleteTransaction = (id) => {
            dispatch({type:'DELETE_TRANSACTION', payload: id })
        }

        const addTransaction = (transaction) => {
            dispatch({type:'ADD_TRANSACTION', payload:transaction})
        }

        console.log(transactions);

    return (
        <ExpenseTrackerContext.Provider value ={{ addTransaction, deleteTransaction, transactions}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

