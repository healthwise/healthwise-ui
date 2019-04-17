import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, withTheme } from 'styled-components'

import { defaultTheme } from '../Theme'
import ScreenReaderOnly from '../ScreenReaderOnly'

const spinnerOuterAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(180deg); }
  50% { transform: rotate(180deg); }
  75% { transform: rotate(360deg); }
  100% { transform: rotate(360deg); }
`

const spinnerInnerAnimation = keyframes`
  0% { height: 0%; }
  25% { height: 0%; }
  50% { height: 100%; }
  75% { height: 100%; }
  100% { height: 0%; }
`

const Root = styled.div`
  min-height: 50px;
  position: relative;
`

const SpinnerOuter = styled.span`
  display: inline-block;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  position: absolute;
  border: ${props =>
    props.inverted
      ? `4px solid ${props.theme.colorPrimaryLight}`
      : `4px solid ${props.theme.colorPrimaryDark}`};
  top: 10px;
  left: 50%;
  transform: translateX(-15px);
  animation: ${spinnerOuterAnimation} 4s infinite ease;
`

const SpinnerInner = styled.span`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: ${props =>
    props.inverted ? props.theme.colorPrimaryLight : props.theme.colorPrimaryDark};
  animation: ${spinnerInnerAnimation} 4s infinite ease-in;
`

class LoadingIndicator extends React.Component {
  render() {
    const { hiddenText, inverted, theme, ...otherProps } = this.props

    return (
      <Root className="hw-loading-indicator-wrapper" {...otherProps}>
        <ScreenReaderOnly>{hiddenText}</ScreenReaderOnly>
        <SpinnerOuter className="hw-loading-indicator" inverted={inverted} theme={theme}>
          <SpinnerInner className="hw-loading-indicator-inner" inverted={inverted} theme={theme} />
        </SpinnerOuter>
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
