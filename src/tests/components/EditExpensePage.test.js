import React from 'react'
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


test('should render EditExpensePage correctly', ()=>{
    const addExpense = jest.fn();
    const history = {push: jest.fn()};
    const wrapper = shallow(<EditExpensePage onSubmit={addExpense} history={history} />);
    expect(wrapper).toMatchSnapshot();
    
    });