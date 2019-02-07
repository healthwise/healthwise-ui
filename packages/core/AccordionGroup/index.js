import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Accordion from '../Accordion'
import styles from './AccordionGroup.css'

class AccordionGroup extends Component {
  render() {
    const { className, items, ...otherProps } = this.props

    const accordionGroupClass = classNames('hw-accordion-group', className)

    return (
      <div className={accordionGroupClass} {...otherProps}>
        {items.map((item, index) => (
          <div key={`hw-accordion-item-${index}`} className={styles.item}>
            <Accordion title={item.title} onChange={item.onChange}>
              {item.content}
            </Accordion>
          </div>
        ))}
      </div>
    )
  }
}

AccordionGroup.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired,
      onChange: PropTypes.func,
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    })
  ),
}

export default AccordionGroup
