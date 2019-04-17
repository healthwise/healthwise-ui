import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { withTheme } from 'styled-components'

import Accordion from '../Accordion'
import { defaultTheme } from '../Theme'

const Item = styled.div`
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacingM};
  }
`

class AccordionGroup extends Component {
  render() {
    const { className, items, theme, ...otherProps } = this.props

    return (
      <div className={classNames('hw-accordion-group', className)} {...otherProps}>
        {items.map((item, index) => (
          <Item key={`hw-accordion-item-${index}`} theme={theme}>
            <Accordion title={item.title} onChange={item.onChange}>
              {item.content}
            </Accordion>
          </Item>
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
  theme: PropTypes.shape({
    spacingM: PropTypes.string,
  }),
}

AccordionGroup.defaultProps = {
  theme: defaultTheme,
}

export default withTheme(AccordionGroup)
