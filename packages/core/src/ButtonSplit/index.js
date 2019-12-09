import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled, { withTheme } from 'styled-components'
import { defaultTheme, getThemeVariable } from '../Theme'

import Button from '../Button'
import { DownArrowIcon } from '../Icon'

import uniqueId from 'lodash/uniqueId'

const Root = styled.div`
  position: relative;
  display: inline-flex;
  align-items: stretch;
`

const DownButton = styled.button`
  display: flex;
  align-items: center;
  width: 40px;
  margin-left: 4px;
  border: ${props => (props.flat ? 'none' : `1px solid ${getThemeVariable('color')(props)}`)};
  border-top-right-radius: ${props => (props.rounded ? '4px' : '0')};
  border-bottom-right-radius: ${props => (props.rounded ? '4px' : '0')};
  background: ${props =>
    props.flat || props.outlined ? 'transparent' : getThemeVariable('color')(props)};
  text-align: center;

  background: ${props => (props.rounded ? 'pink' : 'purple')};
`

const Icon = styled.span`
  width: 20px;
  height: 20px;
  margin: auto;

  svg {
    width: 20px;
    height: 20px;
    margin: auto;
    fill: #fff;
  }
`

const Drawer = styled.div`
  position: absolute;
  top: 42px;
  left: 0;
  margin-top: 4px;
  border: 1px solid #979797;
  border-radius: ${props => (props.rounded ? '4px' : '0')};
  background: #fff;
  z-index: 50;

  ul {
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li:first-child button {
    border-radius: 3px 3px 0 0;
  }
  li:last-child button {
    border-radius: 0 0 3px 3px;
  }
  button {
    all: unset;
    font-family: inherit;
    font-size: 100%;
    line-height: inherit;
    margin: 0;
    border: none;
    outline: none;
    font: inherit;
    color: inherit;
    background: none;
    text-transform: none;
    cursor: pointer;
    box-sizing: border-box;
    width: 100%;

    display: block;
    padding: 8px 15px;
    white-space: nowrap;
    text-decoration: none;
    color: #424242;
  }
  button:hover {
    background: #d8d8d8;
  }
`

class SplitButton extends Component {
  constructor(props) {
    super(props)

    this.container = React.createRef()
    this.buttonId = uniqueId()
    this.domButton = null

    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    this.domButton = document.getElementById(this.buttonId)
  }

  render() {
    let {
      className,
      items,
      buttonProps,
      children,
      outlined,
      raised,
      rounded,
      onItemClick,
      onOpen,
      onClose,
      ...otherProps
    } = this.props

    const classes = ['hw-split-button', className].join(' ').trim()
    const buttonOverrides = {
      position: 'relative',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    }

    return (
      <Root className={classes} {...otherProps} ref={this.container}>
        <Button
          {...buttonProps}
          style={buttonOverrides}
          id={this.buttonId}
          onClick={e => {
            e.preventDefault()
            this.setState({ isOpen: false })
            buttonProps.onClick && buttonProps.onClick(e)
          }}
        >
          {children}
        </Button>

        <DownButton
          onClick={() => {
            this.state.isOpen ? onClose() : onOpen()
            this.setState({ isOpen: !this.state.isOpen })
          }}
        >
          <Icon>
            <DownArrowIcon />
          </Icon>
        </DownButton>

        {this.state.isOpen ? (
          <Drawer>
            <ul>
              {items.map((item, i) => (
                <li key={'splitButton_item_' + i}>
                  <button
                    onClick={() => {
                      onItemClick(item, i)
                      this.setState({ isOpen: false })
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </Drawer>
        ) : null}
      </Root>
    )
  }
}

SplitButton.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  outlined: PropTypes.bool,
  raised: PropTypes.bool,
  rounded: PropTypes.bool,
  onItemClick: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
}

SplitButton.defaultProps = {
  color: 'primary',
  theme: defaultTheme,
  onItemClick: () => {},
  onOpen: () => {},
  onClose: () => {},
}

export default withTheme(SplitButton)
