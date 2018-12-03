import moment from 'moment'

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

export {expenses}