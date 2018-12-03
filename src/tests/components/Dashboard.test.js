import React from 'react'
import {shallow} from 'enzyme'
import Dashboard from '../../components/Dashboard'

test('Should render Dasboard correctly', () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper).toMatchSnapshot()
})