import {createStore} from 'redux'

// createStore : function that returns a store object, there is no state when redux first time calls this function so default state value is used.
//then we return that value and it becomes a new state.

//store.getState() : function that return an object with actual state.

// store.dispatch : wywołuje create store i przekazuje obiekt akcji do drugiego argumentu funkcji createStore. Create store jak drugi argument przyjmuje action i bazując na wartości 
// właściwości type w obiekcie akcji, zwraca odpowiednio zmodyfikowany store (obiekt).

// if object is provided to function but doesn't have incrementBy property default value will be used (incrementBy = 1)
// if there is not object provided, default value is going to be uses which is empty object, amd when we try to destructure that
// empty object, incrementBy is not going to be found there so default value will be used which is 1

const incrementCount = ({incrementBy = 1} = {}) => (
    {
        type:'INCREMENT',
        incrementBy
    }
)

const decrementCount = ({decrementBy = 1} = {} ) => (
    {
     type:'DECREMENT',
     decrementBy
    }
)

const reset = () => (
    {
        type:'RESET',
        
    }
)

const set = ({value = 'default set'} = {} ) => (
    {
        type:'SET',
        value
    }
)

const store = createStore((state = {count:0},action) => {
   switch(action.type){
       case 'INCREMENT':
       return {
        count:state.count + action.incrementBy
       }
       case 'DECREMENT':
         
       const decrementValue = typeof action.decrementBy === 'number' ? action.decrementBy : 1

       return {
        count:state.count - decrementValue
       }
       case 'RESET':
       return {
        count:0
       }
       case 'SET':
       return {
           count:action.value
       }
       default:
       return state
   }
    
})

store.dispatch(incrementCount({incrementBy:10000}))
store.dispatch(reset())
store.dispatch(decrementCount({decrementBy:50000}))
store.dispatch({
    type:'DECREMENT',
    decrementBy: 10
})
store.dispatch(set())

console.log(store.getState())

let box

const notPureFunction = (a,b) => {
  box = a+b
}

console.log(notPureFunction(5,5))