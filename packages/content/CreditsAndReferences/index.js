import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './CreditsAndReferences.css'

import Credits from '../Credits'
import References from '@healthwise-ui/core/References'
import { getKey } from '@healthwise-ui/core/KeyGen'

class CreditsAndReferences extends Component {
  constructor(props) {
    super(props)
    this.toggleCredits = this.toggleCredits.bind(this)
    this.getIcon = this.getIcon.bind(this)
    this.renderRegion = this.renderRegion.bind(this)
    this.state = { showCredits: false }
  }

  toggleCredits() {
    this.setState({
      showCredits: !this.state.showCredits,
    })
  }

  getIcon(id) {
    if (this.state.showCredits) {
      return (
        <span className={styles.icon}>
          <title>Close</title>
          <svg
            role="presentation"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="5"
            viewBox="0 0 10 5"
          >
            <path d="M0 5l5-5 5 5" fillRule="evenodd" />
          </svg>
        </span>
      )
    }
    return (
      <span className={styles.icon}>
        <svg
          role="presentation"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="5"
          viewBox="0 0 10 5"
        >
          <title>Open</title>
          <path d="M10 0H0l5 5" fillRule="evenodd" />
        </svg>
      </span>
    )
  }

  renderRegion(id) {
    const { asOfDate, credits, references, referencesLabel } = this.props
    let template = ''
    const referenceElement =
      references && references.length ? (
        <References references={references} referencesLabel={referencesLabel} />
      ) : null

    template =
      this.state.showCredits || this.props.readOnly ? (
        <div
          id={id}
          className={styles.regon_wrapper}
          role="region"
          aria-live="polite"
          aria-atomic="false"
          aria-expanded={this.state.showCredits}
        >
          <Credits asOfDate={asOfDate} credits={credits} />
          {referenceElement}
        </div>
      ) : (
        ''
      )

    return template
  }

  render() {
    const creditsId = this.props.id || getKey()
    const toggleButton = this.props.readOnly ? (
      <h3>{this.props.buttonLabel}</h3>
    ) : (
      <button
        aria-controls={creditsId}
        type="button"
        className={styles.button}
        onClick={this.toggleCredits}
      >
        {this.getIcon()}
        <span>{this.props.buttonLabel}</span>
      </button>
    )

    return (
      <div className={styles.wrapper}>
        <div className={styles.button_wrapper}>{toggleButton}</div>
        {this.renderRegion(creditsId)}
      </div>
    )
  }
}

CreditsAndReferences.defaultProps = {
  buttonLabel: 'Credits and References',
}

CreditsAndReferences.propTypes = {
  id: PropTypes.string,
  readOnly: PropTypes.bool,
  asOfDate: PropTypes.string,
  buttonLabel: PropTypes.string,
  credits: PropTypes.object,
  referencesLabel: PropTypes.string,
  references: PropTypes.array,
}

export default CreditsAndReferences
