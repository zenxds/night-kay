import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import AppLoader from './AppLoader'

/**
 * @class NightKay
 */
class NightKay {
  constructor() {
    // 根据application注册的顺序来决定route匹配的顺序
    this.applications = []
    this.applicationMap = {}
    this.services = {}
  }

  /**
   *
   * @param {string} name
   * @param {object} application
   * @param {string} application.path
   * @param {string} application.entry
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

  /**
   * @param {string}    name
   * @param {array}     routes
   * @param {string}    route.path
   * @param {bool}      route.exact
   * @param {component} route.component
   * @memberof NightKay
   */
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
