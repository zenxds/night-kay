/**
 * @file NightKay
 */
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import AppLoader from './AppLoader'

class NightKay {
  constructor() {
    // 根据application注册的先后来决定route匹配的先后
    this.applications = []
    this.applicationMap = {}
    this.services = {}
  }

  /**
   *
   * @param {string} name
   * @param {object} application
   * @param {string} application.entry
   * @param {string} application.path
   */
  registerApplication(name, application) {
    if (this.applicationMap[name]) {
      console.warn(`application ${name} has been registered`)
      return
    }

    this.applicationMap[name] = application
    this.applications.push(application)
  }

  getApplication(name) {
    return this.applicationMap[name]
  }

  registerRoutes(name, routes) {
    const application = this.getApplication(name)

    if (!application) {
      console.warn(`application ${name} not found`)
      return
    }

    application.routes = routes
  }

  registerService(name, service) {
    if (this.services[name]) {
      console.warn(`service ${name} has been registered`)
      return
    }

    this.services[name] = service
  }

  getService(name) {
    return this.services[name]
  }

  routes() {
    return (
      <Fragment>
        {
          this.applications.map((application, name) => {
            return <Route key={name} path={application.path} render={props => {
              return <AppLoader {...props} application={application} />
            }} />
          })
        }
      </Fragment>
    )
  }
}

export default new NightKay()
