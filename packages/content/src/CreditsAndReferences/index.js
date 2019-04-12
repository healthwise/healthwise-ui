import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Credits from '../Credits'
import References from '@healthwise-ui/core/References'
import { getKey } from '@healthwise-ui/core/KeyGen'

const SpanIcon = styled.span`
  box-sizing: border-box;
  width: 16px;
  padding: 0 4px 4px 0;
  svg {
    width: 100%;
  }
  svg path {
    fill: #017acd;
  }
`

const Button = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background: transparent;
  border: none;
  color: #017acd;
  cursor: pointer;

  :hover,
  :focus {
    outline: 2px #017acd solid;
  }
`

const Div = styled.div`
  margin: 19px 0 0;

  p {
    font-size: 0.8em;
  }
`

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
        <SpanIcon>
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
        </SpanIcon>
      )
    }
    return (
      <SpanIcon>
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
      </SpanIcon>
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
      <Button aria-controls={creditsId} type="button" onClick={this.toggleCredits}>
        {this.getIcon()}
        <span>{this.props.buttonLabel}</span>
      </Button>
    )

    return (
      <Div>
        <div>{toggleButton}</div>
        {this.renderRegion(creditsId)}
      </Div>
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
