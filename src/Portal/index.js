/**
 * Portal
 *
 * Creates, and appends, a DOM node to the end of document.body and renders
 * a React tree into it.
 *
 * Used with modals, dialogs, popovers.
 */

import * as React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

/**
 * Forces a rerender
 */
function useForceUpdate() {
  let [, dispatch] = React.useState(Object.create(null))
  return React.useCallback(() => {
    dispatch(Object.create(null))
  }, [])
}

const Portal = ({ children, type = 'healthwise-ui-portal' }) => {
  let mountNode = React.useRef(null)
  let portalNode = React.useRef(null)
  let forceUpdate = useForceUpdate()

  React.useLayoutEffect(() => {
    // This ref may be null when hot module reloading replaces components on the page
    if (!mountNode.current) return

    // Make sure we have the correct document element.
    const ownerDocument = mountNode.current?.ownerDocument
    portalNode.current = ownerDocument?.createElement(type)
    ownerDocument.body.appendChild(portalNode.current)
    forceUpdate()
    return () => {
      if (portalNode.current && portalNode.current.ownerDocument) {
        portalNode.current.ownerDocument.body.removeChild(portalNode.current)
      }
    }
  }, [type, forceUpdate])

  return portalNode.current ? (
    createPortal(children, portalNode.current)
  ) : (
    <span ref={mountNode} />
  )
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
}

if (__DEV__) {
  Portal.displayName = 'Portal'
}

export { Portal }
export default Portal
