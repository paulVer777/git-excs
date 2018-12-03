import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, altFilters } from '../fixtures/filters'
import moment from 'moment'

let setFilterText, setStartDate, setEndDate, sortByDate, sortByAmount, wrapper

beforeEach(() => { // function that set that values before each test case

        setFilterText = jest.fn()
        setStartDate = jest.fn()
        setEndDate = jest.fn()
        sortByDate = jest.fn()
        sortByAmount = jest.fn()

        wrapper = shallow( <ExpenseListFilters 
            
            filters = {filters}
            setFilterText = {setFilterText}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}
            sortByAmount = {sortByAmount}
            sortByDate = {sortByDate}
            
            /> )

})

test('should render Expense List Filters correctly', () => {

    expect(wrapper).toMatchSnapshot()

})

test('should render Expense List Filters with alt data correctly', () => {

    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot()

})

test('should handle text change', () => {

    const e  = {target:{
        value:'hihi'
    }}
    wrapper.find('input').simulate('change', e )
    expect(setFilterText).toHaveBeenLastCalledWith(e.target.value)

})

// test('should sort by date', () => {
//     wrapper.setProps({
//         filters:altFilters
//     }) 
    
//     const e  = { target: {
//         value:'date'
//     }}
//     wrapper.find('select').simulate('change', e )
//     expect(sortByDate).toHaveBeenCalled()
// })

test('Should set start date', () => {

    const start = moment(0).add( 7,'years')
    const end = moment(0).add(10,'years')

    wrapper.setProps({
        filters:altFilters
    })

    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate:start, endDate:end})
    expect(setStartDate).toHaveBeenLastCalledWith(start)
    expect(setEndDate).toHaveBeenLastCalledWith(end)
    expect(wrapper).toMatchSnapshot()
})

test('should handle dates focus changes', () => {

    const status = 'startDate'

    wrapper.find('DateRangePicker').prop('onFocusChange')(status)
    expect(wrapper.state('calendarFocused')).toBe(status)
})