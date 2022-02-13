import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    
    //(1) separated useState function for each input:
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /*   
    //(2) one useState function for all the inputs:
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });
    */

    const titleChangeHandler = (event) => {
        //(1) separated useState function for this input:
        setEnteredTitle(event.target.value);

        /*
        //(2) one useState set values function for all the inputs:
        //// ...userInput is a spread, which means you take the userInput object and make a copy here
        //// enteredTitle is an overRide for the enteredTitle which is already in the userInput object
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        });
        */

        /*
        //(2^2) the (2) won't work well in some cases cuz it get an outdated state values
        //.. so the solution is to do this:
        setUserInput((prevState) => { 
            //// ...prevState instead of ...user input directly
            return {
                ...prevState,
                enteredTitle: event.target.value,
            }
        })
        */
    };

    const amountChangeHandler = (event) => {
        //(1)
        setEnteredAmount(event.target.value);
        //(2)
        /*
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        });
        */
    };

    const dateChangeHandler = (event) => {
        //(1)
        setEnteredDate(event.target.value);
        //(2)
        /*
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        });
        */
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        //reset the inputs:
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label className="">Title</label>
                <input value={enteredTitle} type="text" onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label className="">Amount</label>
                <input value={enteredAmount} type="number" onChange={amountChangeHandler} min="0.01" step="0.01"></input>
            </div>
            <div className="new-expense__control">
                <label className="">Date</label>
                <input value={enteredDate} type="date" onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31"></input>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={}></button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;