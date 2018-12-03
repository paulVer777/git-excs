import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseList} from '../../components/ExpenseList'
import {expenses} from '../fixtures/expenses'

test('should render expense list with props',() =>{

    const wrapper = shallow(<ExpenseList expenses = {expenses} />) // shallow expects JSX 
    expect(wrapper).toMatchSnapshot()
})

test('should render p if there is no items in the array', ()=> {
    const wrapper =  shallow(<ExpenseList expenses = {[]} />)
    expect(wrapper).toMatchSnapshot()
})