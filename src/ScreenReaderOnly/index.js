import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'

const Root = styled.div`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`

class ScreenReaderOnly extends Component {
  render() {
    const { className, children, ...otherProps } = this.props

    return (
      <Root className={classNames('hw-screen-reader-only', className)} {...otherProps}>
        {children}
      </Root>
    )
  }
}

ScreenReaderOnly.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default ScreenReaderOnly
