import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './ScreenReaderOnly.css'

class ScreenReaderOnly extends Component {
  render() {
    const { className, children, ...otherProps } = this.props
    const screenReaderClassName = classNames(
      'hw-screen-reader-only',
      styles.ScreenReaderOnly,
      className
    )

    return (
      <div className={screenReaderClassName} {...otherProps}>
        {children}
      </div>
    )
  }
}

ScreenReaderOnly.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default ScreenReaderOnly
