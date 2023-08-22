import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'

const Root = styled.span`
  position: relative;
  display: block;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  line-height: 1;
  cursor: ${props => (props.readonly || props.disabled ? 'not-allowed' : 'default')};
  border: ${props =>
    props.viewOnly && (props.checked || props.defaultChecked) ? '2px solid #999' : '0'};
  border-width: ${props =>
    props.viewOnly && (props.checked || props.defaultChecked) ? '0 2px' : '0'};
  border-radius: 10px;
`

const Svg = styled.svg`
  display: ${props => (props.readonly || props.viewOnly ? 'none' : 'default')};
  width: ${props => (props.forPrint ? '1em' : '28px')};
  height: ${props => (props.forPrint ? '1em' : '28px')};
  margin-top: 8px; // TODO: remove this?
`

const OuterCircle = styled.circle`
  width: ${props => (props.forPrint ? '28px' : 'auto')};
  height: ${props => (props.forPrint ? '28px' : 'auto')};
  stroke: ${props => (props.forPrint ? 'black' : props.theme.colorTextPrimary)};
  fill: ${props => (props.forPrint ? 'white' : 'transparent')};
  stroke-width: 2;
`

const InnerCircle = styled.circle`
  stroke: ${props => props.theme.colorTextPrimary};
  fill: ${props => props.theme.colorTextPrimary};
  stroke-width: 1;
  display: none;
`

const Input = styled.input`
  position: absolute;
  display: ${props => (props.forPrint ? 'none' : 'block')};
  height: 28px;
  width: 28px;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  opacity: 0;

  &:focus + ${Svg} {
    outline: ${props => props.theme.focusIndicator};
    outline-offset: ${props => props.theme.focusIndicatorOffset};
  }

  &:focus:invalid {
    border-color: ${props => props.theme.colorError};
  }

  &:checked + ${Svg} ${InnerCircle} {
    display: inline-block;
  }
`

const LabelContent = styled.span`
  padding: ${props =>
    props.viewOnly && (props.checked || props.defaultChecked) ? '3px 0.5rem' : 'inherit 0.3rem'};
  font-size: 0.75em;
`

class Radio extends Component {
  render() {
    let {
      id,
      name,
      label,
      value,
      checked,
      defaultChecked,
      isRequired,
      onClick,
      readonly,
      readOnly,
      disabled,
      viewOnly,
      className,
      forPrint,
      theme,
      ...otherProps
    } = this.props

    return (
      <Root disabled={disabled} className={`hw-radio-wrapper ${className}`}>
        <Label
          className="hw-radio-wrapper-label"
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          viewOnly={viewOnly}
        >
          <Input
            type="radio"
            id={id}
            name={name}
            value={value}
            checked={checked}
            defaultChecked={defaultChecked}
            required={isRequired}
            className="hw-radio"
            onClick={onClick}
            disabled={readonly || readOnly || viewOnly || disabled}
            viewOnly={viewOnly}
            forPrint={forPrint}
            theme={theme}
            {...otherProps}
          />
          <Svg
            role="presentation"
            viewBox="0 0 28 28"
            className="hw-radio-image"
            focusable="false"
            forPrint={forPrint}
            viewOnly={viewOnly}
          >
            <OuterCircle
              className="hw-radio-outer-circle"
              cx="14"
              cy="14"
              r="9"
              forPrint={forPrint}
              theme={theme}
            />
            <InnerCircle className="hw-radio-checked" cx="14" cy="14" r="5" theme={theme} />
          </Svg>

          <LabelContent
            className="hw-checkbox-wrapper-label-text"
            checked={checked}
            defaultChecked={defaultChecked}
            viewOnly={viewOnly}
          >
            {label}
          </LabelContent>
        </Label>
      </Root>
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
  disabled: PropTypes.bool,
  forPrint: PropTypes.bool,
  theme: PropTypes.shape({
    colorTextPrimary: PropTypes.string,
    colorError: PropTypes.string,
    focusIndicator: PropTypes.string,
    focusIndicatorOffset: PropTypes.string,
  }),
}

Radio.defaultProps = {
  isRequired: false,
  readonly: false,
  forPrint: false,
  theme: defaultTheme,
}

export default withTheme(Radio)
