import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

import { createTheme } from '../Theme'
import styles from './ProgressBar.css'

const themeSettings = createTheme()

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
    let { className, showPercentage, percentComplete, progressBarType, buffer, theme } = this.props
    let completed = this._normalizePercentage(percentComplete)
    percentComplete = completed + '%'
    let percentageNumber = showPercentage ? (
      <div
        className={`hw-progress-bar-number ${styles.progress_bar_number}`}
        style={{ left: percentComplete }}
      >
        {percentComplete}
      </div>
    ) : null

    let colorPrimary = themeSettings[`color-${theme}`]
    let colorSecondary = themeSettings[`color-${theme}-light`]
    let colorPrimaryDark = themeSettings[`color-${theme}-dark`]
    let colorDashedBackground = themeSettings['color-background-light']
    let dashedGradient = `radial-gradient(${colorSecondary} 0%, ${colorPrimaryDark} 16%, transparent 42%)`

    const progressBarStyles = {
      root: {
        flexGrow: 1,
      },
      barColorPrimary: { backgroundColor: colorPrimary },
      colorPrimary: { backgroundColor: colorSecondary },
      dashedColorPrimary: {
        'background-size': '10px 10px',
        'background-image': dashedGradient,
        backgroundColor: colorDashedBackground,
      },
      // bar1Determinate: {
      //   background: 'linear-gradient(to left, #e21e4a, #a92fff)'
      // }
    }

    const StyledLinearProgress = withStyles(progressBarStyles)(LinearProgress)

    const progressClass = classNames('hw-progress-bar-fill', styles.progress_bar_fill, className)

    return (
      <div
        className={`hw-progress-bar ${styles.progress_bar}`}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className={`hw-progress-bar-container ${styles.progress_bar_container}`}>
          {percentageNumber}
          <StyledLinearProgress
            className={progressClass}
            variant={progressBarType}
            value={completed}
            valueBuffer={buffer}
          />
        </div>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  className: PropTypes.string,
  progressBarType: PropTypes.oneOf(['determinate', 'indeterminate', 'buffer', 'query']),
  buffer: PropTypes.number,
  showPercentage: PropTypes.bool,
  percentComplete: PropTypes.number.isRequired,
  theme: PropTypes.oneOf(['primary', 'neutral']),
}

ProgressBar.defaultProps = {
  showPercentage: false,
  progressBarType: 'determinate',
  buffer: 0,
  theme: 'primary',
}

export default ProgressBar
