import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import uniqueId from 'lodash/uniqueId'
import styled, { withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'
import Message from '../Message'
import Ring from '../Ring'
import { CheckIcon, WarningIcon } from '../Icon'

const Label = styled.label`
  width: 100%;
  position: relative;
  display: inline-flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'auto')};
  ${props => (props.disabled ? 'opacity: 0.7;' : '')} ::after {
    display: ${props => (!props.viewOnly && props.underlined ? 'block' : 'none')};
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1.125rem;
    height: ${props =>
      props.autoFocus || props.focused || (props.error && props.dirty) ? '2px' : '1px'};
    background: ${props =>
      props.autoFocus || props.focused
        ? 'transparent'
        : props.error && props.dirty && (!props.autoFocus || !props.focused)
        ? props.theme.colorError
        : props.disabled
        ? '#bbb'
        : props.theme.colorTextPrimary};
    background-image: ${props =>
      props.autoFocus || props.focused
        ? `repeating-linear-gradient(
        to right,
        ${props.theme.colorTextPrimary},
        ${props.theme.colorTextPrimary} 2px,
        transparent 0,
        transparent 4px
      )`
        : 'none'};
  }
`

const LabelText = styled.span`
  margin-bottom: 0.25rem;
  flex: 1 0 auto;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colorTextPrimary};
`

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  border: ${props =>
    props.underlined || props.viewOnly
      ? 'none'
      : props.error && props.dirty && (!props.autoFocus || !props.focused)
      ? `1px solid ${props.theme.colorError}`
      : props.disabled
      ? `1px solid #bbb`
      : `1px solid ${props.theme.colorTextPrimary}`};
  background: ${props =>
    props.underlined || props.viewOnly ? 'none' : props.theme.colorBackgroundLight};

  &:focus-within {
    outline: ${props => (props.underlined || props.viewOnly ? 'none' : props.theme.focusIndicator)};
    outline-offset: ${props => props.theme.focusIndicatorOffset};
  }
`

const Input = styled.input`
  flex: 1 0;
  font-size: inherit;
  background-color: transparent;
  border: 0;
  padding: ${props => (props.underlined || props.viewOnly ? '0' : '0 8px')};
  transition: border ease 0.2s;
  box-shadow: none;

  ::placeholder {
    color: ${props => props.theme.colorTextSecondary};
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:invalid:not(:focus) {
    border-color: ${props =>
      props.error && props.dirty && (!props.autoFocus || !props.focused)
        ? props.theme.colorError
        : props.theme.colorTextPrimary};
  }
`

const Error = styled.div`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  line-height: 1;
  height: 1rem;
`

const GreenIconContainer = styled.div`
  svg {
    width: 2em;
    height: 2em;
    padding-right: 5px;
    fill: #0d8484;
  }
`

const RedIconContainer = styled.div`
  svg {
    width: 2em;
    height: 2em;
    padding-right: 5px;
    fill: #dd372f;
  }
`

class InputText extends Component {
  constructor(props) {
    super(props)

    this.input = React.createRef()

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
    const input = this.input.current
    const validity = input && input.validity
    let isValid = !error
    let errorType = error ? 'supplied' : null
    let errorMessage = error || null

    // if there's not an error yet AND the field is dirty AND we have browser support...
    if (isValid && (this.state.dirty || calledExternally) && validity) {
      isValid = validity.valid
    }

    // if we're valid so far, run the custom validation
    if (isValid && validators) {
      Object.keys(validators).forEach(function (key) {
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
        Object.keys(validationErrors).forEach(function (key) {
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
      dirty: true,
    })

    return isValid
  }

  handleFocus(event) {
    this.setState({
      dirty: true,
    })
  }

  handleBlur(event) {
    this.checkValidity(false)

    this.setState({
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
      viewOnly,
      underlined,
      autoFocus,
      focused,
      label,
      externalValidation,
      error,
      theme,
      onBlur, // eslint-disable-line no-unused-vars
      validationErrors, // eslint-disable-line no-unused-vars
      validators, // eslint-disable-line no-unused-vars
      onValid, // eslint-disable-line no-unused-vars
      onInvalid, // eslint-disable-line no-unused-vars
      getValidator, // eslint-disable-line no-unused-vars
      'data-qa': dataQa,
      ...otherProps
    } = this.props
    const { dirty, isValid } = this.state

    return (
      <Label
        disabled={disabled}
        viewOnly={viewOnly}
        underlined={underlined}
        autoFocus={autoFocus || focused}
        error={error || !isValid}
        dirty={dirty}
        theme={theme}
      >
        {label && (
          <LabelText className="hw-input-text-label" theme={theme}>
            {label}
            {required && ' *'}
          </LabelText>
        )}

        <InputContainer
          className={classNames('hw-input-text', `hw-input-text-${type}`, className)}
          ref={this.input}
          autoFocus={autoFocus || focused}
          dirty={dirty}
          error={error || !isValid}
          theme={theme}
          underlined={underlined}
          viewOnly={viewOnly}
          {...otherProps}
        >
          <Input
            type={type}
            aria-required={required}
            aria-describedby={this.errorId}
            autoFocus={autoFocus || focused}
            dirty={dirty}
            disabled={disabled}
            error={error || !isValid}
            placeholder={!viewOnly && placeholder}
            readOnly={viewOnly || readonly}
            required={required}
            theme={theme}
            underlined={underlined}
            viewOnly={viewOnly}
            onFocus={!viewOnly && this.handleFocus}
            onBlur={!viewOnly && this.handleBlur}
            data-qa={dataQa}
            {...otherProps}
          />
          {externalValidation === 'loading' && <Ring size={30} />}
          {externalValidation === 'valid' && (
            <GreenIconContainer>
              <CheckIcon />
            </GreenIconContainer>
          )}
          {externalValidation === 'invalid' && (
            <RedIconContainer>
              <WarningIcon />
            </RedIconContainer>
          )}
        </InputContainer>

        <Error id={this.errorId} className="hw-input-text-error-container">
          {!isValid && this.state.dirty && (
            <Message
              className={classNames('hw-input-text-error', `${className}-error`)}
              type="error"
              showIcon={false}
            >
              {this.state.error}
            </Message>
          )}
        </Error>
      </Label>
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
  viewOnly: PropTypes.bool,
  underlined: PropTypes.bool,
  autoFocus: PropTypes.bool,
  label: PropTypes.node,
  externalValidation: PropTypes.oneOf(['loading', 'valid', 'invalid']),
  onBlur: PropTypes.func,
  error: PropTypes.string,
  validationErrors: PropTypes.object,
  validators: PropTypes.object,
  onValid: PropTypes.func,
  onInvalid: PropTypes.func,
  // gives parent access to the validation function, to run at will
  getValidator: PropTypes.func,
  theme: PropTypes.shape({
    colorBackgroundLight: PropTypes.string,
    colorTextPrimary: PropTypes.string,
    colorTextSecondary: PropTypes.string,
    colorError: PropTypes.string,
    focusIndicator: PropTypes.string,
    focusIndicatorOffset: PropTypes.string,
  }),
}

InputText.defaultProps = {
  type: 'text',
  onBlur: () => {},
  onValid: () => {},
  onInvalid: () => {},
  getValidator: () => {},
  theme: defaultTheme,
}

export default withTheme(InputText)
