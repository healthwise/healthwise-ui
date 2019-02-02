import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { withStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

import { defaultTheme } from '../Theme'

const ExpansionPanel = withStyles(theme => ({
  root: {
    border: `1px solid ${theme['color-border'] || '#727272'}`,
    background: theme['color-background-light'] || '#fff',
    margin: 0,
    boxShadow: 'none',
    '&:last-child': {
      borderRadius: 0
    },
    '&:first-child': {
      borderRadius: 0
    },
  },
  disabled: {
    opacity: 0.35,
  },
}))(MuiExpansionPanel)


const ExpansionPanelSummary = withStyles(theme => ({
  root: {
    padding: `${theme['spacing-m'] || '16px'} ${theme['spacing-l'] || '24px'}`,
    minHeight: 0,
    '&:focus': {
      backgroundColor: theme['color-background-light'] || '#fff',
      outline: theme['focus-indicator'] || '2px dotted #424242',
      outlineOffset: theme['focus-indicator-offset'] || '2px',
    },
    '&$expanded': {
      minHeight: 0,
    }
  },
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
}))(MuiExpansionPanelSummary)

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: `${theme['spacing-m'] || '16px'} ${theme['spacing-l'] || '24px'} ${theme['spacing-l'] || '24px'}`,
    '& > *:first-child': {
      marginTop: 0
    },
    '& > *:last-child': {
      marginBottom: 0
    }
  }
}))(MuiExpansionPanelDetails)

const ExpandIcon = withStyles(theme => ({
  root: {
    fill: theme['color-text-secondary'],
  }
}))(AddIcon)

const CollapseIcon = withStyles(theme => ({
  root: {
    fill: theme['color-text-secondary'],
  }
}))(RemoveIcon)

const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  margin-right: ${props => props.theme['spacing-xxl']};
  color: ${props => props.theme['color-text-primary']};
`

class Accordion extends Component {
  render() {
    const { children, className, title, theme, ...otherProps } = this.props

    return (
      <ExpansionPanel
        className={classNames('hw-accordion', className)}
        {...otherProps}
      >
        {title && (
          <ExpansionPanelSummary
            className="hw-accordion-header"
            expandIcon={
              <Fragment>
                <ExpandIcon className="hw-accordion-expand-icon" />
                <CollapseIcon className="hw-accordion-collapse-icon" />
              </Fragment>
            }
            disableRipple
            disableTouchRipple
            IconButtonProps={{
              disableRipple: true,
              disableTouchRipple: true,
            }}
          >
            <Title className="hw-accordion-title">{title}</Title>
          </ExpansionPanelSummary>
        )}
        <ExpansionPanelDetails className={`hw-accordion-content`} theme={theme}>
          {children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
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
  theme: PropTypes.object,
}

Accordion.defaultProps = {
  theme: defaultTheme
}

export default Accordion
