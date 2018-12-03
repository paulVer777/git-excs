import React from 'react'
import {shallow} from 'enzyme'
import {Edit} from '../../components/Edit'
import {expenses} from '../fixtures/expenses'

test('Should render edit expense page', () => {

    const wrapper = shallow( <Edit /> )
    expect(wrapper).toMatchSnapshot()

})

test('Should handle edit expense', () => {

    const editExpense = jest.fn()
    const history = {push:jest.fn()}
    const expense = {id:2}

    const wrapper = shallow( <Edit editExpense = {editExpense} history = {history} expense = {expense} /> )
    wrapper.find('ExpenseForm').prop('onSubmit')({
        description:'edited',
        note:'ccc',
        amount:12,
        createdAt:1111
    })
    expect(editExpense).toHaveBeenLastCalledWith({
        description:'edited',
        note:'ccc',
        amount:12,
        createdAt:1111
    },2)
    expect(history.push).toHaveBeenLastCalledWith('/')

})

test('Should handle remove expense', () => {
    
    const removeExpense = jest.fn()
    const history = {push:jest.fn()}
    const match = {params:{
        id:2
    }}
    const wrapper = shallow(<Edit match = {match} removeExpense = {removeExpense} history = {history} />)
    
    wrapper.find('button').simulate('Click')
    expect(removeExpense).toHaveBeenLastCalledWith(2)

})