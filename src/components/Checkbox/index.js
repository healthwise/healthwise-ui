import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from '@healthwise/icon'
import styles from './Checkbox.css'

class Checkbox extends React.Component {
  render() {
    const { className, name, value, checked, onClick, required, ...otherProps } = this.props

    const checkboxClassName = classNames('hw-checkbox', styles.checkbox, className)

    return (
      <div className={`hw-checkbox-wrapper ${styles.checkbox_wrapper}`}>
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          required={required}
          className={checkboxClassName}
          onClick={onClick}
          {...otherProps}
        />
        <div className={`${styles.icon} ${styles.checked}`}>
          <CheckboxCheckedIcon role="presentation" />
        </div>
        <div className={`${styles.icon} ${styles.unchecked}`}>
          <CheckboxUncheckedIcon role="presentation" />
        </div>
      </div>
    )
  }
}

Checkbox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  required: PropTypes.bool,
}

export default Checkbox
