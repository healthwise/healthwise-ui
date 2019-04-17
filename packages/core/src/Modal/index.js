import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import MuiDialog from '@material-ui/core/Dialog'
import MuiDialogContent from '@material-ui/core/DialogContent'
import { withStyles } from '@material-ui/core/styles'
import styled, { withTheme } from 'styled-components'
import uniqueId from 'lodash/uniqueId'

import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import { defaultTheme } from '../Theme'

// TODO: Material UI doesn't support overriding a theme locally by using the
// theme prop, like styled-components does. The theme argument in the
// withStyles function can only be updated using the MuiThemeProvider. The
// @material-ui/styles package (currently in alpha) is supposed to release
// with material-ui v4, and will support this functionality. Until then, we
// need these inline default values, to support a component having a default
// theme without requiring the consumer to use a ThemeProvider component in
// their app.
const Dialog = withStyles(theme => ({
  paper: {
    margin: `${theme.spacingXxl || '64px'} ${theme.spacingL || '24px'}`,
    padding: theme.spacingL || '24px',
  },
}))(MuiDialog)

const DialogContent = withStyles(theme => ({
  root: {
    padding: '0',
    '& > *:first-child': {
      marginTop: 0,
    },
    '& > *:last-child': {
      marginBottom: 0,
    },
  },
}))(MuiDialogContent)

const Title = styled.h2`
  margin: 0;
  padding: ${props => (props.hasContent ? `0 0 ${props.theme.spacingL}` : 0)};
  color: ${props => props.theme.colorTextPrimary};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
`

const Actions = styled.div`
  padding-top: ${props => props.theme.spacingL};
`

class Modal extends Component {
  constructor(props) {
    super(props)
    this.titleId = uniqueId('hw-modal-title')
  }

  render() {
    const {
      actions,
      children,
      className,
      maxWidth,
      onClose,
      open,
      title,
      theme,
      // Filter out unsupported props
      /* eslint-disable */
      classes,
      fullWidth,
      onEntering,
      onExiting,
      PaperProps,
      scroll,
      TransitionComponent,
      transitionDuration,
      TransitionProps,
      /* eslint-enable */
      ...otherProps
    } = this.props

    const hasContent = React.Children.count(children) > 0

    return (
      <Dialog
        {...otherProps}
        aria-labelledby={this.titleId}
        className={classNames('hw-modal', className)}
        open={open}
        onClose={onClose}
        scroll="paper"
        maxWidth={maxWidth}
      >
        <Title id={this.titleId} className="hw-modal-title" theme={theme} hasContent={hasContent}>
          {title}
        </Title>
        {children && <DialogContent className="hw-modal-content">{children}</DialogContent>}
        <Actions theme={theme}>
          <ButtonGroup className="hw-modal-actions">
            {actions || (
              <Button color="neutralLight" rounded onClick={onClose}>
                Close
              </Button>
            )}
          </ButtonGroup>
        </Actions>
      </Dialog>
    )
  }
}

Modal.propTypes = {
  actions: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  disableBackdropClick: PropTypes.bool,
  disableEscapeKeyDown: PropTypes.bool,
  fullScreen: PropTypes.bool,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', false]),
  onBackdropClick: PropTypes.func,
  onClose: PropTypes.func,
  onEnter: PropTypes.func,
  onEntered: PropTypes.func,
  onEscapeKeyDown: PropTypes.func,
  onExit: PropTypes.func,
  onExited: PropTypes.func,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  // TODO: update this propType with all the variables being used in the modal
  // once @material-ui/styles package is being used.
  theme: PropTypes.shape({
    colorTextPrimary: PropTypes.string,
    spacingL: PropTypes.string,
  }),
}

Modal.defaultProps = {
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  fullScreen: false,
  maxWidth: 'sm',
  onClose: () => {},
  theme: defaultTheme,
}

export default withTheme(Modal)
