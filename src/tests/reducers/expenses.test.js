import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import uuid from 'uuid';
import expenses from '../fixtures/expenses';


test('should set default values on expenses reducer' , ()=>{

   
    const state = expensesReducer(undefined, {type:'@@INIT'});

    expect(state).toEqual([]);


});

//ADD EXPENSE
test('should set ADD EXPENSE on expenses reducer' , ()=>{
    const expense ={
        id:'4',
        description: 'test',
        note: 'e',
        amount:109500,
        createdAt: 20000
    }
   const action ={
        type: 'ADD_EXPENSE',
        expense
    }
    
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses,expense]);


});

//REMOVE EXPENSE
test('remove expense reducer' , ()=>{

    const action ={
         type: 'REMOVE_EXPENSE',
         id : expenses[1].id
     }
     
     const state = expensesReducer(expenses, action);
 
     expect(state).toEqual([expenses[0],expenses[2]]);
 
 
 });

 //SOULD NOT REMOVE EXPENSE
test('should not remove expense if id is not found' , ()=>{

    const action ={
         type: 'REMOVE_EXPENSE',
         id : '-1'
     }
     
     const state = expensesReducer(expenses, action);
 
     expect(state).toEqual(expenses);
 
 
 });


 //EDIT EXPENSE
test('edit expense reducer' , ()=>{
    const amount = 2500;

    const action ={
         type: 'EDIT_EXPENSE',
         id : expenses[1].id,
         updates: {
             amount
         }
    
     }
     
     const state = expensesReducer(expenses, action);
 
     expect(state[1].amount).toBe(amount);
 
 
 });

 //SOULD NOT EDIT EXPENSE
test('should not edit expense if id is not found' , ()=>{
    const amount = 2500;
    const action ={
         type: 'EDIT_EXPENSE',
         id : '-1',
         updates: {
            amount
        }

     }
     
     const state = expensesReducer(expenses, action);
 
     expect(state).toEqual(expenses);
 
 
 });