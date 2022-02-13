import React, { useState } from 'react'; //we import this so the clickHandler can work!
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseItem = (props) => {
    //use the useState here only:
    //.. wanna now what the benifit of useState()? see قعر
    //useState receive your var and then return array that has
    //.. the same value in variable, and a function to assign the new value:
    //const [title, setTitle] = useState(props.title);

    const clickHandler = () => { // قعر this clickHandler won't work without useState()
                                //.. cuz ExpenseItem won't be called again just because clickHandler been called!!
                                //.. unless you use useState()!!
    };
   

    //return value
    return(
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                {/* 
                    <button onClick={clickHandler}>Change Title</button>
                */}
            </Card>
        </li>
        

    )
}

export default ExpenseItem;