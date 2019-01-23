import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { InfoIcon, WarningIcon } from '@healthwise/icon'
import styles from './Message.css'

const icons = {
  info: <InfoIcon />,
  warning: <WarningIcon />,
  error: <WarningIcon />,
}

class Message extends Component {
  render() {
    const { className, children, type, align, showIcon, ...otherProps } = this.props

    const containerClass = classNames(
      'hw-message-container',
      styles.container,
      styles[type],
      styles[align]
    )
    const messageClass = classNames('hw-message', `hw-message-${type}`, styles.message, className)

    return (
      <span className={containerClass} {...otherProps}>
        {showIcon && <div className={styles.icon}>{icons[type]}</div>}
        <div className={messageClass}>{children}</div>
      </span>
    )
  }
}

Message.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(['info', 'warning', 'error']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  showIcon: PropTypes.bool,
}

Message.defaultProps = {
  type: 'info',
  align: 'left',
  showIcon: true,
}

export default Message
