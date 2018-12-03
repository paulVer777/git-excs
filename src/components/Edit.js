import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm';
import {editExpense} from '../actions/expenses'
import {removeExpense} from '../actions/expenses'

export class Edit extends React.Component { 

    onSubmit = (expenseObj) => {

        this.props.editExpense(expenseObj,this.props.expense.id)
        this.props.history.push('/')
    }
    
    onClickHandlerRemove = () => {
        this.props.removeExpense(this.props.match.params.id)
        this.props.history.push('/')
    }

    render(){

        return(
            <div>
                <ExpenseForm
    
            expense = {this.props.expense}
            onSubmit = {this.onSubmit}
    
                />
                <button onClick = {this.onClickHandlerRemove}> Remove </button>     
        </div>
            )
    }
}
   
const mapDispatchToProps = (dispatch) => ({
    editExpense:( expenseObj,id ) => dispatch(editExpense(id,expenseObj)),
    removeExpense: (id) => dispatch(removeExpense({id}))

})

const mapStateToProps = (state,props) => ({
    expense: state.expenses.find((value,index) => value.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)