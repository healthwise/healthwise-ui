import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Icon.css'

class Icon extends Component {
  render() {
    const { children, className, viewBox, ...otherProps } = this.props
    const iconClass = classNames({
      'hw-icon': true,
      [styles.Icon]: true,
      [className]: className,
    })

    return (
      <div className={iconClass}>
        <svg className={styles.IconSvg} viewBox={viewBox} focusable="false" {...otherProps}>
          {children}
        </svg>
      </div>
    )
  }
}

Icon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  viewBox: PropTypes.string,
}

Icon.defaultProps = {
  viewBox: '0 0 24 24',
}

export default Icon
