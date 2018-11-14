import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import 'numeral/locales/fr';



export const ExpensesSummary = (props)=>(

    <div>
    {numeral.locale('fr')}
        <h2>Viewing {props.expenses.length} expenses totalling {numeral(props.total/100).format('$ #,##0.00')} </h2>
    </div>

);



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
