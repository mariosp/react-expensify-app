import moment from 'moment';

//fixtures expenses is a test data file so we can use the same data on many tests

//test array
export default [{
    id:'1',
    description: 'Gum',
    note: '',
    amount:109500,
    createdAt: 0
},{
    id:'2',
    description: 'rent',
    note: '',
    amount:195,
    createdAt: moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    description: 'credit card',
    note: 'asfasa',
    amount:195.65,
    createdAt: moment(0).add(4,'days').valueOf()
}]