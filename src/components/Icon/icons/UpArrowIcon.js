import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../Icon'

const UpArrowIcon = props => {
  const { className, ...otherProps } = props
  const iconClass = classNames({
    'hw-icon-up-arrow': true,
    [className]: className,
  })

  return (
    <Icon viewBox="0 0 24 24" className={iconClass} {...otherProps}>
      <path d="M21.2 20L12 10.1 2.8 20 0 17 12 4l12 13" />
    </Icon>
  )
}

UpArrowIcon.propTypes = {
  className: PropTypes.string,
}

export default UpArrowIcon
