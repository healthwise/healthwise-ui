import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'
import Message from '../Message'
import { getKey } from '../KeyGen'

const Label = styled.label`
  margin-bottom: 0.25em;
  font-size: 0.75em;
  letter-spacing: 0.5px;

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Wrapper = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 10px;
`

const TextArea = styled.textarea`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.5em;
  margin: 0;
  border: 1px solid ${props => (props.error ? props.theme.colorError : props.theme.colorBorder)};
  min-height: 88px;
  font-size: 1em;
  line-height: 1.5em;
  resize: vertical;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: ${props => props.theme.focusIndicator};
    outline-offset: ${props => props.theme.focusIndicatorOffset};
  }
`

const ReadOnly = styled(TextArea)`
  border: 0;
  padding: 0;
  min-height: 0;
`
const Subtext = styled.div`
  font-size: 0.75em;
  margin-top: 0.25em;
  line-height: 1.7;
  letter-spacing: 0.5px;
  height: 1em;
  display: inline-block;
  margin-right: 10px;
`

class Textarea extends React.Component {
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
      validationErrors: validationErrors,
    }

    this.counterId = getKey()

    this.checkValidity = this.checkValidity.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onFocus(e) {
    this.setState({
      dirty: true,
    })
  }

  onBlur(e) {
    this.checkValidity(false)

    this.setState({
      dirty: true,
    })

    this.props.onBlur(e)
  }

  onKeyDown(e) {
    if (
      this.props.maxCharacters !== null &&
      e.target.value.length >= parseInt(this.props.maxCharacters, 10) &&
      // don't block the delete key
      e.keyCode !== 8
    ) {
      e.preventDefault()
      e.stopPropagation()
    }

    this.props.onKeyDown(e)
  }

  onChange(e) {
    if (this.charCountElement) {
      this.charCountElement.innerHTML = this.getMaxCharLabel(
        this.props.maxCharacters,
        this.props.readonly,
        e.target.value.length
      )
    }

    this.props.onChange(e)
  }

  getMaxCharLabel(maxChars, readonly = false, numChars = 0) {
    const label = `${maxChars} character limit`
    return readonly ? label : `${label} (${numChars} used)`
  }

  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      // if error is truthy, fire off an error, otherwise recheck it
      if (this.props.error && this.props.error.length) {
        this.setState({
          isValid: false,
          error: this.props.error,
          dirty: true,
        })
      } else {
        this.setState(
          {
            isValid: true,
            error: this.props.error,
          },
          () => this.checkValidity(false)
        )
      }
    }
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
      if (onInvalid) onInvalid(input.value, errorType)
    } else {
      // valid callback
      if (onValid) onValid(input.value)
    }

    this.setState({
      isValid: isValid,
      error: errorMessage,
      dirty: true,
    })

    return isValid
  }

  render() {
    let {
      className,
      id,
      name,
      defaultValue,
      value,
      label,
      disabled,
      error,
      required,
      maxCharacters,
      readonly,
      theme,
      ...otherProps
    } = this.props

    const { isValid } = this.state

    let characterCounter = ''
    let title = label ? (
      <Label htmlFor={id} className={'hw-textarea-label'} aria-disabled={disabled}>
        {label}
        {required && ' *'}
      </Label>
    ) : null

    if (maxCharacters) {
      value = value && value.length ? value.substring(0, maxCharacters) : null

      characterCounter = (
        <Subtext
          id={this.counterId}
          ref={el => {
            this.charCountElement = el
          }}
          className={'hw-textarea-counter'}
        >
          {this.getMaxCharLabel(maxCharacters, readonly)}
        </Subtext>
      )
    }

    let errorLabel =
      error || !isValid ? (
        <Subtext className="hw-text-area-error-container">
          <Message
            className={classNames('hw-text-area-error', `${className}-error`)}
            type="error"
            showIcon={false}
          >
            {this.state.error}
          </Message>
        </Subtext>
      ) : null

    // if it's readonly, just display the text
    const textarea = readonly ? (
      <ReadOnly as="p" className={'hw-textarea-textarea hw-textarea-textarea-readonly'}>
        {value || defaultValue || ''}
      </ReadOnly>
    ) : (
      <Wrapper className={'hw-textarea-textarea-wrapper'}>
        <TextArea
          {...otherProps}
          className={'hw-textarea-textarea'}
          ref={el => {
            this.input = el
          }}
          id={id}
          name={name}
          defaultValue={defaultValue}
          value={value}
          disabled={disabled}
          error={error || !isValid}
          required={required}
          aria-required={required}
          aria-describedby={this.counterId}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
          theme={theme}
        />
        {characterCounter}
        {errorLabel}
      </Wrapper>
    )

    return (
      <div className={'hw-textarea'} aria-disabled={disabled}>
        {title}
        {textarea}
      </div>
    )
  }
}

Textarea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  required: PropTypes.bool,
  maxCharacters: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  readonly: PropTypes.bool,
  theme: PropTypes.shape({
    colorBorder: PropTypes.string,
    colorError: PropTypes.string,
    focusIndicator: PropTypes.string,
    focusIndicatorOffset: PropTypes.string,
  }),
}

Textarea.defaultProps = {
  id: getKey(),
  defaultValue: undefined,
  value: undefined,
  readonly: false,
  disabled: false,
  maxCharacters: null,
  onFocus: e => e,
  onBlur: e => e,
  onKeyDown: e => e,
  onChange: e => e,
  onValid: val => val,
  onInvalid: (val, errType) => ({ val, errType }),
  theme: defaultTheme,
}

export default withTheme(Textarea)
