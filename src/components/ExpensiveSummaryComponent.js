import React from 'react'
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses'
import {sumUp} from '../selectors/totality'


export const ExpensiveSummaryComponent = (props) => {

    const correctWord = props.numberOfExpenses === 1 ? 'expense' : 'expenses'

    return (
     <div>
        <p>{`Viewing ${props.numberOfExpenses } ${correctWord} with total amount of ${props.sumOfExpenses}`}</p>
    </div>
)

}
   


const mapStateToProps = (state) => (
    {
        sumOfExpenses:sumUp(getVisibleExpenses(state.expenses,state.filter)),
        numberOfExpenses:getVisibleExpenses(state.expenses,state.filter).length
    }
)

export default connect(mapStateToProps)(ExpensiveSummaryComponent)