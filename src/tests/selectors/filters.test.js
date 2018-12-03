import filtrator from '../../selectors/expenses'
import moment from 'moment';

const expenses = [{
    id:1,
    description:'gum',
    amount:155,
    note:'',
    createdAt:moment(0).valueOf()
},
{
    id:2,
    description:'rent',
    amount:15500,
    note:'',
    createdAt:moment(0).subtract(10,'days').valueOf()
},
{
    id:3,
    description:'shopping',
    amount:5000,
    note:'',
    createdAt:moment(0).add(20,'days').valueOf()
}
]

test('should filter text', ()=>{

    const filters = {
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = filtrator(expenses,filters)
    expect(result).toEqual([expenses[1]])
})

test('should filter by start date', () => {

    const filters = {
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const result = filtrator(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0]])

})

test('should sort by date', () => {

    const filters = {
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const result = filtrator(expenses,filters)
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])

})

test('should sort by amount', () => {

    const filters = {
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const result = filtrator(expenses,filters)
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]])

})