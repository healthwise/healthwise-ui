import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { keyframes, withTheme } from 'styled-components'
import { defaultTheme, getThemeVariable } from '../Theme'

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`
const RingCircle = styled.div`
  display: block;
  position: absolute;
  box-sizing: border-box;
  width: ${props => props.size * 0.8}px;
  height: ${props => props.size * 0.8}px;
  margin: ${props => props.size * 0.1}px;
  border: 8px solid #fff;
  border-radius: 50%;
  border-width: ${props => props.size * 0.1}px;
  border-color: ${props => props.borderColor} transparent transparent transparent;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`

const RingRoot = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`

const Ring = props => {
  const { className, size } = props

  const circles = [...Array(4)].map((_, index) => {
    return (
      <RingCircle
        className="hw-ring-circle"
        key={index}
        size={size}
        borderColor={getThemeVariable('color')(props)}
      />
    )
  })
  return (
    <RingRoot className={classNames('hw-ring-root', className)} size={size}>
      {circles}
    </RingRoot>
  )
}

Ring.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'primaryLight',
    'primaryDark',
    'primaryDarker',
    'accent',
    'accentDark',
    'neutral',
    'neutralLight',
    'neutralDark',
  ]),
  size: PropTypes.number,
  className: PropTypes.string,
  theme: PropTypes.shape({
    colorPrimaryLight: PropTypes.string,
    colorPrimaryDark: PropTypes.string,
  }),
}

Ring.defaultProps = {
  color: 'primary',
  size: 80,
  theme: defaultTheme,
}

export default withTheme(Ring)
