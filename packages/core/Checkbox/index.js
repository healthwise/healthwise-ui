import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'

import { defaultTheme } from '../Theme'
import { CheckboxCheckedIcon, CheckboxUncheckedIcon } from '../Icon'

const Root = styled.div`
  position: relative;
  display: block;
`

const CheckedIconContainer = styled.div`
  display: none;
  width: 1em;
  height: 1em;
  svg {
    fill: ${props => props.theme.colorTextPrimary};
  }
`

CheckedIconContainer.defaultProps = {
  theme: defaultTheme,
}

const UncheckedIconContainer = styled.div`
  display: none;
  width: 1em;
  height: 1em;
  svg {
    fill: ${props => props.theme.colorTextPrimary};
  }
`

UncheckedIconContainer.defaultProps = {
  theme: defaultTheme,
}

const Input = styled.input`
  position: absolute;
  display: block;
  width: 1em;
  height: 1em;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  opacity: 0;
  cursor: pointer;
  font-size: inherit;

  :focus ~ ${CheckedIconContainer},
  :focus ~ ${UncheckedIconContainer} {
    outline: ${props => props.theme.focusIndicator};
    outline-offset: ${props => props.theme.focusIndicatorOffset};
  }

  :disabled {
    cursor: not-allowed;
  }

  :disabled ~ ${CheckedIconContainer},
  :disabled ~ ${UncheckedIconContainer} {
    opacity: 0.35;
    pointer-events: none;
  }

  :invalid ~ ${CheckedIconContainer} svg,
  :invalid ~ ${UncheckedIconContainer} svg {
    fill: ${props => props.theme.colorError};
  }

  :checked ~ ${CheckedIconContainer} {
    display: block;
  }

  :not(:checked) ~ ${UncheckedIconContainer} {
    display: block;
  }
`

Input.defaultProps = {
  theme: defaultTheme
}

class Checkbox extends React.Component {
  render() {
    const { className, name, value, checked, onClick, required, theme, ...otherProps } = this.props

    return (
      <Root className="hw-checkbox-wrapper">
        <Input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          required={required}
          className={classNames('hw-checkbox', className)}
          onClick={onClick}
          theme={theme}
          {...otherProps}
        />
        <CheckedIconContainer>
          <CheckboxCheckedIcon role="presentation" />
        </CheckedIconContainer>
        <UncheckedIconContainer>
          <CheckboxUncheckedIcon role="presentation" />
        </UncheckedIconContainer>
      </Root>
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
  theme: PropTypes.shape({
    colorTextPrimary: PropTypes.string,
    focusIndicator: PropTypes.string,
    focusIndicatorOffset: PropTypes.string,
    colorError: PropTypes.string,
  })
}

export default Checkbox
