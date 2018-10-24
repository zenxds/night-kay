import React from 'react'

/**
 * @class BundleLoader
 */
export default class BundleLoader extends React.Component {
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

    if (bundle.prototype instanceof React.Component) {
      this.setState({
        mod: bundle
      })
    } else {
      bundle(mod => {
        this.setState({
          mod: mod.default || mod
        })
      })
    }
  }

  /**
   * props: match、history、location 还有一个多余的bundle
   */
  render() {
    const Component = this.state.mod
    return Component ? <Component {...this.props} /> : null
  }
}
