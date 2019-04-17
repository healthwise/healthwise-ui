import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { keyframes, withTheme } from 'styled-components'

import { defaultTheme, getThemeVariable } from '../Theme'

const indeterminateAnimation1 = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60% {
    left: 100%;
    right: -90%;
  }
  100% {
    left: 100%;
    right: -90%;
  }
`

const indeterminateAnimation2 = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
`

const bufferAnimation = keyframes`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }
  50% {
    opacity: 0.1;
    background-position: -100px -23px;
  }
  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`

const Root = styled.div`
  position: relative;
  padding-top: ${props => (props.showPercentage ? '1.25em' : '0')};
`

const Value = styled.div`
  position: absolute;
  top: 0;
  font-size: 1em;
  line-height: 1;
  color: ${props => props.theme.colorTextPrimary};
`

const BarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  overflow: hidden;
  transform: ${props => (props.progressBarType === 'query' ? 'rotate(180deg)' : 'none')};
`

const DefaultBar = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 2;
  background: ${getThemeVariable('color')};
`

const IndeterminateBar1 = styled(DefaultBar)`
  animation: ${indeterminateAnimation1} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
`

const IndeterminateBar2 = styled(DefaultBar)`
  animation: ${indeterminateAnimation2} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  animation-delay: 1.15s;
`

const Background = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  z-index: 1;
  background: ${getThemeVariable('color', { variant: 'light' })};
`

const Buffer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: radial-gradient(
    ${getThemeVariable('color', { variant: 'light' })} 0%,
    ${getThemeVariable('color', { variant: 'light' })} 16%,
    transparent 42%
  );
  background-size: 10px 10px;
  background-position: 0px -23px;
  animation: ${bufferAnimation} 3s infinite linear;
`

class ProgressBar extends Component {
  _normalizePercentage(percent) {
    if (percent < 0) {
      percent = 0
    } else if (percent > 100) {
      percent = 100
    }

    return Math.round(percent)
  }

  render() {
    const {
      className,
      showPercentage,
      percentComplete,
      progressBarType,
      buffer,
      color,
      theme,
      ...otherProps
    } = this.props

    const percent = this._normalizePercentage(percentComplete)
    const bufferPercent = this._normalizePercentage(buffer)

    return (
      <Root
        className={classNames('hw-progress-bar', className)}
        showPercentage={showPercentage}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={percent}
        {...otherProps}
      >
        {showPercentage && (
          <Value
            className="hw-progress-bar-number"
            theme={theme}
            style={{ left: percentComplete + '%' }}
          >
            {percent}%
          </Value>
        )}
        <BarContainer className="hw-progress-bar-container" progressBarType={progressBarType}>
          {progressBarType === 'determinate' && (
            <DefaultBar
              className="hw-progress-bar-fill"
              color={color}
              theme={theme}
              style={{ width: percent + '%' }}
            />
          )}
          {(progressBarType === 'indeterminate' || progressBarType === 'query') && (
            <Fragment>
              <IndeterminateBar1 className="hw-progress-bar-fill" color={color} theme={theme} />
              <IndeterminateBar2 className="hw-progress-bar-fill" color={color} theme={theme} />
            </Fragment>
          )}
          {progressBarType === 'buffer' && (
            <Fragment>
              <DefaultBar
                className="hw-progress-bar-fill"
                color={color}
                theme={theme}
                style={{ width: percent + '%' }}
              />
              <Buffer className="hw-progress-bar-buffer" color={color} theme={theme} />
            </Fragment>
          )}
          <Background
            className="hw-progress-bar-background"
            color={color}
            theme={theme}
            style={{
              width: progressBarType === 'buffer' ? bufferPercent + '%' : '100%',
            }}
          />
        </BarContainer>
      </Root>
    )
  }
}

ProgressBar.propTypes = {
  className: PropTypes.string,
  progressBarType: PropTypes.oneOf(['determinate', 'indeterminate', 'buffer', 'query']),
  buffer: PropTypes.number,
  showPercentage: PropTypes.bool,
  percentComplete: PropTypes.number,
  color: PropTypes.oneOf(['primary', 'neutral']),
  theme: PropTypes.shape({
    colorPrimaryLight: PropTypes.string,
    colorPrimary: PropTypes.string,
    colorNeutralLight: PropTypes.string,
    colorNeutral: PropTypes.string,
    colorTextPrimary: PropTypes.string,
  }),
}

ProgressBar.defaultProps = {
  showPercentage: false,
  progressBarType: 'determinate',
  percentComplete: 0,
  buffer: 0,
  color: 'primary',
  theme: defaultTheme,
}

export default withTheme(ProgressBar)
