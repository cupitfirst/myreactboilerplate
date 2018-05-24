import App from '../src/components/App'
import React from 'react'
import { shallow } from 'enzyme'

describe('App', function() {
	test('should match snapshot', function() {
		const wrapper = shallow(<App />)

		expect(wrapper.find('h1').text()).toBe(' Welcome to My Starter App ')
		expect(wrapper).toMatchSnapshot
	})
})
