import React from 'react'
import PropTypes from 'prop-types'
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
  box-sizing: border-box;
  display: block;
  position: absolute;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
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
`

const Ring = props => {
  const { className, size } = props

  const circles = [...Array(4)].map((_, index) => {
    return (
      <RingCircle
        key={index}
        style={{
          borderColor: `${getThemeVariable('color')(props)} transparent transparent transparent`,
          width: size * 0.8,
          height: size * 0.8,
          margin: size * 0.1,
          borderWidth: size * 0.1,
        }}
      />
    )
  })
  return (
    <RingRoot className={className} style={{ width: size, height: size }}>
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
