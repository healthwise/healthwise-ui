import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './ButtonGroup.css'

class ButtonGroup extends React.Component {
  render() {
    let { children, className, align, ...otherProps } = this.props

    const buttonGroupClass = classNames(
      'hw-button-group',
      styles.button_group,
      styles[align],
      className
    )

    return (
      <div className={buttonGroupClass} {...otherProps}>
        {children}
      </div>
    )
  }
}

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
}

ButtonGroup.defaultProps = {
  align: 'left',
}

export default ButtonGroup
