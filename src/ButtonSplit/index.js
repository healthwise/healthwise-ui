import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { withTheme } from 'styled-components'

import { defaultTheme, getThemeVariable } from '../Theme'

import Button from '../Button'
import { DownArrowIcon } from '../Icon'

const Root = styled.div`
  position: relative;
  display: inline-flex;
  align-items: stretch;
`

const MainButton = styled(Button)`
  border-radius: ${props => (props.rounded ? '4px 0 0 4px' : '0')};
`

const DownButton = styled(Button)`
  display: flex;
  justify-content: center;
  width: 40px;
  padding: 0;
  margin-left: 4px;
  border-left: ${props => `1px solid ${getThemeVariable('color')(props)}`};
  border-radius: ${props => (props.rounded ? '0 4px 4px 0' : '0')};
  text-align: center;

  svg {
    width: 50%;
    height: 50%;
    margin: auto;
    fill: ${props =>
      props.flat || props.outlined
        ? getThemeVariable('color')(props)
        : getThemeVariable('colorText')(props)};
  }
`

const Drawer = styled.div`
  position: absolute;
  top: 42px;
  left: 0;
  margin-top: 4px;
  border: ${props => `1px solid ${getThemeVariable('colorBorder')(props)}`};
  border-radius: 3px;
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
  constructor() {
    super()

    this.container = React.createRef()
    this.domButton = null

    this.state = {
      isOpen: false,
    }

    // based on https://stackoverflow.com/a/3028037/706891
    this.outsideClickListener = e => {
      const element = this.container.current
      const isVisible = el =>
        !!el && !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)

      if (this.state.isOpen && element && !element.contains(e.target) && isVisible(element)) {
        this.setState({ isOpen: false })
      }
    }
  }

  componentDidMount() {
    // listen for outside click
    document.addEventListener('click', this.outsideClickListener)
  }

  componentWillUnmount() {
    // stop listening for outside click
    document.removeEventListener('click', this.outsideClickListener)
  }

  render() {
    let {
      id,
      className,
      items,
      children,
      onItemClick,
      open,
      onToggleClick,
      onOpen,
      onClose,
      ...otherProps
    } = this.props
    const classes = classNames('hw-split-button', className)
    const isOpen = !!(open !== false && (open || this.state.isOpen))

    // remove props we don't want from down button and menu: "render", "type", & events (that is, "on...")
    const otherPropKeys = Object.keys(otherProps)
    let downBtnAndMenuProps = { ...otherProps }
    otherPropKeys.forEach(key => {
      if (key.substr(0, 2) === 'on' || key === 'render' || key === 'type')
        delete downBtnAndMenuProps[key]
    })

    return (
      <Root id={id} className={classes} ref={this.container}>
        <MainButton
          className="hw-split-button-main-button"
          {...otherProps}
          onClick={e => {
            e.preventDefault()
            this.setState({ isOpen: false })
            otherProps.onClick && otherProps.onClick(e)
          }}
        >
          {children}
        </MainButton>

        <DownButton
          className="hw-split-button-toggle-button"
          aria-expanded={isOpen}
          {...downBtnAndMenuProps}
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            this.state.isOpen ? onToggleClick(true) : onToggleClick(false)
            this.setState({ isOpen: !this.state.isOpen }, () =>
              this.state.isOpen ? onOpen() : onClose()
            )
          }}
        >
          <DownArrowIcon />
        </DownButton>

        <Drawer className="hw-split-button-drawer" hidden={!isOpen} {...downBtnAndMenuProps}>
          <ul>
            {items &&
              items.length &&
              items.map((item, i) => (
                <li key={'item_' + i}>
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
      </Root>
    )
  }
}

SplitButton.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  onItemClick: PropTypes.func,
  onToggleClick: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,

  open: PropTypes.bool, // for use as a controlled component

  // these are all copied over from <Button />
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  render: PropTypes.func,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  href: PropTypes.string,
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

SplitButton.defaultProps = {
  color: 'primary',
  theme: defaultTheme,
  onItemClick: () => {},
  onToggleClick: () => {},
  onOpen: () => {},
  onClose: () => {},
}

export default withTheme(SplitButton)
