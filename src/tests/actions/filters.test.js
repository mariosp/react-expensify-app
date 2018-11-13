import {setStartDate, setEndDate,setTextFilter,sortByDate,sortByAmount} from '../../actions/filters';
import moment from 'moment';


test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })


});


test('should generate set start date action object without args (default arg)', ()=>{
    const action = setStartDate();
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: undefined
    })


});

test('should generate set end date action object', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })




});

test('should generate set end date action object without args (default arg)', ()=>{
    const action = setEndDate();
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: undefined
    })




});

test('should generate set text filter action object ', ()=>{
    const action = setTextFilter('Test');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Test'
    })


});

test('should generate set text filter action object without args ', ()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })


});


test('should generate sort by date action object ', ()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });

});

test('should generate sort by date action object ', ()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });

});