import React from 'react'
import { MemoryRouter as Router, Route } from 'react-router-dom'

import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import NightKay from '../src'
import AppLoader from '../src/AppLoader'
import BundleLoader from '../src/BundleLoader'

test('registerApplication', () => {
  expect(NightKay.applications.length).toBe(0)

  const app = {}
  NightKay.registerApplication('test', app)

  expect(NightKay.applications.length).toBe(1)
  expect(NightKay.applications[0].name).toBe('test')
  expect(NightKay.getApplication('test')).toBe(app)
})

test('registerModule', () => {
  expect(Object.keys(NightKay.modules).length).toBe(0)

  const obj = {}
  NightKay.registerModule('test', obj)

  expect(Object.keys(NightKay.modules).length).toBe(1)
  expect(NightKay.getModule('test')).toBe(obj)
})

test('AppLoader', () => {
  class TestComponent extends React.Component {
    render() {
      return <div className="test"></div>
    }
  }

  const wrapper = shallow(
    <Router>
      <AppLoader
        match={{ url: '/test' }}
        application={{
          name: 'test',
          path: '/test',
          routes: [{ path: '/page', component: TestComponent }]
        }}
      />
    </Router>
  )

  expect(wrapper.html().indexOf('night-kay-app-test')).toBeGreaterThan(-1)
})

test('BundleLoader', () => {
  class TestComponent extends React.Component {
    render() {
      return <div className="test"></div>
    }
  }

  const wrapper = shallow(
    <BundleLoader bundle={TestComponent} />
  )

  expect(wrapper.html().indexOf('class="test"')).toBeGreaterThan(-1)
})
