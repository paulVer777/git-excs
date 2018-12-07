import React from 'react'
import { shallow} from 'enzyme'
import { ExpensiveSummaryComponent } from '../../components/ExpensiveSummaryComponent'

test('Should render ExpensiveSummaryComponent correctly', () => {

    const wrapper = shallow( <ExpensiveSummaryComponent /> )
    expect(wrapper).toMatchSnapshot()
})


test('Should render ExpensiveSummaryComponent with provided data correctly', () => {

    const wrapper = shallow( <ExpensiveSummaryComponent sumOfExpenses = {3000}  numberOfExpenses = {1} /> )
    expect(wrapper).toMatchSnapshot()
})