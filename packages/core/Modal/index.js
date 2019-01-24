import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import { withStyles } from '@material-ui/core/styles'
import uniqueId from 'lodash/uniqueId'

import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import Theme from '../Theme'
import appTheme from 'appTheme'
import styles from './Modal.css'

const theme = Theme(appTheme)

const modalStyles = {
  paper: {
    margin: `${theme['spacing-xxl']} ${theme['spacing-l']}`,
    padding: theme['spacing-l'],
  },
}
const modalContentStyles = {
  root: {
    padding: '0',
  },
}
const StyledDialog = withStyles(modalStyles)(Dialog)
const StyledDialogContent = withStyles(modalContentStyles)(DialogContent)

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

    const dialogClass = classNames('hw-modal', className)
    const titleClass = classNames('hw-modal-title', styles.title, { [styles.children]: children })

    return (
      <StyledDialog
        {...otherProps}
        aria-labelledby={this.titleId}
        className={dialogClass}
        open={open}
        onClose={onClose}
        scroll="paper"
        maxWidth={maxWidth}
      >
        <h2 id={this.titleId} className={titleClass}>
          {title}
        </h2>
        {children && (
          <StyledDialogContent className={`hw-modal-content ${styles.content}`}>
            {children}
          </StyledDialogContent>
        )}
        <div className={styles.actions}>
          <ButtonGroup className="hw-modal-actions">
            {actions || (
              <Button theme="neutral-light" rounded onClick={onClose}>
                Close
              </Button>
            )}
          </ButtonGroup>
        </div>
      </StyledDialog>
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
}

Modal.defaultProps = {
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  fullScreen: false,
  maxWidth: 'sm',
  onClose: () => {},
}

export default Modal
