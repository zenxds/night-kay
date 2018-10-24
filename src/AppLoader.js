import React, { Fragment, Component } from 'react'
import { Route } from 'react-router-dom'

import BundleLoader from './BundleLoader'
import { join } from './util'
import loadScript from './util/loadScript'

/**
 * @class AppLoader
 * 加载app入口文件
 */
export default class AppLoader extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      routes: []
    }
  }

  componentDidMount() {
    this.load()
  }

  load() {
    const { application } = this.props
    const { entry } = application

    if (!entry) {
      return
    }

    // APP在入口JS里执行路由注册的逻辑
    loadScript(entry, () => {
      this.setState({
        routes: application.routes || []
      })
    })
  }

  render() {
    const { routes } = this.state
    const { match } = this.props

    if (!routes.length) {
      return null
    }

    return (
      <Fragment>
        {
          routes.map(item => {
            const path = join([match.url, item.path])

            return <Route key={item.path} exact={!!item.exact} path={path} render={props => {
              return <BundleLoader {...props} bundle={item.component} />
            }} />
          })
        }
      </Fragment>
    )
  }
}
