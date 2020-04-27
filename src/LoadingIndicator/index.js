import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'
import ScreenReaderOnly from '../ScreenReaderOnly'

const skbouncedelay = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
`

const Root = styled.div`
  min-height: 50px;
  position: relative;
  padding: 0.75rem 0;
  text-align: center;
`

const Dots = styled.div`
  margin: 0;
  width: 60px;
  display: inline-block;
`

const Dot = styled.div`
  width: 18px;
  height: 18px;
  background-color: ${props =>
    props.inverted ? props.theme.colorPrimaryLight : props.theme.colorPrimaryDark};

  border-radius: 100%;
  display: inline-block;
  animation: ${skbouncedelay} 1.4s infinite ease-in-out both;
  animation-delay: ${props => {
    if (props.position === 1) {
      return '-0.32s'
    } else if (props.position === 2) {
      return '-0.16s'
    } else return '1.4s'
  }};
`

class LoadingIndicator extends React.Component {
  render() {
    const { hiddenText, inverted, theme, ...otherProps } = this.props

    return (
      <Root
        className="hw-loading-indicator-wrapper"
        role="alert"
        aria-label="loading"
        {...otherProps}
      >
        <ScreenReaderOnly>{hiddenText}</ScreenReaderOnly>
        <Dots aria-hidden className={'hw-loading-indicator-dots'}>
          <Dot
            aria-hidden
            className="hw-loading-indicator-dot"
            position={1}
            inverted={inverted}
            theme={theme}
          />
          <Dot
            aria-hidden
            className="hw-loading-indicator-dot"
            position={2}
            inverted={inverted}
            theme={theme}
          />
          <Dot aria-hidden className="hw-loading-indicator-dot" inverted={inverted} theme={theme} />
        </Dots>
      </Root>
    )
  }
}

LoadingIndicator.propTypes = {
  hiddenText: PropTypes.string,
  inverted: PropTypes.bool,
  theme: PropTypes.shape({
    colorPrimaryLight: PropTypes.string,
    colorPrimaryDark: PropTypes.string,
  }),
}

LoadingIndicator.defaultProps = {
  hiddenText: 'Loading page',
  inverted: false,
  theme: defaultTheme,
}

export default withTheme(LoadingIndicator)
