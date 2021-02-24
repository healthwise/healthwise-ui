import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import uniqueId from 'lodash/uniqueId'

import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import { defaultTheme } from '../Theme'

const Dialog = styled.dialog`
  margin: ${props => [props.theme.spacingXxl || '64px', props.theme.spacingL || '24px']};
  padding: ${props => props.theme.spacingL || '24px'};
`

const DialogContent = styled.div`
  padding: 0;

  & > *:first-child {
    margin-bottom: 0;
  }
  & > *:last-child {
    margin-top: 0;
  }
`

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
      onExited,
      open,
      title,
      theme,
      // Filter out unsupported props
      /* eslint-disable */
      classes,
      fullWidth,
      onEnter,
      onEntering,
      onExit,
      onExiting,
      PaperProps,
      scroll,
      TransitionComponent,
      transitionDuration,
      TransitionProps,
      showTitle,
      showActions,
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
        // this is because the Material dialog ONLY fires its native onClose with escape or overlay click, not any time the modal is closed
        onExited={() => {
          onClose()
          onExited && onExited()
        }}
        scroll="paper"
        maxWidth={maxWidth}
      >
        {showTitle && (
          <Title id={this.titleId} className="hw-modal-title" theme={theme} hasContent={hasContent}>
            {title}
          </Title>
        )}
        {children && <DialogContent className="hw-modal-content">{children}</DialogContent>}
        {showActions && (
          <Actions theme={theme}>
            <ButtonGroup className="hw-modal-actions">
              {actions || (
                <Button color="neutralLight" rounded onClick={onClose}>
                  Close
                </Button>
              )}
            </ButtonGroup>
          </Actions>
        )}
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
  onEntered: PropTypes.func,
  onExited: PropTypes.func,
  onEscapeKeyDown: PropTypes.func,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  showTitle: PropTypes.bool,
  showActions: PropTypes.bool,
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
  showTitle: true,
  showActions: true,
}

export default withTheme(Modal)
