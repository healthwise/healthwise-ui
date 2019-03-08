import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper as AriaWrapper,
  Button as AriaButton,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
} from 'react-aria-menubutton'
import uniqueId from 'lodash/uniqueId'
import styled from 'styled-components'

import { defaultTheme } from '../Theme'
import { DownArrowIcon, UpArrowIcon } from '../Icon'

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`

const Wrapper = styled(AriaWrapper)`
  width: 100%;
  height: 40px;
  position: relative;
  flex: 1 1 auto;
`

const Label = styled.span`
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
`

const Icon = styled.span`
  height: 1rem;
  width: 1rem;
  margin-right: 5px;
  margin-left: 0.5rem;
  pointer-events: none;
  display: flex;
`

const DownArrowIconContainer = styled.span`
  display: none;
  height: 1rem;
  width: 1rem;
  margin-right: 5px;
  margin-left: 0.5rem;
  pointer-events: none;
  svg {
    fill: ${props => props.colorTextSecondary};
  }
`

const UpArrowIconContainer = styled.span`
  display: none;
  height: 1rem;
  width: 1rem;
  margin-right: 5px;
  margin-left: 0.5rem;
  pointer-events: none;
  svg {
    fill: ${props => props.colorTextSecondary};
  }
`

const Button = styled(AriaButton)`
  width: 100%;
  height: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colorTextPrimary};
  box-sizing: border-box;
  background: ${props => props.theme.colorBackgroundLight};
  color: ${props => props.theme.colorTextPrimary};
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  list-style-type: none;
  cursor: pointer;

  :focus {
    outline: ${props => props.theme.focusIndicator};
    outline-offset: ${props => props.theme.focusIndicatorOffset};
  }

  &[aria-expanded='true'] ${UpArrowIconContainer} {
    display: flex;
  }

  &[aria-expanded='false'] ${DownArrowIconContainer} {
    display: flex;
  }
`

const Value = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
  pointer-events: none;
  display: inline-block;
  margin-right: auto;
  flex: 1 1 auto;
  overflow: hidden;
`

const Menu = styled(AriaMenu)`
  position: absolute;
  width: 100%;
  height: auto;
  background-color: ${props => props.theme.colorBackgroundLight};
  z-index: 1000;
`

const MenuItems = styled.ul`
  width: 100%;
  max-height: 24rem;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow-y: auto;
  overflow-x: hidden;
`

const MenuItem = styled(AriaMenuItem)`
  width: 100%;
  height: 2rem; /* Force IE to properly align flex items */
  min-height: 2rem;
  max-height: 3rem;
  border: 1px solid ${props => props.theme.colorBorder};
  border-top-color: transparent;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;

  :focus {
    outline: ${props => props.theme.focusIndicator};
    outline-offset: ${props => props.theme.focusIndicatorInset};
  }
`

class DropDown extends Component {
  constructor(props) {
    super(props)

    let mappedItems = this.mapItemsToObjects(props.items)
    this.state = {
      valueId: uniqueId('DropDownValue'),
      value: this.findItemInArray(props.value, mappedItems) || {
        name: props.prompt,
        value: props.prompt,
      },
      items: mappedItems,
    }

    this.onSelectNewValue = this.onSelectNewValue.bind(this)
  }

  mapItemsToObjects(items) {
    if (items && items.length > 0) {
      return items.map(function(item) {
        if (typeof item.value !== 'undefined' && typeof item.name !== 'undefined') {
          return item
        }

        return {
          value: item,
          name: item.toString(),
        }
      })
    }
    return []
  }

  findItemInArray(value, items) {
    if (value) {
      return items.find(item => item.value === value || item.name === value)
    }

    return undefined
  }

  onSelectNewValue(value, event) {
    let selectedItem = this.findItemInArray(value, this.state.items)
    if (selectedItem !== null && this.state.value !== selectedItem) {
      if (!this.props.maintainPrompt) {
        this.setState({ value: selectedItem })
      }

      this.props.onSelect(value, event)
    }
  }

  UNSAFE_componentWillReceiveProps(newProps) {
    let itemsToSearch = this.state.items
    if (newProps.items && newProps.items !== this.state.items) {
      itemsToSearch = this.mapItemsToObjects(newProps.items)
      this.setState({ items: itemsToSearch })
    }

    let newValue = this.findItemInArray(newProps.value, itemsToSearch) || {
      name: newProps.prompt,
      value: newProps.prompt,
    }
    if (newValue.value !== this.state.value.value) {
      this.setState({ value: newValue })
    }
  }

  render() {
    const { icon, label, prompt, theme } = this.props
    const { valueId, value, items } = this.state

    return (
      <Root className="hw-drop-down">
        {label && (
          <Label className="hw-drop-down-label" aria-hidden="true" role="presentation">
            {label}
          </Label>
        )}
        <Wrapper onSelection={this.onSelectNewValue}>
          <Button
            className="hw-drop-down-button"
            aria-label={label || prompt}
            aria-describedby={valueId}
            theme={theme}
          >
            {icon && (
              <Icon aria-hidden="true" role="presentation">
                {icon}
              </Icon>
            )}
            <Value
              id={valueId}
              tabIndex="-1" // Makes IE read aria-describedby element
              className="hw-drop-down-value"
            >
              {value.name}
            </Value>
            <DownArrowIconContainer
              className="hw-drop-down-icon-arrow"
              aria-hidden="true"
              role="presentation"
              theme={theme}
            >
              <DownArrowIcon role="presentation" />
            </DownArrowIconContainer>
            <UpArrowIconContainer
              className="hw-drop-down-icon-arrow"
              aria-hidden="true"
              role="presentation"
              theme={theme}
            >
              <UpArrowIcon role="presentation" />
            </UpArrowIconContainer>
          </Button>
          <Menu theme={theme}>
            <MenuItems>
              {items.map((item, i) => (
                <li key={i}>
                  <MenuItem value={item.value} text={item.name} theme={theme}>
                    <Value className="hw-drop-down-option">{item.component || item.name}</Value>
                  </MenuItem>
                </li>
              ))}
            </MenuItems>
          </Menu>
        </Wrapper>
      </Root>
    )
  }
}

DropDown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        component: PropTypes.node,
      }),
    ])
  ).isRequired,
  icon: PropTypes.any,
  label: PropTypes.string,
  prompt: PropTypes.string,
  maintainPrompt: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      component: PropTypes.node,
    }),
  ]),
  onSelect: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    colorTextPrimary: PropTypes.string,
    colorTextSecondary: PropTypes.string,
    colorBackgroundLight: PropTypes.string,
    colorBorder: PropTypes.string,
    focusIndicator: PropTypes.string,
    focusIndicatorOffset: PropTypes.string,
    focusIndicatorInset: PropTypes.string,
  }),
}

DropDown.defaultProps = {
  prompt: 'Select a value',
  maintainPrompt: false,
  theme: defaultTheme,
}

export default DropDown
