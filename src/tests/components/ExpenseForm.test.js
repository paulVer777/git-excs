import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import {expenses} from '../fixtures/expenses'
import moment from 'moment'

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with passed data correctly', () => {
    const wrapper = shallow(<ExpenseForm expense = {expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})


test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    
    wrapper.find('form').simulate('submit',{ preventDefault:()=>{} })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})


test('should take data from input and set that data into state', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change',{target:{ value:'New Description'}})
    expect(wrapper.state('description')).toBe('New Description')
})

test('should take data from textarea  and set that data into state', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change',{target:{ value:'New Description'}})
    expect(wrapper.state('note')).toBe('New Description')
    expect(wrapper).toMatchSnapshot()
})

test('should take correctly data (amount) from input and set into state', () => {

    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{target:{value:'22.44'}})
    expect(wrapper.state('amount')).toBe('22.44')
    expect(wrapper).toMatchSnapshot()
})

test('should not take invalid data (amount) from input and set into state', () => {

    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{target:{value:'22.445'}})
    expect(wrapper.state('amount')).toBe('')
    expect(wrapper).toMatchSnapshot()
})

test('should submit form with valid data', () => {
    const spy = jest.fn()
    const wrapper = shallow( <ExpenseForm expense = {expenses[1]} onSubmit = {spy} /> )
    wrapper.find('form').simulate('submit', {preventDefault:() => {}})
    expect(wrapper.state('error')).toBe(undefined)
    expect(spy).toHaveBeenLastCalledWith({
        description:expenses[1].description,
        amount:expenses[1].amount /100,
        note:expenses[1].note,
        createdAt:expenses[1].createdAt
    })
})

test('should date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now) // it finds component, next finds its prop, and calls this prop with the 'now' value
    expect(wrapper.state('createdAt')).toBe(now)
    expect(wrapper).toMatchSnapshot()
})

test('should calendar focus on change', () => {
    const wrapper = shallow( <ExpenseForm /> )
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true})
    expect(wrapper.state('calendarFocused')).toBe(true)
})