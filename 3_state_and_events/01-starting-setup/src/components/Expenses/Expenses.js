import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = props => {
    const [filteredYear, setFilterYear] = useState('2020');

    const filterChangeHanlder = selectedYear => {
        setFilterYear(selectedYear);
    };

    //make a new array from the original array that match the condition indside filter()
    //.. 
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    
    

    console.log(props.items)
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHanlder}/>

            {/* 
                the key attribute is important for browser, so it can know that it's a unique tag,
                so if a new tag is added no need to update all of them.
             */}

            <ExpenseList items={filteredExpenses}></ExpenseList>
        </Card>
    );
}

export default Expenses;