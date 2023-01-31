import React from 'react';
import ExpenseItems from './ExpenseItems';
import './ExpensesList.css'
const ExpensesList = props => {
     
    if ( props.items.length === 0 ) {
        return <h2 className='expenses-list_fallback'>No expenses found.</h2>;
        }

        return <ul className='expense-list'>
            {
                props.items.map((expense) => (
                    <ExpenseItems 
                     key = {expense.id}
                     title = {expense.title}
                     amount = {expense.amount}
                     date = {expense.date}
                    />
                ))
            }
        </ul>
    };
    
     
export default ExpensesList;