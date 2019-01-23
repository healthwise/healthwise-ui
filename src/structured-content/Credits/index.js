import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './Credits.css'

class Credits extends Component {
  render() {
    const {
      asOfDate,
      credits = {},
      reviewLabel,
      authorLabel,
      currentLabel,
      className,
      ...otherAttributes
    } = this.props
    let primaryReviewers = []
    let secondaryReviewers = []

    credits.primaryReviewers &&
      credits.primaryReviewers.forEach(function(reviewer) {
        primaryReviewers.push(reviewer.name)
      })

    credits.secondaryReviewers &&
      credits.secondaryReviewers.forEach(function(reviewer) {
        secondaryReviewers.push(reviewer.name)
      })

    return (
      <div className={className + ' hw-structured-content-credits'} {...otherAttributes}>
        {asOfDate ? (
          <p className={styles.credits_wrapper}>
            <span className={styles.credits_label}>{currentLabel}:</span> {asOfDate}
          </p>
        ) : (
          ''
        )}
        {credits.author && credits.author.name ? (
          <p className={styles.credits_wrapper}>
            <span className={styles.credits_label}>{authorLabel}:</span> {credits.author.name}
          </p>
        ) : (
          ''
        )}
        {primaryReviewers.length ? (
          <p className={styles.credits_wrapper}>
            <span className={styles.credits_label}>{reviewLabel}:</span>{' '}
            {primaryReviewers.join('; ')}
            {secondaryReviewers.length ? ' & ' + secondaryReviewers.join('; ') : ''}
          </p>
        ) : (
          ''
        )}
      </div>
    )
  }
}

Credits.defaultProps = {
  currentLabel: 'Current as of',
  authorLabel: 'Author',
  reviewLabel: 'Medical Review',
}

Credits.propTypes = {
  currentLabel: PropTypes.string,
  authorLabel: PropTypes.string,
  reviewLabel: PropTypes.string,
  asOfDate: PropTypes.string,
  className: PropTypes.string,
  credits: PropTypes.shape({
    author: PropTypes.shape({ name: PropTypes.string }),
    primaryReviewers: PropTypes.array,
    secondaryReviewers: PropTypes.array,
  }),
}

export default Credits
