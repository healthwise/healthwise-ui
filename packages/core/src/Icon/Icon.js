import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'

const IconContainer = styled.div`
  width: 100%;
  height: 100%;
`

const Svg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  fill: ${props => props.theme.colorTextPrimary};
`

class Icon extends Component {
  render() {
    const { children, className, viewBox, ...otherProps } = this.props
    const iconClass = classNames({
      'hw-icon': true,
      [className]: className,
    })

    return (
      <IconContainer className={iconClass}>
        <Svg viewBox={viewBox} focusable="false" {...otherProps}>
          {children}
        </Svg>
      </IconContainer>
    )
  }
}

Icon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  viewBox: PropTypes.string,
  theme: PropTypes.shape({
    colorTextPrimary: PropTypes.string,
  }),
}

Icon.defaultProps = {
  viewBox: '0 0 24 24',
  theme: defaultTheme,
}

export default withTheme(Icon)
