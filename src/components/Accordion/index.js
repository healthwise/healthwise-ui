import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

import styles from './Accordion.css'

const accordionStyles = {
  disabled: {
    opacity: 0.35,
  },
}
const StyledExpansionPanel = withStyles(accordionStyles)(ExpansionPanel)

const accordionHeaderStyles = {
  content: {
    margin: 0,
  },
  expanded: {
    '& $content': {
      margin: 0,
    },
  },
  disabled: {
    opacity: '1 !important',
  },
  expandIcon: {
    transform: 'translateY(-50%)',
    transition: 'none',
    '&$expanded': {
      transform: 'translateY(-50%)',
      '& .hw-accordion-expand-icon': {
        display: 'none',
      },
      '& .hw-accordion-collapse-icon': {
        display: 'block',
      },
    },
    '& .hw-accordion-collapse-icon': {
      display: 'none',
    },
  },
}
const StyledExpansionPanelSummary = withStyles(accordionHeaderStyles)(ExpansionPanelSummary)

class Accordion extends Component {
  render() {
    const { children, className, title, ...otherProps } = this.props

    const accordionClass = classNames('hw-accordion', styles.accordion, className)

    return (
      <StyledExpansionPanel className={accordionClass} {...otherProps}>
        {title && (
          <StyledExpansionPanelSummary
            className={`hw-accordion-header ${styles.header}`}
            expandIcon={
              <Fragment>
                <AddIcon className={`hw-accordion-expand-icon ${styles.icon}`} />
                <RemoveIcon className={`hw-accordion-collapse-icon ${styles.icon}`} />
              </Fragment>
            }
            disableRipple
            disableTouchRipple
            IconButtonProps={{
              disableRipple: true,
              disableTouchRipple: true,
            }}
          >
            <h2 className={`hw-accordion-title ${styles.title}`}>{title}</h2>
          </StyledExpansionPanelSummary>
        )}
        <ExpansionPanelDetails className={`hw-accordion-content ${styles.content}`}>
          {children}
        </ExpansionPanelDetails>
      </StyledExpansionPanel>
    )
  }
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  defaultExpanded: PropTypes.bool,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  onChange: PropTypes.func,
  title: PropTypes.string,
}

export default Accordion
