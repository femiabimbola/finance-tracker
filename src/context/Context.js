import React, { createContext, useReducer } from "react";
import ContextReducer from './contextReducer';

const initalState = [];
export const ExpenseTrackerContext = createContext(initalState);


// Reducer takes in a state and an action
export const Provider = ({ children }) => {
        const [transactions, dispatch] = useReducer(ContextReducer, initalState)

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

