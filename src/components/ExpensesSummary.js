import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import 'numeral/locales/fr';


export const ExpensesSummary = (props)=>{

    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses'

return (
    <div className="page-header">
    <div className='content-container'>
       <h2 className="page-header__title">Viewing <span>{props.expenses.length}</span> {expenseWord} totalling <span>{numeral(props.total/100).format('$ #,##0.00')}</span> </h2>
       <div className="page-header__action">
            <Link className="button" to="/create">Add Expense</Link>
       </div>
    </div>
    </div>

);

}



const mapStateToProps = (state) =>{
    const expenses =  selectExpenses(state.expenses , state.filters);
    return( 
    {
        expenses : expenses,
        total: expensesTotal(expenses)
    } 
)
} ;


const connectedExpensesSummary = connect(mapStateToProps)(ExpensesSummary);

export default connectedExpensesSummary;
