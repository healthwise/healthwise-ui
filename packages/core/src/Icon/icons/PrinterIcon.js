import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../Icon'

const PrinterIcon = props => {
  const { className, ...otherProps } = props
  const iconClass = classNames({
    'hw-icon-printer': true,
    [className]: className,
  })

  return (
    <Icon viewBox="0 0 24 24" className={iconClass} {...otherProps}>
      <path d="M20.4 7.2H3.6c-2 0-3.6 1.6-3.6 3.6V18h4.8v4.8h14.4V18H24v-7.2c0-2-1.6-3.6-3.6-3.6zm-3.6 13.2H7.2v-6h9.6v6zm3.6-8.4c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zM19.2 1.2H4.8V6h14.4V1.2z" />
    </Icon>
  )
}

PrinterIcon.propTypes = {
  className: PropTypes.string,
}

export default PrinterIcon
