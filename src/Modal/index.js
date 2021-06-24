/**
 * An accessible modal window;
 *
 * With access to both a high level all-in-one component as well as the lower level building blocks
 */

import * as React from 'react'
import { Portal } from '../Portal'

import styled from 'styled-components'
import PropTypes from 'prop-types'
import FocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'

/**
 * Styled Components
 */
// const Dialog = styled.div`
//   margin: ${props => [props.theme.spacingXxl || '64px', props.theme.spacingL || '24px']};
//   padding: ${props => props.theme.spacingL || '24px'};
// `

const DialogOverlay = styled.div`
  background: hsla(0, 0%, 0%, 0.33);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  display: grid;
  justify-content: center;
  align-content: center;
`

const DialogContent = styled.div`
  padding: 1rem;
  background-color: white;
  max-width: 50rem;
  min-width: 34.9rem;
  min-height: 17rem;
  background: 0% 0% no-repeat padding-box padding-box rgb(255, 255, 255);
  opacity: 1;
  box-shadow: rgb(0 0 0 / 16%) 0rem 0.188rem 0.375rem;
  border-radius: 0.5rem;
  border: 0.063rem solid rgb(112, 112, 112);
  display: grid;

  & > *:first-child {
    margin-bottom: 0;
  }
  & > *:last-child {
    margin-top: 0;
    align-self: end;
  }
`

const Title = styled.h2`
  margin: 0;
  padding: ${props => (props.hasContent ? `0 0 ${props.theme.spacingL}` : 0)};
  color: ${props => props.theme.colorTextPrimary};
  font-weight: 500;
  line-height: 1.6;
  font-size: 1.875rem;
  letter-spacing: 0px;
  color: rgb(66, 66, 66);
  opacity: 1;
`

const Actions = styled.div`
  padding-top: ${props => props.theme.spacingL};
`

/**
 * ModalOverlay
 *
 * The backdrop of the Modal, if you need to override styles or rendering of the overlay.
 *
 * Note: Must have ModalContent rendered inside
 */

function composeEventHandlers(theirHandler, ourHandler) {
  return event => {
    theirHandler && theirHandler(event)
    if (!event.defaultPrevented) {
      return ourHandler(event)
    }
  }
}

const ModalOverlay = React.forwardRef(function ModalOverlay({ isOpen, ...props }, forwardedRef) {
  return isOpen ? (
    <Portal>
      <ModalInner ref={forwardedRef} {...props} />
    </Portal>
  ) : null
})

const ModalInner = React.forwardRef(function ModalInner(
  { initialFocusRef, onClick, onDismiss, onKeyDown, onMouseDown, ...props },
  forwardedRef
) {
  const mouseDownTarget = React.useRef(null)
  // TODO: come back to this one
  // const overlay = React.useRef(null)
  // const ref = useComposedRefs(overlay, forwardedRef)

  const activateFocusLock = React.useCallback(() => {
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus()
    }
  }, [initialFocusRef])

  function handleClick(event) {
    if (mouseDownTarget.current === event.target) {
      event.stopPropagation()
      onDismiss(event)
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      event.stopPropagation()
      onDismiss(event)
    }
  }

  function handleMouseDown(event) {
    mouseDownTarget.current = event.target
  }

  // React.useEffect(() => {
  //   return overlay.current ? createAria(overlay.current) : null
  // }, [])

  return (
    <FocusLock autofocus returnFocus onActivation={activateFocusLock}>
      <RemoveScroll>
        <DialogOverlay
          {...props}
          ref={forwardedRef}
          onClick={composeEventHandlers(onClick, handleClick)}
          onDismiss={props.onClose}
          onKeyDown={composeEventHandlers(onKeyDown, handleKeyDown)}
          onMouseDown={composeEventHandlers(onMouseDown, handleMouseDown)}
        />
      </RemoveScroll>
    </FocusLock>
  )
})

/**
 * Modal Title
 *
 * Primitive for styling the Title
 */

const ModalTitle = ({ children }) => <Title>{children}</Title>

const ModalContent = React.forwardRef(function ModalContent(
  { actions, children, onClose, onClick, onKeyDown, theme, title, ...props },
  forwardedRef
) {
  return (
    <DialogContent
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      ref={forwardedRef}
      {...props}
      onClick={composeEventHandlers(onClick, event => {
        event.stopPropagation()
      })}
    >
      {title ? <ModalTitle>{title}</ModalTitle> : null}
      {children ? <div>{children}</div> : null}
      {actions ? (
        <Actions theme={theme}>
          <ButtonGroup className="hw-modal-actions">{actions}</ButtonGroup>
        </Actions>
      ) : (
        <Actions theme={theme}>
          <ButtonGroup className="hw-modal-actions">
            <Button color="neutralLight" rounded onClick={onClose}>
              Close
            </Button>
          </ButtonGroup>
        </Actions>
      )}
    </DialogContent>
  )
})

/**
 * Modal
 *
 * High level component for rendering a modal window over the page, or another Modal.
 */

const Modal = React.forwardRef(function Modal({ isOpen, onDismiss, ...props }, forwardedRef) {
  return (
    <ModalOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <ModalContent ref={forwardedRef} {...props} />
    </ModalOverlay>
  )
})

Modal.propTypes = {
  actions: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  fullScreen: PropTypes.bool,
  onClose: PropTypes.func,
  onEscapeKeyDown: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    colorTextPrimary: PropTypes.string,
    spacingL: PropTypes.string,
  }),
}

export { ModalOverlay, ModalContent }
export default Modal
