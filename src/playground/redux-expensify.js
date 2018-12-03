import {createStore, combineReducers} from 'redux'
import uuidv4 from 'uuid/v4'


const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0

    } = {}) => (
    {
     type:'ADD_EXPENSE',
     expense:{
       id:uuidv4(),
       description,
       note,
       amount,
       createdAt
     }
    }
)

const removeExpense = ({id} = {}) => (
    {
        type:'REMOVE_EXPENSE',
        id
    }
)

const editExpense = (id, update) => {

    console.log(update)
    return (
    {
        type:'EDIT_EXPENSE',
        id,
        update
    } 
    )
}



const expenseReducerDefaultState = [] // created in order to keep reducer function as clean as possible, if we have 
// 'big' state, code will be live here and we will just reference it in the reducer, so reducer will stay clean

const expenseReducer = (state = expenseReducerDefaultState, action) => {

    switch(action.type){
        case 'ADD_EXPENSE':
        // return state.concat(action.expense)  it returns new array(push changes the original array)
        return [...state,action.expense] // spread operator returns new value ( new array in this case)

        case 'REMOVE_EXPENSE':
        return state.filter((value,index) => value.id !== action.id)

        case 'EDIT_EXPENSE':
        return state.map((value,index) => {
         
         if(value.id === action.id){

            return {
                ...value,
                ...action.update // here we returning all properties from object (...value) and then passing object with
                //properties we want to update, if these two objects have same property, the property from update object will be used because we pass that object at the end  
            }
         }

        })

        default :
        return state;
    }
}

const filtersReducerDefaultState = {
 text:'',
 sortBy:'date',
 startDate:undefined,
 endDate:undefined
}


const setFilterText = (text = '') => (

    {
        type:'SET_FILTER_TEXT',
        text
    }
)

const sortByDate = () => (
    {
        type:'SORT_BY_DATE',  
    }
)
const sortByAmount = () => (
    {
        type:'SORT_BY_AMOUNT',
    }
)
const setStartDate = (start) => (
    {
        type:'SET_START_DATE',
        start
    }
)
const setEndDate = (end) => (
    {
        type:'SET_END_DATE',
        end
    }
)
const filtersReducer = (state = filtersReducerDefaultState, action) => {

    switch(action.type)
    {
        case 'SET_FILTER_TEXT':
        return {
            ...state,
            text:action.text
        }
       case 'SORT_BY_DATE':
       return {
           ...state,
           sortBy:'date'
       }
       case 'SORT_BY_AMOUNT':
       return {
           ...state,
           sortBy:'amount'
       }   
       case 'SET_START_DATE':
       return {
           ...state,
           startDate:action.start
       }
       case 'SET_END_DATE':
       return {
           ...state,
           endDate:action.end
       }
        default:
        return state;
    }
}




// Important 
// 1. Create store calls our reducer with no state argument and no action argument so the end result is default state is getting set
// (empty array)


// root state name, and the reducer which will be manage that property, main state property
                                    // instead putting an array to the root, we can put the object to the root and on that
                                    //object we can define various properties

const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filter: filtersReducer
    })
)

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
 
    return expenses.filter((value,index) => {
   
      const startDateMatch = typeof startDate !== 'number' || value.createdAt >= startDate
      const endDateMatch = typeof endDate !== 'number' || value.createdAt <= endDate
      const textMatch = value.description.toLowerCase().includes(text.toLowerCase())
   
   
      return startDateMatch && endDateMatch && textMatch // checks if item should pass criteria
   
    }).sort((a,b) => {

      if(sortBy === 'date'){
        return a.createdAt > b.createdAt ? -1 : 1
      }
      else if(sortBy === 'amount'){
        return a.amount > b.amount ? -1 : 1
      }
    })
   }

// Dispatching actions

const expenseOne = store.dispatch(addExpense({description:'Rent',note:'lower rent', amount:200,createdAt:2})) // as a return value we get the action object returned from addExpense function
const expenseTwo = store.dispatch(addExpense({description:'ps4',note:'red dead redemption 2', amount:1000,createdAt:5}))
// store.dispatch(removeExpense({id:expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id,{amount: 4000}))
// store.dispatch(setFilterText('rent'))
// store.dispatch(setFilterText())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(123123))
// store.dispatch(setEndDate(123))
// store.dispatch(setEndDate())





store.subscribe(()=> {
 
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
    console.log(visibleExpenses)
})
  


store.dispatch(sortByAmount())

// store.dispatch(setEndDate(6))
// store.dispatch(setFilterText('r'))
