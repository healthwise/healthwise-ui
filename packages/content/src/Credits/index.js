import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const P = styled.p`
  margin: 0;
  &:first-child {
    margin-top: 1em;
  }
  &:last-child {
    margin-bottom: 1em;
  }
`

const Span = styled.span`
  font-weight: 600;
`

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
          <P>
            <Span>{currentLabel}:</Span> {asOfDate}
          </P>
        ) : (
          ''
        )}
        {credits.author && credits.author.name ? (
          <P>
            <Span>{authorLabel}:</Span> {credits.author.name}
          </P>
        ) : (
          ''
        )}
        {primaryReviewers.length ? (
          <P>
            <Span>{reviewLabel}:</Span> {primaryReviewers.join('; ')}
            {secondaryReviewers.length ? ' & ' + secondaryReviewers.join('; ') : ''}
          </P>
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
