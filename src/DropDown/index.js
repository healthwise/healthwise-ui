import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'

import uniqueId from 'lodash/uniqueId'
import Message from '../Message'

// NOTE: most CSS taken from https://github.com/filamentgroup/select-css

const Select = styled.select`
  display: block;
  font-family: sans-serif;
  font-weight: normal;
  color: ${props => props.theme.colorTextPrimary};
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 32px 0 8px;
  padding-left: ${props => (props.underlined ? '0' : '8px')};
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;

  border: 1px solid ${props => (props.error ? props.theme.colorError : props.theme.colorBorder)};
  border-top-color: ${props =>
    props.underlined
      ? 'transparent'
      : props.error
      ? props.theme.colorError
      : props.theme.colorBorder};
  border-right-color: ${props =>
    props.underlined
      ? 'transparent'
      : props.error
      ? props.theme.colorError
      : props.theme.colorBorder};
  border-left-color: ${props =>
    props.underlined
      ? 'transparent'
      : props.error
      ? props.theme.colorError
      : props.theme.colorBorder};   

  box-shadow: none;
  border-radius: 0;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23${props =>
    encodeURIComponent(
      props.theme.colorTextPrimary
    )}%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%, #ffffff 100%);
  background-repeat: no-repeat, repeat;
  /* arrow icon position (1rem from the right, 50% vertical) , then gradient position*/
  background-position: right 0.7rem top 50%, 0 0;
  /* icon size, then gradient */
  background-size: 0.65rem auto, 100%;

  &:focus {
    outline: ${props => props.theme.focusIndicator};
    outline-offset: ${props => props.theme.focusIndicatorOffset};
  }

  &:disabled,
  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ::-ms-expand {
    display: none;
  }
`

// /* Support for rtl text, explicit support for Arabic and Hebrew */
// *[dir="rtl"] .select-css, :root:lang(ar) .select-css, :root:lang(iw) .select-css {
// 	background-position: left .7rem top 50%, 0 0;
// 	padding: 0 8px 0 32px;
// }

const LabelText = styled.span`
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  letter-spacing: 0.5px;

  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Error = styled.div`
  margin-top: 0.25rem;
  font-size: 0.75rem;
  line-height: 1;
  height: 1rem;
`

const DropDown = props => {
  const {
    label,
    prompt,
    items,
    valueKey,
    nameKey,
    required,
    disabled,
    error,
    ...otherProps
  } = props
  const errorId = uniqueId('hw-input-text-error')

  return (
    <div className="hw-drop-down">
      <label className="hw-drop-down-label" aria-disabled={disabled}>
        {label && (
          <LabelText className="hw-drop-down-label-text">
            {label}
            {required && ' *'}
          </LabelText>
        )}
        <Select
          className="hw-drop-down-select"
          disabled={disabled}
          aria-disabled={disabled}
          required={required}
          aria-required={required}
          error={error}
          {...otherProps}
        >
          {prompt && (
            <option key="prompt" value="">
              {prompt}
            </option>
          )}
          {items &&
            items.map((item, i) => {
              const isObj = item instanceof Object
              return (
                <option
                  key={i}
                  className="hw-drop-down-option"
                  value={isObj ? item[valueKey] : item}
                >
                  {isObj ? item[nameKey] : item}
                </option>
              )
            })}
        </Select>

        <Error id={errorId} className="hw-drop-down-error-container">
          {error && error.length && (
            <Message className="hw-drop-down-error" type="error" showIcon={false}>
              {error}
            </Message>
          )}
        </Error>
      </label>
    </div>
  )
}

DropDown.propTypes = {
  label: PropTypes.string,
  prompt: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
    ])
  ).isRequired,
  nameKey: PropTypes.string,
  valueKey: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  theme: PropTypes.shape({
    colorTextPrimary: PropTypes.string,
    colorError: PropTypes.string,
    colorBorder: PropTypes.string,
    focusIndicator: PropTypes.string,
    focusIndicatorOffset: PropTypes.string,
  }),
}

DropDown.defaultProps = {
  nameKey: 'name',
  valueKey: 'value',
  disabled: false,
  theme: defaultTheme,
}

export default withTheme(DropDown)
