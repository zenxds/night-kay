import React from 'react'
import { MemoryRouter as Router, Switch } from 'react-router-dom'

import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import nightKay from '../src'
import AppLoader from '../src/AppLoader'
import BundleLoader from '../src/BundleLoader'

test('registerApplication', () => {
  expect(nightKay.applications.length).toBe(0)

  const app = {}
  nightKay.registerApplication('test', app)

  expect(nightKay.applications.length).toBe(1)
  expect(nightKay.applications[0].name).toBe('test')
  expect(nightKay.getApplication('test')).toBe(app)
})

test('define', () => {
  expect(Object.keys(nightKay.modules).length).toBe(0)

  const obj = {}
  nightKay.define('test', obj)

  expect(Object.keys(nightKay.modules).length).toBe(1)
  expect(nightKay.require('test')).toBe(obj)
})

test('entry', () => {
  nightKay.registerApplication('user', {
    path: '/user',
    entry: 'user.js'
  })

  const app = nightKay.getApplication('user')
  expect(app.entry.script).toEqual('user.js')
})

test('AppLoader', () => {
  class TestAppLoader extends React.Component {
    render() {
      return <div></div>
    }
  }

  const wrapper = shallow(
    <Router>
      <AppLoader
        match={{ url: '/test' }}
        application={{
          name: 'test-app-loader',
          path: '/test',
          routes: [{ path: '/app-loader', component: TestAppLoader }]
        }}
      />
    </Router>
  )

  expect(wrapper.html().indexOf('night-kay-app-test-app-loader')).toBeGreaterThan(-1)
})

test('BundleLoader', () => {
  class TestBundleLoader extends React.Component {
    render() {
      return <div className="test-bundle-loader"></div>
    }
  }

  const wrapper = shallow(
    <BundleLoader bundle={TestBundleLoader} />
  )

  expect(wrapper.html().indexOf('class="test-bundle-loader"')).toBeGreaterThan(-1)
})

test('utils', () => {
  expect(nightKay.utils.getPublicPath).toBeTruthy()
})
