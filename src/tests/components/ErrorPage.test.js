import React from 'react'
import {shallow} from 'enzyme'
import ErrorPage from '../../components/ErrorPage'

test('Should render error page correctly', () => {

    const wrapper = shallow(<ErrorPage />)
    expect(wrapper).toMatchSnapshot()
})