import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/Context"

import { incomeCategories, expenseCategories, resetCategories } from "./constant/categories";

const useTransaction = (title) => {
    resetCategories();
    const {transaction }= useContext(ExpenseTrackerContext);
    const transactionType = transaction.filter((t) => t.type === title ) // Picks only transactions with income or expense
    const total = transactionType.reduce((acc, currentValue) => acc += currentValue.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;
    
    transactionType.forEach((t) => {
       const category = categories.find((c) => c.type === t.category) 
       if (category) category.amount += t.amount;
    })

    const filteredCategories = categories.filter(c => c.amount > 0);// Thats what the chart needs

    const chartData = {
        dataset:[{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor:filteredCategories.map((c) => c.color)
        }],
        label: filteredCategories.map(c => c.type)
    }
    return { filteredCategories, total, chartData }
}

export default useTransaction;