import React from 'react'
import styles from './ValidationError.css'
import PropTypes from 'prop-types'

class ValidationError extends React.Component {
  render() {
    let { children, forId, ...otherAttributes } = this.props

    return (
      <label
        role="alert"
        aria-atomic="true"
        htmlFor={forId}
        className={'hw-validation-label ' + styles.error_label}
      >
        <span className={'hw-validation-box  ' + styles.validation_box} {...otherAttributes}>
          <span className={'hw-validation-glyph  ' + styles.validation_glyph}>
            <svg
              role="presentation"
              focusable="false"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="#950803"
                  strokeWidth="0"
                  d="m15.34324,12.81328l-4.8294,-4.82941l4.82853,-4.82941l-2.48229,-2.48405l-4.8294,4.82941l-4.8294,-4.82941l-2.48229,2.48405l4.82853,4.82941l-4.8294,4.82941l2.48405,2.48317l4.82853,-4.82941l4.82853,4.82941"
                  id="svg_1"
                  className="x_glyph"
                  stroke="#000"
                />
              </g>
            </svg>
          </span>
          <span className={'hw-validation-text  ' + styles.validation_text}>{children}</span>
        </span>
      </label>
    )
  }
}

ValidationError.propTypes = {
  children: PropTypes.node.isRequired,
  forId: PropTypes.string,
}

export default ValidationError
