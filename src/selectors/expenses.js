import moment from 'moment';


const getVisibleExpenses = (expenses , {text,sortBy,startDate,endDate})=>{

    return expenses.filter((expense)=>{
        const createdAtMoment = moment(expense.createdAt);
        //if startDate on filter exist(that means we have set a start date value on the filter) then
        // if true return true if the start date filter is same or Before the createdmonent
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day') :true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment,'day') :true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;

    }).sort((a,b)=>{
        if(sortBy == 'date'){
            return a.createdAt < b.createdAt ? 1 : -1 ;

        }else{
            return a.amount < b.amount ? 1 : -1;
        }

    });


};

export default getVisibleExpenses;