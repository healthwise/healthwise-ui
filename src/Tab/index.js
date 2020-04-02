import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'

const Root = styled.button`
  background-color: transparent; /* let the container set background color */
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  color: ${props =>
    props.disabled ? props.theme.colorTextDisabled : props.theme.colorTextPrimary};
  padding: ${props => props.theme.spacingM};
  font-size: 1.25em;
  text-align: center;
  text-decoration: none;
  border: none; /* reset since buttons have borders */
  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-bottom-color: ${props =>
    props.isActive
      ? props.theme.colorPrimary
      : props.visited
      ? props.theme.colorPrimaryLight
      : 'transparent'};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};

  :hover {
    border-bottom-color: ${props => (props.disabled ? 'transparent' : props.theme.colorPrimary)};
  }

  :focus {
    outline: ${props => props.theme.focusIndicator};
  }

  :active {
    border-bottom-color: ${props =>
      props.disabled ? 'transparent' : props.theme.colorPrimaryDark};
  }

  @media screen and (max-width: 750px) {
    padding: 15px;
    font-size: 1em;
  }

  @media screen and (-ms-high-contrast: active) {
    color: ${props => (props.disabled ? '#767676' : '#fff')};
    border-bottom-color: ${props => (props.isActive ? '#fff' : props.visited ? '#fff' : '#000')};

    :hover,
    :focus,
    :active {
      border-bottom-color: ${props => (props.disabled ? '#000' : '#fff')};
    }

    :focus {
      outline: solid 2px #fff;
    }
  }

  @media screen and (-ms-high-contrast: black-on-white) {
    color: #000;
    border-bottom-color: ${props => (props.isActive ? '#000' : props.visited ? '#000' : '#fff')};

    :hover,
    :focus,
    :active {
      border-bottom-color: ${props => (props.disabled ? '#fff' : '#000')};
    }

    :focus {
      outline: solid 2px #000;
    }
  }
`

class Tab extends Component {
  render() {
    const {
      children,
      className,
      href,
      accessKey,
      isActive,
      visited,
      minWidth,
      disabled,
      onClick,
      theme,
      onKeyUp, // from clonedProps. Is this an anti-pattern?
      ...otherProps
    } = this.props

    const tabIndex = this.props.isActive ? null : '-1'

    const tabClassName = classNames('hw-tab', { 'hw-tab-is-active': isActive }, className)

    return (
      <Root
        className={tabClassName}
        tabIndex={tabIndex}
        aria-disabled={disabled}
        onKeyUp={onKeyUp}
        onClick={onClick}
        theme={theme}
        visited={visited}
        isActive={isActive}
        disabled={disabled}
        style={{ minWidth }}
        role="tab"
        {...otherProps}
      >
        <div>{children}</div>
      </Root>
    )
  }
}

Tab.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  accessKey: PropTypes.number,
  isActive: PropTypes.bool,
  visited: PropTypes.bool,
  minWidth: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onKeyUp: PropTypes.func,
  theme: PropTypes.shape({
    colorPrimaryLight: PropTypes.string,
    colorPrimary: PropTypes.string,
    colorPrimaryDark: PropTypes.string,
    colorTextPrimary: PropTypes.string,
    colorTextDisabled: PropTypes.string,
    focusIndicator: PropTypes.string,
    spacingM: PropTypes.string,
  }),
}

Tab.defaultProps = {
  isActive: false,
  visited: false,
  disabled: false,
  onClick: null,
  theme: defaultTheme,
}

export default withTheme(Tab)
