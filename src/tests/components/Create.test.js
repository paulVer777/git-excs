import React from 'react'
import {shallow} from 'enzyme'
import {expenses} from '../fixtures/expenses'
import {Create} from '../../components/Create';


test('should handle onsubmit', () => {
    const history = { push:jest.fn() }
    const addExpense = jest.fn()

    const wrapper = shallow(<Create history = {history} addExpense = {addExpense} />)
    expect(wrapper).toMatchSnapshot()
}) 

//checking if both our spies are called with correct stuff

test('should handle onsubmit', () => {
    const history = { push:jest.fn() }
    const addExpense = jest.fn()

    const wrapper = shallow( <Create history = {history} addExpense = {addExpense} /> )
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]) // after this line we can check if all our spyies were called with correct stuff, because we call onSubmit here
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
}) 