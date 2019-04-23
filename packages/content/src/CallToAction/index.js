import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled, { withTheme } from 'styled-components'

import { defaultTheme } from '@healthwise-ui/core/Theme'

import SVGImage from '@healthwise-ui/core/SvgImage'

const TextWrapperDiv = styled.div`
  padding-bottom: 0.75em;
  text-align: left;
`

const WrapperSection = styled.section`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 14px 24px 24px;
  text-align: center;
  background-color: ${props => props.theme.colorBackground};

  & h3 {
    margin-top: 23px;
    margin-left: 65px;
    font-size: 2em;
    line-height: 1em;
    font-weight: normal;
    color: ${props => props.theme.colorPrimary};
  }

  & img,
  & svg {
    position: absolute;
    top: 27px;
    max-width: 48px !important;
    max-height: 48px;
  }

  & p {
    font-size: 1em;
    line-height: 1.33;
    color: ${props => props.theme.colorTextPrimary};
  }

  & button {
    margin-right: 0.5em;
    margin-bottom: 0.5em;
    font-size: 1.5em;
    border-radius: 0.25em;
    border-color: transparent;
    color: ${props => props.theme.colorTextOnPrimary};
    background: ${props => props.theme.colorPrimary};
  }

  & button:hover {
    color: ${props => props.theme.colorTextOnPrimaryLight};
    background: ${props => props.theme.colorPrimaryLight};
  }

  @media screen and (max-width: 750px) {
    & h3 {
      margin-top: 26px;
    }
  }

  @media print {
    display: none;
  }
`

class CallToAction extends Component {
  constructor(props) {
    super(props)

    this.renderHtmlParts = this.renderHtmlParts.bind(this)
  }

  parseHtml() {
    let elements = {}

    if (this.props.item && this.props.item.html) {
      const parser = new window.DOMParser()
      const doc = parser.parseFromString(this.props.item.html, 'text/html')

      // TODO: temporary logic until we get one consistent format
      const title = doc.querySelector('h3') || doc.querySelector('head title')

      const img = doc.querySelector('img')
      const paragraphs = doc.querySelectorAll('p')

      if (title) {
        elements['title'] = <h3>{title.innerHTML}</h3>
      }

      if (img) {
        elements['img'] = <SVGImage src={img.getAttribute('src')} />
      }

      if (paragraphs) {
        elements.paragraphs = []

        for (let i = 0; i < paragraphs.length; i++) {
          let newArray = elements.paragraphs

          newArray.push(<p key={'cta_para_' + newArray.length}>{paragraphs[i].innerHTML}</p>)
        }
      }
    }

    return elements
  }

  renderHtmlParts() {
    const elements = this.parseHtml()
    return (
      <TextWrapperDiv>
        {elements.title}
        {elements.img}
        {elements.paragraphs}
      </TextWrapperDiv>
    )
  }

  render() {
    const renderHtmlParts = this.renderHtmlParts

    const wrapperClasses = classNames({
      'hw-call-to-action': true,
    })

    return (
      <WrapperSection className={wrapperClasses}>
        {renderHtmlParts()}
        {this.props.actionButtons}
      </WrapperSection>
    )
  }
}

CallToAction.propTypes = {
  item: PropTypes.object,
  actionButtons: PropTypes.node,
}

CallToAction.defaultProps = {
  theme: defaultTheme,
}

export default withTheme(CallToAction)
