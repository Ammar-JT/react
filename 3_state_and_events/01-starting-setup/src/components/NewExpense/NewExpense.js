import React from "react";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';



const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const startEditingHandler = () => {
        setIsEditing(true)
    };

    const stopEditingHandler = () => {
        setIsEditing(false)
    };

    //onSaveExpenseData: is a custom attribute and event for the custom tag ExpenseForm
    //.. or just an custom event for the custom tag
    //The genius step here is that we can use this custom attr and deliver it to
    //..  child as props, and the trigger that props to trigger saveExpenseDataHandler()!!

    //saveExpenseDataHandler: is just a custom react and js function
    return(
        <div className="new-expense">
            {!isEditing && (
                <button onClick={startEditingHandler}>Add New Expense</button>
            )}
            {isEditing && (
                <ExpenseForm 
                onSaveExpenseData={saveExpenseDataHandler} 
                onCancle={stopEditingHandler} 
                />
            )}
        </div>
    )
};

export default NewExpense;