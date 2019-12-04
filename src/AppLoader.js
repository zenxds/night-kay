import React from 'react'
import { Route } from 'react-router-dom'

import BundleLoader from './BundleLoader'
import { memoizePromise } from './utils'
import * as path from './utils/path'
import loadScript from './utils/loadScript'
import loadCss from './utils/loadCss'

const loadApp = memoizePromise(entry => {
  if (entry.css) {
    loadCss(entry.css)
  }

  return loadScript(entry.script, {
    hour: true
  })
}, entry => entry.script)

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
    let { application } = this.props
    let { entry } = application

    if (!entry || !entry.script) {
      console.warn('application entry not found')
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
      // for css namespace
      <div className={`night-kay-app night-kay-app-${application.name}`}>
        {
          routes.map(item => {
            const p = path.join([match.path, item.path])

            return (
              <Route key={p} path={p} exact={!!item.exact} render={props => {
                return <BundleLoader {...props} bundle={item.component} />
              }} />
            )
          })
        }
      </div>
    )
  }
}
