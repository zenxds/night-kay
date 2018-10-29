import React, { Component } from 'react'

/**
 * @class BundleLoader
 */
export default class BundleLoader extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      mod: null
    }
  }

  componentDidMount() {
    this.load()
  }

  load() {
    const { bundle } = this.props

    if (bundle.prototype instanceof Component) {
      this.setState({
        mod: bundle
      })
    } else {
      // lazy bundle-loader
      bundle(mod => {
        this.setState({
          mod: mod.default || mod
        })
      })
    }
  }

  render() {
    if (!this.state.mod) {
      return null
    }

    // for css namespace
    return (
      <div className={`night-kay-app night-kay-app-${this.props.application.name}`}>
        { this.props.render(this.state.mod) }
      </div>
    )
  }
}
