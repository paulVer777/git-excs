import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensiveSummaryComponent from './ExpensiveSummaryComponent';

const Dashboard = (props) => (
    <div>
    <ExpenseListFilters/>
    <ExpensiveSummaryComponent />
    <ExpenseList/>
    
    </div>
)

export default Dashboard