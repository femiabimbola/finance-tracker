import React, { createContext, useReducer } from "react";


const initalState = JSON.parse(localStorage.getItem('transactions')) || [];
export const ExpenseTrackerContext = createContext(initalState);

const expenseReducer = ( state, action) => {
    let transactions;

    switch(action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload )
            localStorage.setItem('transactions', JSON.stringify(transactions))
            return transactions;

        case 'ADD_TRANSACTION':
            transactions =  [action.payload, ...state]
            localStorage.setItem('transactions', JSON.stringify(transactions))
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

    return (
        <ExpenseTrackerContext.Provider value ={{ addTransaction, deleteTransaction, transactions}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

