import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './CallToAction.css'

import SVGImage from '@healthwise/svg-image'

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
      <div className={styles.text_wrapper}>
        {elements.title}
        {elements.img}
        {elements.paragraphs}
      </div>
    )
  }

  render() {
    const renderHtmlParts = this.renderHtmlParts

    const wrapperClasses = classNames({
      'hw-call-to-action': true,
      [styles.wrapper]: true,
    })

    return (
      <section className={wrapperClasses}>
        {renderHtmlParts()}
        {this.props.actionButtons}
      </section>
    )
  }
}

CallToAction.propTypes = {
  item: PropTypes.object,
  actionButtons: PropTypes.node,
}

export default CallToAction
