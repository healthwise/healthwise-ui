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

// TODO: Material UI doesn't support overriding a theme locally by using the
// theme prop, like styled-components does. The theme argument in the
// withStyles function can only be updated using the MuiThemeProvider. The
// @material-ui/styles package (currently in alpha) is supposed to release
// with material-ui v4, and will support this functionality. Until then, we
// need these inline default values, to support a component having a default
// theme without requiring the consumer to use a ThemeProvider component in
// their app.
const ExpansionPanel = withStyles(theme => ({
  root: {
    border: `1px solid ${theme.colorBorder || '#727272'}`,
    background: theme.colorBackgroundLight || '#fff',
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
    padding: `${theme.spacingM || '16px'} ${theme.spacingL || '24px'}`,
    minHeight: 0,
    '&:focus': {
      backgroundColor: theme.colorBackgroundLight || '#fff',
      outline: theme.focusIndicator || '2px dotted #424242',
      outlineOffset: theme.focusIndicatorOffset || '2px',
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
    padding: `${theme.spacingM || '16px'} ${theme.spacingL || '24px'} ${theme.spacingL || '24px'}`,
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
    fill: theme.colorTextSecondary || '#676767',
  }
}))(AddIcon)

const CollapseIcon = withStyles(theme => ({
  root: {
    fill: theme.colorTextSecondary || '#676767',
  }
}))(RemoveIcon)

const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  margin-right: ${props => props.theme.spacingXxl};
  color: ${props => props.theme.colorTextPrimary};
`

Title.defaultProps = {
  theme: defaultTheme
}

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
            {React.isValidElement(title) ? (
              <div className="hw-accordion-title">{title}</div>
            ) : (
              <Title className="hw-accordion-title" theme={theme}>{title}</Title>
            )}
          </ExpansionPanelSummary>
        )}
        <ExpansionPanelDetails className="hw-accordion-content">
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
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  // TODO: update this propType with all the variables being used in the accordion
  // once @material-ui/styles package is being used.
  theme: PropTypes.shape({
    colorTextPrimary: PropTypes.string,
    spacingXxl: PropTypes.string,
  }),
}

export default Accordion
