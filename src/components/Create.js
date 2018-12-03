import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {addExpense} from '../actions/expenses'

export class Create extends React.Component {

    onSubmit = (expense) => {
        this.props.addExpense(expense)
        this.props.history.push(`/`)
    }

    render(){
        return (
    <div>
        <h1>Create page</h1>
        <ExpenseForm
            onSubmit = {this.onSubmit}
        />
    </div>
        )
    }
}
    
const mapDispatchToProps = (dispatch) => ({ //we pulled out the functions from components and passed it here in order to avoid redefining these functions every time component renders

    addExpense:(expense) => dispatch(addExpense(expense))
})

export default connect(undefined,mapDispatchToProps)(Create)