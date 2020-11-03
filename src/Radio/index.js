import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'

const Root = styled.span`
  position: relative;
  display: block;

  opacity: ${props => (props.readonly || props.disabled ? 0.35 : 1)};
  cursor: ${props => (props.readonly || props.disabled ? 'not-allowed' : 'default')};
`

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  line-height: 1;
`

const Svg = styled.svg`
  width: ${props => (props.forPrint ? '1em' : '28px')};
  height: ${props => (props.forPrint ? '1em' : '28px')};
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
  cursor: pointer;

  :focus + ${Svg} {
    outline: ${props => props.theme.focusIndicator};
    outline-offset: ${props => props.theme.focusIndicatorOffset};
  }

  :focus:invalid {
    border-color: ${props => props.theme.colorError};
  }

  :checked + ${Svg} ${InnerCircle} {
    display: inline-block;
  }

  :disabled {
    cursor: not-allowed;
  }
`

const LabelContent = styled.span`
  padding-left: 0.3rem;
`

class Radio extends Component {
  render() {
    let {
      id,
      name,
      label,
      value,
      isRequired,
      onClick,
      readonly,
      disabled,
      forPrint,
      theme,
      ...otherProps
    } = this.props

    return (
      <Root disabled={readonly || disabled} className="hw-radio-wrapper">
        <Label className="hw-radio-wrapper-label">
          <Input
            type="radio"
            id={id}
            name={name}
            value={value}
            required={isRequired}
            className="hw-radio"
            onClick={onClick}
            disabled={readonly || disabled}
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

          <LabelContent className="hw-checkbox-wrapper-label-text">{label}</LabelContent>
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
