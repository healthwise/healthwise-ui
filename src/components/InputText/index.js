import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import uniqueId from 'lodash/uniqueId'

import Message from '@healthwise/message'
import styles from './InputText.css'

class InputText extends Component {
  constructor(props) {
    super(props)

    this.fallbackError = 'Value is unexpected.'
    const validationErrors = Object.assign(
      {
        patternMismatch: 'Value is unexpected.',
        rangeOverflow: 'Value is too large.',
        rangeUnderflow: 'Value is too small.',
        stepMismatch: 'This is an invalid step interval value.',
        tooLong: 'Value is too long.',
        tooShort: 'Value is too short.',
        typeMismatch: 'Value is not the correct format.',
        valueMissing: 'This field is required.',
        fallback: this.fallbackError,
      },
      props.validationErrors
    )

    const hasError = props.error && props.error.length

    this.state = {
      isValid: !hasError,
      error: hasError ? props.error : null, // error message string
      dirty: hasError,
      focused: false,
      validationErrors: validationErrors,
    }
    this.errorId = uniqueId('hw-input-text-error')
    this.checkValidity = this.checkValidity.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  componentDidMount() {
    // this lets the parent component fire off the validation whenever it wants to
    // - approach taken from https://stackoverflow.com/questions/37949981/call-child-method-from-parent/45582558#45582558
    this.props.getValidator(this.checkValidity.bind(this))
  }

  componentWillUnmount() {
    this.props.getValidator(null)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const propsHaveError = nextProps.error && nextProps.error.length
    let newState

    if (propsHaveError) {
      newState = {
        isValid: false,
        error: nextProps.error,
        dirty: true,
        focused: false,
      }
    }

    if (newState) this.setState(newState)
  }

  checkValidity(calledExternally = true) {
    const { error, validators, onValid, onInvalid } = this.props

    const validationErrors = this.state.validationErrors
    const fallbackError = this.fallbackError
    const input = this.input
    const validity = input.validity
    let isValid = !error
    let errorType = error ? 'supplied' : null
    let errorMessage = error || null

    // if there's not an error yet AND the field is dirty AND we have browser support...
    if (isValid && (this.state.dirty || calledExternally) && validity) {
      isValid = validity.valid
    }

    // if we're valid so far, run the custom validation
    if (isValid && validators) {
      Object.keys(validators).forEach(function(key) {
        // the "!!" gets us a boolean, regardless of what comes back
        const customIsValid = !!validators[key](input.value)

        isValid = isValid && customIsValid

        if (!customIsValid) {
          errorType = key
          errorMessage = validationErrors[key] || validationErrors['fallback'] || fallbackError
        }
      })
    }

    // when there's an error
    if (!isValid) {
      // find the right error message
      if (!errorMessage) {
        // try to find a known message (via the HTML5 validity API)
        Object.keys(validationErrors).forEach(function(key) {
          if (typeof validity[key] !== 'undefined' && validity[key] === true) {
            errorType = key
            errorMessage = validationErrors[key]
          }
        })

        // if we can't find one, go with the fallback
        if (!errorMessage) {
          errorType = 'unknown'
          errorMessage = validationErrors.fallback
        }
      }

      // invalid callback
      onInvalid(input.value, errorType)
    } else {
      // valid callback
      onValid(input.value)
    }

    this.setState({
      isValid: isValid,
      error: errorMessage,
      focused: false,
      dirty: true,
    })

    return isValid
  }

  handleFocus(event) {
    this.setState({
      focused: true,
      dirty: true,
    })
  }

  handleBlur(event) {
    this.checkValidity(false)

    this.setState({
      focused: false,
      dirty: true,
    })

    this.props.onBlur(event)
  }

  render() {
    const {
      className,
      placeholder,
      type,
      required,
      disabled,
      readonly,
      underlined,
      label,
      error,
      onBlur, // eslint-disable-line no-unused-vars
      validationErrors, // eslint-disable-line no-unused-vars
      validators, // eslint-disable-line no-unused-vars
      onValid, // eslint-disable-line no-unused-vars
      onInvalid, // eslint-disable-line no-unused-vars
      getValidator, // eslint-disable-line no-unused-vars
      ...otherProps
    } = this.props
    const { focused, isValid } = this.state

    const containerClass = classNames(
      styles.container,
      { [styles.disabled]: disabled || readonly },
      { [styles.underlined]: underlined },
      { [styles.focused]: focused },
      { [styles.error]: error || !this.state.isValid },
      { [styles.dirty]: this.state.dirty }
    )
    const inputClass = classNames(
      'hw-input-text',
      `hw-input-text-${type}`,
      styles.input_text,
      className
    )
    const labelClass = classNames('hw-input-text-label', styles.label)
    const errorContainerClass = classNames('hw-input-text-error-container', styles.error_container)
    const errorClass = classNames('hw-input-text-error', `${className}-error`)

    return (
      <label className={containerClass}>
        {label && (
          <span className={labelClass}>
            {label}
            {required && ' *'}
          </span>
        )}
        <input
          className={inputClass}
          ref={el => {
            this.input = el
          }}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readonly}
          aria-required={required}
          aria-describedby={this.errorId}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...otherProps}
        />
        <div id={this.errorId} className={errorContainerClass}>
          {!isValid &&
            this.state.dirty && (
              <Message className={errorClass} type="error" showIcon={false}>
                {this.state.error}
              </Message>
            )}
        </div>
      </label>
    )
  }
}

InputText.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'tel',
    'password',
    'email',
    'search',
    'url',
    'number',
    'date',
    'datetime',
    'datetime-local',
    'month',
    'week',
    'time',
  ]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  underlined: PropTypes.bool,
  label: PropTypes.node,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  validationErrors: PropTypes.object,
  validators: PropTypes.object,
  onValid: PropTypes.func,
  onInvalid: PropTypes.func,
  // gives parent access to the validation function, to run at will
  getValidator: PropTypes.func,
}

InputText.defaultProps = {
  type: 'text',
  onBlur: () => {},
  onValid: () => {},
  onInvalid: () => {},
  getValidator: () => {},
}

export default InputText
