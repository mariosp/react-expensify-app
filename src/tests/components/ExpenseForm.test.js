import React from 'react'
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm without data correctly', ()=>{

    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    
    });


    test('should render ExpenseForm with expense data correctly', ()=>{

        const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
        expect(wrapper).toMatchSnapshot();
        
        
        });
    

    test('should render error for invalid form submission', ()=>{

            const wrapper = shallow(<ExpenseForm />);
            expect(wrapper).toMatchSnapshot();  //check without event submit

            //check with submit
            wrapper.find('form').simulate('submit',{ //beacuse we test onSubmit we the e var doesnt exist so we use an preventdefault value
                preventDefault : ()=>{ }
            });

            expect(wrapper.state('error').length).toBeGreaterThan(0);
            expect(wrapper).toMatchSnapshot();
            });


    test('should set description on input change ', ()=>{
                const value = 'New description';

                const wrapper = shallow(<ExpenseForm />);
    
                //check with submit
                wrapper.find('input').at(0).simulate('change',{ //beacuse we test change  e var doesnt exist so we use an e value for target value
                    target : {value}
                });
    
                expect(wrapper.state('description')).toBe(value);
                
                });          
        
    test('should set note on input change ', ()=>{
                    const value = 'New note';
    
                    const wrapper = shallow(<ExpenseForm />);
        
                    //check with submit
                    wrapper.find('textarea').simulate('change',{ //beacuse we test change  e var doesnt exist so we use an e value for target value
                        target : {value}
                    });
        
                    expect(wrapper.state('note')).toBe(value);
                    
                    });  
                    
    
    test('should set amount if valid input', ()=>{
            const value = '12.54';
        
             const wrapper = shallow(<ExpenseForm />);
            
          
             wrapper.find('input').at(1).simulate('change',{ //beacuse we test change  e var doesnt exist so we use an e value for target value
                    target : {value}    //{value: value}
                });
            
            expect(wrapper.state('amount')).toBe(value);
                }); 
                
                
    test('should set amount if invalid input', ()=>{
            const value = '12.544';
        
            const wrapper = shallow(<ExpenseForm />);
            
        
            wrapper.find('input').at(1).simulate('change',{ //beacuse we test change  e var doesnt exist so we use an e value for target value
                    target : {value}    //{value: value}
                });
            
            expect(wrapper.state('amount')).toBe('');
            });
            
    
    test('should call onSubmit prop for valid submision', ()=>{
        const onSubmitSpy = jest.fn();    //set spy

        const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

        wrapper.find('form').simulate('submit',{ 
            preventDefault : ()=>{ }
        });

        expect(wrapper.state('error')).toBe('');
        expect(onSubmitSpy).toHaveBeenLastCalledWith(
            {
            description : expenses[0].description,
            amount: expenses[0].amount,
            createdAt: expenses[0].createdAt,
            note: expenses[0].note
            }
        );

    });


    test('should set new date on date change', ()=>{
       const now = moment();

        const wrapper = shallow(<ExpenseForm />);

        wrapper.find('SingleDatePicker').prop('onDateChange')(now);
        expect(wrapper.state('createdAt')).toEqual(now);
    });

    
    test('should set calendar focus on change', ()=>{
        const focused = true;
         const wrapper = shallow(<ExpenseForm />);
 
         wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
         expect(wrapper.state('calendarFocused')).toBe(focused);
         
     });
