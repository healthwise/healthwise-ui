import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

class Radio extends React.Component {
  render() {
    let {
      id,
      name,
      value,
      isRequired,
      onClick,
      readonly,
      forPrint,
      ...otherAttributes
    } = this.props

    return (
      <span className={'hw-radio-wrapper ' + styles.radio_wrapper}>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          required={isRequired}
          className={'hw-radio ' + styles.radio}
          onClick={onClick}
          disabled={readonly}
          style={forPrint ? { display: 'none' } : null}
          {...otherAttributes}
        />
        <svg
          role="presentation"
          viewBox="0 0 28 28"
          className={'hw-radio-image ' + styles.radio_image}
          focusable="false"
          style={forPrint ? { height: '1em', width: '1em' } : null}
        >
          <circle
            className={`hw-radio-outer-circle ${styles.radio_outer_circle}`}
            cx="14"
            cy="14"
            r="9"
            style={
              forPrint ? { stroke: 'black', fill: 'white', height: '28px', width: '28px' } : null
            }
          />
          <circle
            className={`hw-radio-unchecked ${styles.radio_inner_circle} ${styles.radio_unchecked}`}
            cx="14"
            cy="14"
            r="5"
            style={forPrint ? { display: 'none' } : null}
          />
          <circle
            className={`hw-radio-checked ${styles.radio_inner_circle} ${styles.radio_checked}`}
            cx="14"
            cy="14"
            r="5"
            style={forPrint ? { display: 'none' } : null}
          />
        </svg>
      </span>
    )
  }
}

Radio.propTypes = {
  id: PropTypes.string,
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  readonly: PropTypes.bool,
  forPrint: PropTypes.bool,
}

Radio.defaultProps = {
  isRequired: false,
  readonly: false,
  forPrint: false,
}

export default Radio
