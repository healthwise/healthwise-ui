import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { withTheme } from 'styled-components'

import { defaultTheme, getThemeVariable } from '../Theme'

// TODO: Need better mechanism to get focus indicator color. Right now, it uses
// the regular, dark focus indicator unless it's a light color with a flat or
// outlined style button, in which case it's assumed that the button needs to be
// on a dark background and needs the lighter focusIndicatorContrast style.
const getFocusIndicator = props => {
  const { flat, outlined, color, theme } = props
  if (flat || outlined) {
    if (color === 'primaryLight' || color === 'neutralLight') {
      return theme.focusIndicatorContrast
    }
  }
  return theme.focusIndicator
}

const Root = styled.button`
  padding: ${props => (props.flat ? '0.75rem' : '0.75rem 1rem')};
  border: ${props => (props.flat ? 'none' : `1px solid ${getThemeVariable('color')(props)}`)};
  border-radius: ${props => (props.rounded ? '4px' : '0')};
  display: inline-flex;
  align-items: center;
  background-color: ${props =>
    props.flat || props.outlined ? 'transparent' : getThemeVariable('color')(props)};
  color: ${props =>
    props.flat || props.outlined
      ? getThemeVariable('color')(props)
      : getThemeVariable('colorText')(props)};
  font-style: normal;
  text-decoration: none;
  line-height: 1;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  box-shadow: ${props =>
    props.raised && !props.disabled ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)' : 'none'};
  opacity: ${props => (props.disabled ? '0.6' : '1')};

  :hover,
  :active {
    box-shadow: ${props =>
      props.raised && !props.disabled ? '0 1px 3px rgba(0, 0, 0, 0.4)' : 'none'};
  }

  :focus {
    outline: ${props => (props.disabled ? 'none' : getFocusIndicator)};
    outline-offset: ${props => props.theme.focusIndicatorOffset};
  }

  svg {
    width: 1em;
    height: 1em;
    fill: ${props =>
      props.flat || props.outlined
        ? getThemeVariable('color')(props)
        : getThemeVariable('colorText')(props)};
  }
`

const Child = styled.div`
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`

class Button extends Component {
  render() {
    const { className, disabled, href, render, ...otherProps } = this.props

    const ariaProps = href || otherProps.to ? { role: 'button', 'aria-disabled': disabled } : {}

    // Wrap all children in a div to allow setting margin on text nodes
    const children = React.Children.map(this.props.children, (child, index) => (
      <Child key={index}>{child}</Child>
    ))

    const props = {
      className: classNames('hw-button', className),
      disabled,
      href,
      ...ariaProps,
      ...otherProps,
    }

    if (render) {
      return render({ ...props, children })
    } else if (href) {
      return (
        <Root as="a" {...props}>
          {children}
        </Root>
      )
    } else {
      return <Root {...props}>{children}</Root>
    }
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  render: PropTypes.func,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  href: PropTypes.string,
  id: PropTypes.string,
  outlined: PropTypes.bool,
  raised: PropTypes.bool,
  rounded: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'primaryLight',
    'primaryDark',
    'primaryDarker',
    'accent',
    'accentDark',
    'neutral',
    'neutralLight',
    'neutralDark',
  ]),
  theme: PropTypes.shape({
    colorPrimaryLight: PropTypes.string,
    colorPrimary: PropTypes.string,
    colorPrimaryDark: PropTypes.string,
    colorPrimaryDarker: PropTypes.string,
    colorAccent: PropTypes.string,
    colorAccentDark: PropTypes.string,
    colorNeutralLight: PropTypes.string,
    colorNeutral: PropTypes.string,
    colorNeutralDark: PropTypes.string,
    colorTextOnPrimaryLight: PropTypes.string,
    colorTextOnPrimary: PropTypes.string,
    colorTextOnPrimaryDark: PropTypes.string,
    colorTextOnPrimaryDarker: PropTypes.string,
    colorTextOnAccent: PropTypes.string,
    colorTextOnAccentDark: PropTypes.string,
    colorTextOnNeutralLight: PropTypes.string,
    colorTextOnNeutral: PropTypes.string,
    colorTextOnNeutralDark: PropTypes.string,
    focusIndicator: PropTypes.string,
    focusIndicatorContrast: PropTypes.string,
    focusIndicatorOffset: PropTypes.string,
  }),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

Button.defaultProps = {
  color: 'primary',
  theme: defaultTheme,
}

export default withTheme(Button)
