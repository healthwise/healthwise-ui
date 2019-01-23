import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Tab.css'

class Tab extends Component {
  render() {
    const {
      children,
      className,
      href,
      accessKey,
      isActive,
      visited,
      minWidth,
      disabled,
      onClick,
      ...otherProps
    } = this.props

    const tabClassName = classNames(
      'hw-tab',
      [styles.Tab],
      { [className]: className },
      { 'hw-tab-is-active': isActive },
      { [styles.active]: isActive },
      { [styles.visited]: visited },
      { [styles.disabled]: disabled }
    )

    return (
      <a
        className={tabClassName}
        href={href}
        aria-disabled={disabled}
        accessKey={accessKey}
        onClick={onClick}
        style={{ minWidth }}
        {...otherProps}
      >
        <div>{children}</div>
      </a>
    )
  }
}

Tab.defaultProps = {
  isActive: false,
  visited: false,
  disabled: false,
  onClick: null,
}

Tab.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  accessKey: PropTypes.number,
  isActive: PropTypes.bool,
  visited: PropTypes.bool,
  minWidth: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Tab
