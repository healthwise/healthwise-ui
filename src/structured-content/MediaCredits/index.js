import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './MediaCredits.css'
import Credits from '@healthwise/content-credits'
import { getKey } from '@healthwise/key-gen'

class MediaCredits extends Component {
  constructor(props) {
    super(props)

    this.toggleDisclaimer = this.toggleDisclaimer.bind(this)
    this.toggleCredits = this.toggleCredits.bind(this)
    this.toggleTranscript = this.toggleTranscript.bind(this)
    this.renderDisclaimer = this.renderDisclaimer.bind(this)
    this.renderCredits = this.renderCredits.bind(this)
    this.renderTranscript = this.renderTranscript.bind(this)

    // set up component state so we can retain the selected thumbnail
    this.state = { showDisclaimer: false, showCredits: false, showTranscript: false }
  }

  toggleDisclaimer() {
    const newState = !this.state.showDisclaimer

    this.setState({
      showDisclaimer: newState,
      showCredits: false,
      showTranscript: false,
    })
  }

  toggleCredits() {
    const newState = !this.state.showCredits

    this.setState({
      showDisclaimer: false,
      showCredits: newState,
      showTranscript: false,
    })
  }

  toggleTranscript() {
    const newState = !this.state.showTranscript

    this.setState({
      showDisclaimer: false,
      showCredits: false,
      showTranscript: newState,
    })
  }

  renderTranscript(html, id) {
    return this.state.showTranscript ? (
      <div
        role="region"
        aria-live="polite"
        aria-atomic="false"
        className="hw-media-credits-transcript"
        id={id}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    ) : null
  }

  renderDisclaimer(text, id) {
    return this.state.showDisclaimer ? (
      <p role="region" id={id} aria-live="polite">
        {text}
      </p>
    ) : null
  }

  renderCredits(id) {
    const { asOfDate, credits } = this.props
    let template = ''

    template = this.state.showCredits ? (
      <Credits
        role="region"
        id={id}
        aria-live="polite"
        aria-atomic="false"
        asOfDate={asOfDate}
        credits={credits}
      />
    ) : (
      ''
    )

    return template
  }

  render() {
    let { legal, hideDisclaimer, transcriptHtml } = this.props
    const creditsId = getKey()

    const disclaimerId = getKey()
    const disclaimerElement = hideDisclaimer
      ? null
      : this.renderDisclaimer(legal.disclaimerText, disclaimerId)
    const disclaimerButton = hideDisclaimer ? null : (
      <li>
        <button
          aria-controls={disclaimerId}
          type="button"
          className={`${styles.nav_item} ${
            this.state.showDisclaimer ? styles.nav_item_active : null
          }`}
          onClick={this.toggleDisclaimer}
        >
          Disclaimer
        </button>
      </li>
    )

    const transcriptId = getKey()
    const transcriptElement = transcriptHtml
      ? this.renderTranscript(transcriptHtml, transcriptId)
      : null
    const transcriptButton = transcriptHtml ? (
      <button
        aria-controls={transcriptId}
        type="button"
        className={`${styles.nav_item} ${styles.nav_transcript_item} ${
          this.state.showTranscript ? styles.nav_item_active : null
        }`}
        onClick={this.toggleTranscript}
      >
        <span className={styles.icon}>
          <svg
            role="presentation"
            focusable="false"
            width="18"
            height="22"
            viewBox="0 0 18 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="M1.528 1.634h14.944v18.732H1.528V1.634z" fill="#017acd" />
              <path
                d="M3.728 9.646h10.59v2.26H3.728v-2.26zm0-4.355h10.59v2.26H3.728V5.29zm-.073 9.036h6.403v2.404H3.655v-2.404z"
                fill="#fff"
              />
            </g>
          </svg>
        </span>
        <span>Transcript</span>
      </button>
    ) : (
      <button
        tabIndex="-1"
        disabled
        type="button"
        className={`${styles.nav_item} ${styles.nav_transcript_item}`}
        role="presentation"
        aria-hidden="true"
      >
        {' '}
      </button>
    )

    return (
      <div className={styles.wrapper}>
        <div className={styles.nav_wrapper}>
          {transcriptButton}
          <ul className={styles.nav}>
            {disclaimerButton}
            <li>
              <button
                aria-controls={creditsId}
                type="button"
                className={`${styles.nav_item} ${
                  this.state.showCredits ? styles.nav_item_active : null
                }`}
                onClick={this.toggleCredits}
              >
                Credits
              </button>
            </li>
          </ul>
        </div>
        {transcriptElement}
        {disclaimerElement}
        {this.renderCredits(creditsId)}
      </div>
    )
  }
}

MediaCredits.defaultProps = {
  credits: {},
  legal: {
    disclaimerText: '*** Missing disclaimer ***',
  },
  hideDisclaimer: false,
}

MediaCredits.propTypes = {
  asOfDate: PropTypes.string,
  transcriptHtml: PropTypes.string,
  legal: PropTypes.shape({
    disclaimerText: PropTypes.string.isRequired,
  }),
  credits: PropTypes.object,
  hideDisclaimer: PropTypes.bool,
}

export default MediaCredits
