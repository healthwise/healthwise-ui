import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Slideshow.css'

import Insights from '@healthwise/insights'
import MediaCredits from '@healthwise/media-credits'

class Slideshow extends Component {
  constructor(props) {
    super(props)

    if (props.item) {
      const html = this.parseHtml(props.item.html)
      const lis = html.querySelectorAll('li')

      // set up component state so we can retain the selected thumbnail
      this.state = { currentSlide: 0, lis: lis }

      this.insights = new Insights()

      this.onNavClick = this.onNavClick.bind(this)
      this.renderSlide = this.renderSlide.bind(this)
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.item && nextProps.item.html !== this.props.item.html) {
      const html = this.parseHtml(nextProps.item.html)
      const lis = html.querySelectorAll('li')

      this.setState({ lis: lis })
    }
  }

  parseHtml(htmlString) {
    if (htmlString && htmlString.length) {
      let parser = new window.DOMParser()
      let xmlDoc = parser.parseFromString(htmlString, 'text/html')

      return xmlDoc
    }
  }

  onNavClick(index) {
    const item = this.props.item
    const slide = this.state.lis[index]
    const slideTitle = slide.querySelector('.HwCmd').innerText
    // this parses out the GUID from the IMG src
    const slideSrc = slide.querySelector('img').src
    const slideHwidWithExt = slideSrc.substring(slideSrc.lastIndexOf('/') + 1)
    const slideHwid = slideHwidWithExt.split('.')[0]

    this.insights.trackEvent({
      pageName: document.title,
      eventName: 'slideshowAction',
      slideshowHwid: item.id,
      slideHwid: slideHwid,
      slideTitle: slideTitle,
      slideIndex: index + 1,
      slideshowItems: this.state.lis.length,
    })

    this.props.onSlideSelected(index + 1, item)

    this.setState({ currentSlide: index })
  }

  renderSlide() {
    const lis = this.state.lis

    if (lis.length) {
      return (
        <div
          className="hw-sc-slideshow-slide"
          dangerouslySetInnerHTML={{ __html: lis[this.state.currentSlide].innerHTML }}
        />
      )
    }
  }

  renderNavigation() {
    const onNavClick = this.onNavClick
    const len = this.state.lis.length
    const current = this.state.currentSlide + 1
    const navLis = []

    if (len > 1) {
      for (var i = 1; i <= len; i++) {
        const num = i
        const currentItemClass = i === current ? styles.activeNav : ''

        /* eslint-disable react/jsx-no-bind */
        navLis.push(
          <li key={'nav_' + i}>
            <button
              type="button"
              className={`${styles.nav_item} ${currentItemClass}`}
              onClick={function() {
                onNavClick(num - 1)
              }}
            >
              {i}
            </button>
          </li>
        )
        /* eslint-enable react/jsx-no-bind */
      }
    }

    return <ul className={styles.nav}>{navLis}</ul>
  }

  render() {
    let { item, hideDisclaimer } = this.props
    let toReturn = null

    let previewItems = []
    this.state.lis.forEach(function(element, i) {
      const src = element.querySelector('img').src
      previewItems.push(<img src={src} alt="" key={'preload-image-' + i} />)
    })

    if (item) {
      toReturn = (
        <div className={'hw-sc-slideshow ' + styles.slideshow}>
          {this.renderSlide()}
          <MediaCredits
            hideDisclaimer={hideDisclaimer}
            asOfDate={item.certifiedDate}
            legal={item.legal}
            credits={item.credits}
          />
          {this.renderNavigation()}
          <div style={{ display: 'none' }} aria-hidden="true">
            {previewItems}
          </div>
        </div>
      )
    }

    return toReturn
  }
}

Slideshow.propTypes = {
  item: PropTypes.object.isRequired,
  hideDisclaimer: PropTypes.bool,
  onSlideSelected: PropTypes.func,
}

Slideshow.defaultProps = {
  hideDisclaimer: false,
  onSlideSelected: function() {},
}

export default Slideshow
