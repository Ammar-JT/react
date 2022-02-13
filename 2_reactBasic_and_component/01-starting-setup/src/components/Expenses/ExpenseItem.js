import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
const ExpenseItem = (props) => {
    /*
    //hard code js variables initialize in the same component:
    const expenseDate = new Date('2022,02,09');
    console.log(expenseDate);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    */

    //return value
    return(
        <Card className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>

    )
}

export default ExpenseItem;