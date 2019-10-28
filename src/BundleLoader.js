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
    const { nightKayBundle: bundle } = this.props

    if (bundle.prototype instanceof React.Component) {
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
    const Component = this.state.mod

    if (!Component) {
      return null
    }

    return <Component {...this.props} />
  }
}
