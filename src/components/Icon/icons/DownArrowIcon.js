import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../Icon'

const DownArrowIcon = props => {
  const { className, ...otherProps } = props
  const iconClass = classNames({
    'hw-icon-down-arrow': true,
    [className]: className,
  })

  return (
    <Icon viewBox="0 0 24 24" className={iconClass} {...otherProps}>
      <path d="M21.2 4L12 13.9 2.8 4 0 7l12 13L24 7" />
    </Icon>
  )
}

DownArrowIcon.propTypes = {
  className: PropTypes.string,
}

export default DownArrowIcon
