import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './DropDown.css'

import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton'
import uniqueId from 'lodash/uniqueId'
import { DownArrowIcon, UpArrowIcon } from '@healthwise/icon'

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
    const ariaLabel = this.props.label || this.props.prompt

    const menuItems = this.state.items.map((singleItem, i) => {
      return (
        <li key={i}>
          <MenuItem
            className={styles.DropDownOption}
            value={singleItem.value}
            text={singleItem.name}
          >
            <span className={`hw-drop-down-option ${styles.DropDownText}`}>
              {singleItem.component || singleItem.name}
            </span>
          </MenuItem>
        </li>
      )
    })

    // ⌄

    return (
      <div className={`hw-drop-down ${styles.DropDownContainer}`}>
        {this.props.label && (
          <span
            className={`hw-drop-down-label ${styles.DropDownLabel}`}
            aria-hidden="true"
            role="presentation"
          >
            {this.props.label}
          </span>
        )}
        <Wrapper className={styles.DropDownWrapper} onSelection={this.onSelectNewValue}>
          <Button
            className={`hw-drop-down-button ${styles.DropDown}`}
            aria-label={ariaLabel}
            aria-describedby={this.state.valueId}
          >
            {this.props.icon && (
              <span className={styles.DropDownIcon} aria-hidden="true" role="presentation">
                {this.props.icon}
              </span>
            )}
            <span
              id={this.state.valueId}
              tabIndex="-1" // Makes IE read aria-describedby element
              className={`hw-drop-down-value ${styles.DropDownText}`}
            >
              {this.state.value.name}
            </span>
            <span
              className={'hw-drop-down-icon-arrow ' + styles.DropDownIconDownArrow}
              aria-hidden="true"
              role="presentation"
            >
              {DownArrowIcon({ role: 'presentation', className: 'hw-icon-white' })}
            </span>
            <span
              className={'hw-drop-down-icon-arrow ' + styles.DropDownIconUpArrow}
              aria-hidden="true"
              role="presentation"
            >
              {UpArrowIcon({ role: 'presentation', className: 'hw-icon-white' })}
            </span>
          </Button>
          <Menu className={styles.DropDownItems}>
            <ul className={styles.DropDownItemsList}>{menuItems}</ul>
          </Menu>
        </Wrapper>
      </div>
    )
  }
}

const validItemTypes = [
  PropTypes.string,
  PropTypes.number,
  PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    component: PropTypes.node,
  }),
]

DropDown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.oneOfType(validItemTypes)).isRequired,
  icon: PropTypes.any,
  label: PropTypes.string,
  prompt: PropTypes.string,
  maintainPrompt: PropTypes.bool,
  value: PropTypes.oneOfType(validItemTypes),
  onSelect: PropTypes.func.isRequired,
}

DropDown.defaultProps = {
  prompt: 'Select a value',
  maintainPrompt: false,
}

export default DropDown
