
import {createStore} from 'redux'

// createStore : function that returns a store object, there is no state when redux first time calls this function so default state value is used.
//then we return that value and it becomes a new state.

//store.getState() : function that return an object with actual state.

// store.dispatch : wywołuje create store i przekazuje obiekt akcji do drugiego argumentu funkcji createStore. Create store jak drugi argument przyjmuje action i bazując na wartości 
// właściwości type w obiekcie akcji, zwraca odpowiednio zmodyfikowany store (obiekt).



///////////////////// IF ////////////////////////////////////////

const store = createStore((state = {count:0},action) => {
   
    if(action.type === 'INCREMENT'){
        return {                             // returns an object
            count:state.count + 1
        }  
    }
    else return state
})



console.log(store.getState())

store.dispatch({type:'INCREMENT'})

console.log(store.getState())


////////////// SWITCH //////////////

const store = createStore((state = {count:0},action) => {
    switch(action.type){
        case 'INCREMENT':
        return {
         count:state.count + 1
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
        default:
        return state
    }
     
 })



 ///////////////////// DESTRUCTURING



// if object is provided to function but doesn't have incrementBy property default value will be used (incrementBy = 1)
// if there is not object provided, default value is going to be uses which is empty object, amd when we try to destructure that
// empty object, incrementBy is not going to be found there so default value will be used which is 1

// const incrementCount = ({incrementBy = 1} = {}) => (
//     {
//         type:'INCREMENT',
//         incrementBy
//     }
// )

// const decrementCount = ({decrementBy = 1} = {} ) => (
//     {
//      type:'DECREMENT',
//      decrementBy
//     }
// )

// const reset = () => (
//     {
//         type:'RESET',
        
//     }
// )

// const set = ({value = 'default set'} = {} ) => (
//     {
//         type:'SET',
//         value
//     }
// )



// const store = createStore((state = {count:0},action) => {
//    switch(action.type){
//        case 'INCREMENT':
//        return {
//         count:state.count + action.incrementBy
//        }
//        case 'DECREMENT':
         
//        const decrementValue = typeof action.decrementBy === 'number' ? action.decrementBy : 1

//        return {
//         count:state.count - decrementValue
//        }
//        case 'RESET':
//        return {
//         count:0
//        }
//        case 'SET':
//        return {
//            count:action.value
//        }
//        default:
//        return state
//    }
    
// })

// store.dispatch(incrementCount({incrementBy:10000}))
// store.dispatch(reset())
// store.dispatch(decrementCount({decrementBy:50000}))
// store.dispatch({
//     type:'DECREMENT',
//     decrementBy: 10
// })
// store.dispatch(set())

// console.log(store.getState())


/////////////////////////////////////////////////////////////////////


////// PURE FUNCTION //////


const pureFunction = (a,b) => a + b  // output is only determine by the input (arguments), function uses variables, and 
// values declared only inside of its scope. Function is not interacting with things defined outside of a scope

////// NOT PURE FUNCTIONS

let a = 7;

const notPureFunction = (b) => a + b // output depends from variable declared outside of a function scope


let box

const notPureFunction2 = (a,b) => {
   box = a + b             // function is interacting with things declared outside of a scope
}


// Important 
// 1. Create store calls our reducer with no state and no action so the end result is default state is getting set
// (empty array)


// root state name, and the reducer which will be manage that property, main state property
                                    // instead putting an array to the root, we can put the object to the root and on that
                                    //object we can define various properties



////// SPREAD OPERATOR


// const ob = {
//     property1:'1',
//     prop2:'2'
// }

// const box = {...ob,prop:3}
// console.log(box)

// spread makes new array/object




//////////////// REDUX: CONNECT PROVIDER 



import React from 'react'
import {connect} from 'react-redux' //connects component to the redux store



const ExpenseList = (props) => (
    <div>
    <h1>Expense List</h1>
    {props.name}
    </div>
)

// connect returns a function , and we need to call this (thats why we have "() after () " ) function and pass our component in as a argument
// In connect function we need to pass information we want to connect, we dont need the whole store, we just need a subset. 
// so we pass function as a argument and this function lets us determine what information from the store we want to grab 
// in that function we pass state as a argument and return an object on this object we can put any key value pairs we like 
// usually they are going to be things from the state (everything we put on this object will be accesible to a component we want to connect with 
//( through props))

const ConnectedExpensesList = connect((state) => ({ //returns an object

    name: 'Pawel'

}))(ExpenseList)


export default ConnectedExpensesList

////////////////////////////////////////////////////////////////////////////////