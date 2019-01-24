import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Tab from '../Tab'
import styles from './TabGroup.css'

class TabGroup extends Component {
  constructor() {
    super()
    this.tabGroup = React.createRef()
  }

  componentDidMount() {
    this.scrollToActive()
  }

  scrollToActive() {
    const parent = this.tabGroup.current
    // grab the first active tab, if there is one
    const activeTab = parent && parent.querySelector('.hw-tab-is-active')

    if (parent && activeTab) {
      const parentLeft = parent.offsetLeft
      const parentWidth = parent.offsetWidth
      const tabLeft = activeTab.offsetLeft
      const tabWidth = activeTab.offsetWidth
      const amountToScroll = tabLeft - parentLeft - parentWidth / 2 + tabWidth / 2

      parent.scrollLeft = amountToScroll
    }
  }

  render() {
    const { children, className, stretch, ...otherProps } = this.props
    const tabGroupClassName = classNames({
      'hw-tab-group': true,
      [styles.TabGroup]: true,
      [className]: className,
      [styles.stretch]: stretch,
    })
    const tabContainerClassName = classNames({
      [styles.tabContainer]: true,
      [styles.tabContainerStretch]: stretch,
    })

    return (
      <ol ref={this.tabGroup} className={tabGroupClassName} {...otherProps}>
        {React.Children.map(children, (tab, index) => (
          <li key={index} className={tabContainerClassName}>
            {tab}
          </li>
        ))}
      </ol>
    )
  }
}

TabGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.shape({ type: PropTypes.oneOf([Tab]) }),
    PropTypes.arrayOf(PropTypes.shape({ type: PropTypes.oneOf([Tab]) })),
  ]),
  className: PropTypes.string,
  stretch: PropTypes.bool,
}

TabGroup.defaultProps = {
  stretch: true,
}

export default TabGroup
