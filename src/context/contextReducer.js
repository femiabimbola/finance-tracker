// Reducer => accept a old state and function and give a new state
// the actions will be accepting will be add transaction and delete transaction
//The state will be the transaction
// Also, let's talk about reassigning

const contextReducer = ( state, action) => {
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

export default contextReducer;