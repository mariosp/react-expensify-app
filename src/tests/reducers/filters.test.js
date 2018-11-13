import filtersReducer from '../../reducers/filters';
import moment from 'moment';
import { start } from 'repl';



test('should setup default filter values' , ()=>{
    //@@INIT type is redux first default type setup when store is created 

    const state = filtersReducer(undefined, {type:'@@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })


});

test('should set text on filter reducer' , ()=>{

    const action = {
        type:'SET_TEXT_FILTER',
        text: 'rent'
    }
    
    const state = filtersReducer(undefined, action);

    expect(state.text).toBe('rent')


});

test('should set sortby amount on filter reducer' , ()=>{

    const action = {
        type:'SORT_BY_AMOUNT'
    }
    
    const state = filtersReducer(undefined, action);

    expect(state.sortBy).toBe('amount');

});

test('should set sortby date on filter reducer' , ()=>{
    //the sortby is already by default date so we have to pass a state which is sortby: amount for testing
    //so we can see that the sortby changes from amount to date

    const action = {
        type:'SORT_BY_DATE'
    }

    const currentState = {
        text: '',
        sortBy: 'amount', //we change test sortby to amount for testing
        startDate: undefined,
        endDate: undefined
    }
    
    const state = filtersReducer(currentState, action);

    expect(state.sortBy).toBe('date');

});


test('should set startDate on filter reducer' , ()=>{
    const startDate = moment()
    const action = {
        type:'SET_START_DATE',
        startDate
    }
    
    const state = filtersReducer(undefined, action);

    expect(state.startDate).toEqual(startDate);


});

test('should set endDate on filter reducer' , ()=>{

    const endDate = moment()
    const action = {
        type:'SET_END_DATE',
        endDate
    }
    
    const state = filtersReducer(undefined, action);

    expect(state.endDate).toEqual(endDate);


});