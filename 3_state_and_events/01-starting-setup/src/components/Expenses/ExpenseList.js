import React from "react";
import './ExpenseList.css';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = props => {

    let expensesContent = <p className="expenses-list__fallback">No expense found.</p>;
    
    if(props.items.length > 0) {
        expensesContent = props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <ul className="expenses-list">
            {expensesContent};
        </ul>
    )
}




export default ExpenseList;