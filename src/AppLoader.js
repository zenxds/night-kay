import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import BundleLoader from './BundleLoader'
import { join, memoizePromise } from './util'
import loadScript from './util/loadScript'

const loadApp = memoizePromise(url => {
  return loadScript(url)
})

/**
 * @class AppLoader
 * 加载App入口文件
 */
export default class AppLoader extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      routes: props.application.routes || []
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

    // 加载入口JS，在该JS里执行App路由注册逻辑
    loadApp(entry).then(() => {
      this.setState({
        routes: application.routes || []
      })
    })
  }

  render() {
    const { routes } = this.state
    const { match, application } = this.props

    if (!routes.length) {
      return null
    }

    return (
      <Fragment>
        {
          routes.map(item => {
            const path = join([match.url, item.path])

            return <Route key={item.path} exact={!!item.exact} path={path} render={props => {
              return <BundleLoader bundle={item.component} render={Component => <Component {...props} />} />
            }} />
          })
        }
      </Fragment>
    )
  }
}
