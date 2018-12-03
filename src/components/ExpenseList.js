import React from 'react'
import {connect} from 'react-redux' //connects component to the redux store
import ListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'

export const ExpenseList = (props) => ( // {...value } it destructures the props object so we pass variables instead of whole object , it looks like - description:'asdad' amount:'fdsff'
// dispatch    
<div> 
     
    {props.expenses.length === 0 ? (

        <p>You dont have any expenses yet</p>
    )
    :
    (
        props.expenses.map((value,index) => <ListItem key={value.id} {...value} />
    )
    )
    }
    </div>
)

// connect returns a function , and we need to call this (thats why we have "() after () " ) function and pass our component in as a argument
// In connect function we need to pass information we want to connect, we dont need the whole store, we just need a subset. 
// so we pass function as a argument and this function lets us determine what information from the store we want to grab 
// in that function we pass state as a argument and return an object on this object we can put any key value pairs we like 
// usually they are going to be things from the state (everything we put on this object will be accesible to a component we want to connect with 
//( through props))



const mapStateToProps = (state) => ( //when the store changes this callback function automatically rerun providing fresh values to us
    {                                // when you connect a component to the redux store its reactive which means as the store changes
        expenses:getVisibleExpenses(state.expenses,state.filter)     // our component is going to re render new values to the screen
    }
)

export default connect(mapStateToProps)(ExpenseList)


