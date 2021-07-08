import React from 'react'
import { shallow, mount } from '../enzyme'
import App from '../App'

let wrapper

beforeEach(() => {
  wrapper = shallow(<App />)
})

test('should render App correctly', () => {
  expect(wrapper).toMatchSnapshot()
})
