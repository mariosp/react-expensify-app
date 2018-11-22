import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

//we use export on ExpenseList so we can test on the test library

export const ExpenseList = (props)=>(

    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
    {
        props.expenses.length == 0 ? (
           <p>No expenses</p>
        ) : ( 
            props.expenses.map( (expense)=>(
                <ExpenseListItem key={expense.id} {...expense}/>
                )
             
            )

        )
    }
    </div>

);


const mapStateToProps = (state) =>(
     {
         expenses : selectExpenses(state.expenses , state.filters)
     } 
     ) ;


const connectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default connectedExpenseList;