import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Credits from '../Credits'
import { getKey } from '@healthwise-ui/core/KeyGen'

import styled from 'styled-components'

const DivWrapper = styled.div`
  margin-bottom: 24px;
  box-sizing: border-box;
  width: 100%;

  & p {
    font-size: 0.8em;
  }
`

const DivNavWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
`

const NavUl = styled.ul`
  margin: 0;
  padding: 0;

  & li {
    display: inline-block;
  }

  @media screen and (-ms-high-contrast: active) {
    background: #fff;
    color: #000;
  }

  @media screen and (-ms-high-contrast: black-on-white) {
    background: #000;
    color: #fff;
  }
`

const IconSpan = styled.span`
  box-sizing: border-box;
  width: 18px;
  margin-right: 4px;

  & svg {
    width: 100%;
  }
`

const NavItemButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8em;
  margin: 5px 2px 0;
  padding: 10px 15px;
  color: #017acd;
  border: none;
  background: transparent;

  &:focus,
  &:hover {
    color: #015c9a;
    cursor: pointer;
    outline: 2px solid #000;
  }

  @media screen and (-ms-high-contrast: active) {
    &:focus,
    &:hover {
      outline: 2px solid #fff;
    }
  }

  @media screen and (-ms-high-contrast: black-on-white) {
    &:focus,
    &:hover {
      outline: 2px solid #000;
    }
  }
`

const NavItemActiveButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8em;
  margin: 5px 2px 0;
  padding: 10px 15px;
  color: #017acd;
  border: none;
  background: transparent;

  &:focus,
  &:hover {
    color: #015c9a;
    cursor: pointer;
    outline: 2px solid #000;
  }

  @media screen and (-ms-high-contrast: active) {
    &:focus,
    &:hover {
      outline: 2px solid #fff;
    }
  }

  @media screen and (-ms-high-contrast: black-on-white) {
    &:focus,
    &:hover {
      outline: 2px solid #000;
    }
  }

  background: #f0f1f4;
  border-radius: 1px;

  @media screen and (-ms-high-contrast: active) {
    background: #fff;
    color: #000;
  }

  @media screen and (-ms-high-contrast: black-on-white) {
    background: #000;
    color: #fff;
  }
`

const NavTranscriptItemButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8em;
  margin: 5px 2px 0;
  padding: 10px 15px;
  color: #017acd;
  border: none;
  background: transparent;

  &:focus,
  &:hover {
    color: #015c9a;
    cursor: pointer;
    outline: 2px solid #000;
  }

  @media screen and (-ms-high-contrast: active) {
    &:focus,
    &:hover {
      outline: 2px solid #fff;
    }
  }

  @media screen and (-ms-high-contrast: black-on-white) {
    &:focus,
    &:hover {
      outline: 2px solid #000;
    }
  }

  padding: 5px 15px;
  &:disabled {
    padding: 0;
  }
  &:disabled:focus,
  &:disabled:hover {
    outline: none;
    cursor: default;
  }
`

const NavTranscriptItemActiveButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8em;
  margin: 5px 2px 0;
  padding: 10px 15px;
  color: #017acd;
  border: none;
  background: transparent;

  &:focus,
  &:hover {
    color: #015c9a;
    cursor: pointer;
    outline: 2px solid #000;
  }

  @media screen and (-ms-high-contrast: active) {
    &:focus,
    &:hover {
      outline: 2px solid #fff;
    }
  }

  @media screen and (-ms-high-contrast: black-on-white) {
    &:focus,
    &:hover {
      outline: 2px solid #000;
    }
  }

  padding: 5px 15px;
  &:disabled {
    padding: 0;
  }
  &:disabled:focus,
  &:disabled:hover {
    outline: none;
    cursor: default;
  }

  background: #f0f1f4;
  border-radius: 1px;

  @media screen and (-ms-high-contrast: active) {
    background: #fff;
    color: #000;
  }

  @media screen and (-ms-high-contrast: black-on-white) {
    background: #000;
    color: #fff;
  }
`

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
        {this.state.showDisclaimer ? (
          <NavItemActiveButton
            aria-controls={disclaimerId}
            type="button"
            onClick={this.toggleDisclaimer}
          >
            Disclaimer
          </NavItemActiveButton>
        ) : (
          <NavItemButton aria-controls={disclaimerId} type="button" onClick={this.toggleDisclaimer}>
            Disclaimer
          </NavItemButton>
        )}
      </li>
    )

    const transcriptId = getKey()
    const transcriptElement = transcriptHtml
      ? this.renderTranscript(transcriptHtml, transcriptId)
      : null
    const transcriptButton = transcriptHtml ? (
      this.showTranscript ? (
        <NavTranscriptItemActiveButton
          aria-controls={transcriptId}
          type="button"
          onClick={this.toggleTranscript}
          aria-expanded={this.state.showTranscript}
        >
          <IconSpan>
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
          </IconSpan>
          <span>Transcript</span>
        </NavTranscriptItemActiveButton>
      ) : (
        <NavTranscriptItemButton
          aria-controls={transcriptId}
          type="button"
          onClick={this.toggleTranscript}
          aria-expanded={this.state.showTranscript}
        >
          <IconSpan>
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
          </IconSpan>
          <span>Transcript</span>
        </NavTranscriptItemButton>
      )
    ) : (
      <NavTranscriptItemButton
        tabIndex="-1"
        disabled
        type="button"
        role="presentation"
        aria-hidden="true"
      >
        {' '}
      </NavTranscriptItemButton>
    )

    return (
      <DivWrapper>
        <DivNavWrapper>
          {transcriptButton}
          <NavUl>
            {disclaimerButton}
            <li>
              {this.state.showCredits ? (
                <NavItemActiveButton
                  aria-controls={creditsId}
                  type="button"
                  onClick={this.toggleCredits}
                  aria-expanded={this.state.showCredits}
                >
                  Credits
                </NavItemActiveButton>
              ) : (
                <NavItemButton
                  aria-controls={creditsId}
                  type="button"
                  onClick={this.toggleCredits}
                  aria-expanded={this.state.showCredits}
                >
                  Credits
                </NavItemButton>
              )}
            </li>
          </NavUl>
        </DivNavWrapper>
        {transcriptElement}
        {disclaimerElement}
        {this.renderCredits(creditsId)}
      </DivWrapper>
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
