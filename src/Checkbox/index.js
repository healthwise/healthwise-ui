import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'
import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from '../Icon'

const Root = styled.div`
  position: relative;
  display: block;
  line-height: 1;

  opacity: ${props => (props.disabled ? 0.6 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
`

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  line-height: 1;

  border: ${props =>
    props.viewOnly && (props.checked || props.defaultChecked) ? '2px solid #999' : '0'};
  border-width: ${props =>
    props.viewOnly && (props.checked || props.defaultChecked) ? '0 2px' : '0'};
  border-radius: 10px;
`

const CheckedIconContainer = styled.div`
  display: none;
  width: 1rem;
  height: 1rem;
  svg {
    fill: ${props => props.theme.colorTextPrimary};
  }
`

const UncheckedIconContainer = styled.div`
  display: none;
  width: 1rem;
  height: 1rem;
  svg {
    fill: ${props => props.theme.colorTextPrimary};
  }
`

const Input = styled.input`
  position: absolute;
  display: block;
  width: 1rem;
  height: 1rem;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  opacity: 0;
  cursor: pointer;

  :focus ~ ${CheckedIconContainer}, :focus ~ ${UncheckedIconContainer} {
    outline: ${props => props.theme.focusIndicator};
    outline-offset: ${props => props.theme.focusIndicatorOffset};
  }

  :disabled {
    cursor: not-allowed;
  }

  :disabled ~ ${CheckedIconContainer}, :disabled ~ ${UncheckedIconContainer} {
    pointer-events: none;
  }

  :invalid ~ ${CheckedIconContainer} svg,
  :invalid ~ ${UncheckedIconContainer} svg {
    fill: ${props => props.theme.colorError};
  }

  :checked ~ ${CheckedIconContainer} {
    display: ${props => (props.viewOnly ? 'none' : 'block')};
  }

  :not(:checked) ~ ${UncheckedIconContainer} {
    display: ${props => (props.viewOnly ? 'none' : 'block')};
  }
`

const LabelContent = styled.span`
  padding: ${props =>
    props.viewOnly ? (props.checked || props.defaultChecked ? '3px 0.5rem' : '0') : '0 0.75rem'};
  font-size: 0.75em;
`

class Checkbox extends React.Component {
  render() {
    const {
      className,
      label,
      name,
      value,
      checked,
      defaultChecked,
      onClick,
      required,
      readOnly,
      disabled,
      viewOnly,
      theme,
      ...otherProps
    } = this.props

    return (
      <Root disabled={disabled} className="hw-checkbox-wrapper">
        <Label
          className="hw-checkbox-wrapper-label"
          checked={checked}
          defaultChecked={defaultChecked}
          viewOnly={viewOnly}
        >
          <Input
            type="checkbox"
            disabled={readOnly || viewOnly || disabled}
            name={name}
            value={value}
            checked={checked}
            defaultChecked={defaultChecked}
            required={required}
            viewOnly={viewOnly}
            className={classNames('hw-checkbox', className)}
            onClick={onClick}
            theme={theme}
            {...otherProps}
          />
          <CheckedIconContainer theme={theme}>
            <CheckboxCheckedIcon role="presentation" />
          </CheckedIconContainer>
          <UncheckedIconContainer theme={theme}>
            <CheckboxUncheckedIcon role="presentation" />
          </UncheckedIconContainer>

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

Checkbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  viewOnly: PropTypes.bool,
  theme: PropTypes.shape({
    colorTextPrimary: PropTypes.string,
    focusIndicator: PropTypes.string,
    focusIndicatorOffset: PropTypes.string,
    colorError: PropTypes.string,
  }),
}

Checkbox.defaultProps = {
  theme: defaultTheme,
}

export default withTheme(Checkbox)
