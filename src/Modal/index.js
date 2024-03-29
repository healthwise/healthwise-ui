import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styled, { keyframes, withTheme } from 'styled-components'
import uniqueId from 'lodash/uniqueId'

import Button from '../Button'
import ButtonGroup from '../ButtonGroup'
import { defaultTheme } from '../Theme'

const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const fadeOut = keyframes`
  from{
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const DialogContainer = styled.div`
  display: block;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  position: fixed;
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1500;
  background: rgba(0, 0, 0, 0.5);
  transition: visibility 200ms linear;
  animation: ${props => (props.open ? fadeIn : fadeOut)} 200ms linear;
`

const Dialog = styled.dialog`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;
  top: 50%;
  left: 50%;
  margin: 0;
  transform: translate(-50%, -50%);
  min-width: 300px;
  max-width: calc(100% - 25px);
  max-height: calc(100% - 25px);
  min-height: 150px;
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.12), 0 15px 12px rgba(0, 0, 0, 0.22);
  box-sizing: border-box;
  background-color: #fff;
`

const DialogContent = styled.div`
  padding: 0;
  min-height: 25px;
  overflow: auto;

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

    this.handleClose = this.handleClose.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open && !this.props.open) this.handleClose()
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false)
  }

  handleClick = e => {
    const { onBackdropClick, open } = this.props
    if (this.node.contains(e.target)) {
      // Click is inside
      return
    }

    // Click is outside
    open && onBackdropClick && onBackdropClick()
  }

  handleClose(event) {
    this.props.onClose(event)
  }

  render() {
    const {
      actions,
      children,
      className,
      onClose,
      onExited,
      open,
      title,
      theme,
      // Filter out unsupported props
      /* eslint-disable */
      classes,
      onBackdropClick,
      onEnter,
      onEntering,
      onExit,
      onExiting,
      showTitle,
      showActions,
      /* eslint-enable */
      ...otherProps
    } = this.props

    const hasContent = React.Children.count(children) > 0

    return (
      <DialogContainer className={classNames('hw-modal', className)} open={open}>
        <Dialog
          ref={node => (this.node = node)}
          {...otherProps}
          aria-labelledby={this.titleId}
          className={classNames('hw-modal-dialog', className)}
          open={open}
          // this is because the Material dialog ONLY fires its native onClose with escape or overlay click, not any time the modal is closed
          scroll="paper"
        >
          {showTitle && (
            <Title
              id={this.titleId}
              className="hw-modal-title"
              theme={theme}
              hasContent={hasContent}
            >
              {title}
            </Title>
          )}
          <DialogContent className="hw-modal-content">{children}</DialogContent>
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
      </DialogContainer>
    )
  }
}

Modal.propTypes = {
  actions: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.func,
  onEntered: PropTypes.func,
  onExited: PropTypes.func,
  onBackdropClick: PropTypes.func,
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
  onClose: () => {},
  theme: defaultTheme,
  showTitle: true,
  showActions: true,
}

export default withTheme(Modal)
