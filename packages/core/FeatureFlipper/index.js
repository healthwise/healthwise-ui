import React, { Component } from 'react'
import PropTypes from 'prop-types'

/* I realize this is so trivial, at first glance, it may seem stupid, but, believe me, it isn't */
class FeatureDefaultWrapper extends Component {
  render() {
    const { children } = this.props
    return <span>{children}</span>
  }
}

FeatureDefaultWrapper.propTypes = {
  children: PropTypes.node,
}

class FeatureFlipper extends Component {
  render() {
    const { children, evaluate, wrapper } = this.props

    if (
      (typeof evaluate === 'boolean' && evaluate) ||
      (typeof evaluate === 'function' && evaluate())
    ) {
      return <wrapper>{children}</wrapper>
    }

    return null
  }
}

FeatureFlipper.propTypes = {
  children: PropTypes.node,
  wrapper: PropTypes.element,
  evaluate: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired,
}

FeatureFlipper.defaultProps = {
  wrapper: FeatureDefaultWrapper,
  evaluate: false,
}

export default FeatureFlipper
