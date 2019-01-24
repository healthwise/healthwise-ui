import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import ScreenReaderOnly from '../ScreenReaderOnly'
import styles from './LoadingIndicator.css'

class LoadingIndicator extends React.Component {
  render() {
    const { hiddenText, inverted, ...otherAttributes } = this.props
    const wrapperClass = classNames({
      'hw-loading-indicator-wrapper': true,
      [styles.wrapper]: true,
      [styles.inverted]: inverted,
    })

    return (
      <div className={wrapperClass} {...otherAttributes}>
        <ScreenReaderOnly>{hiddenText}</ScreenReaderOnly>
        <span className={`hw-loading-indicator ${styles.LoadingIndicator}`}>
          <span className={`hw-loading-indicator-inner ${styles.inner}`} />
        </span>
      </div>
    )
  }
}

LoadingIndicator.propTypes = {
  hiddenText: PropTypes.string,
  inverted: PropTypes.bool,
}

LoadingIndicator.defaultProps = {
  hiddenText: 'Loading page',
  inverted: false,
}

export default LoadingIndicator
