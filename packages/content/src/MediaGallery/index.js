import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './MediaGallery.css'

import Insights from '../Insights'
import Slideshow from '../Slideshow'
import MediaServiceVideo from '../MediaServiceVideo'
import Image from './Image'

class MediaGallery extends Component {
  constructor(props) {
    super(props)

    this.onThumbnailClick = this.onThumbnailClick.bind(this)
    this.onSlideSelected = this.onSlideSelected.bind(this)
    this.parseHtml = this.parseHtml.bind(this)

    this.slideClass = 'mediaGallerySlide_'
    this.insights = new Insights()

    this.state = { currentSlide: 0 }
  }

  parseHtml(htmlString) {
    if (htmlString && htmlString.length) {
      let parser = new window.DOMParser()
      let xmlDoc = parser.parseFromString(htmlString, 'text/html')

      return xmlDoc
    }
  }

  getUrlFromDomString(html) {
    const dom = this.parseHtml(html)
    const src = dom && dom.querySelector('img').getAttribute('src')
    const dotIndex = src.lastIndexOf('.')

    return src && src.substring(0, dotIndex) + '_tt' + src.substring(dotIndex)
  }

  onThumbnailClick(index, item) {
    const gallery = this.props.item
    const galleryTypes = {
      hwVideo: 'video',
      hwSlideshow: 'slideshow',
      'Product Map': 'article',
      hwMedia: 'image',
    }
    let insightsObj = {
      pageName: document.title,
      eventName: 'galleryNav',
      galleryHwid: gallery.id,
      thumbnailType: galleryTypes[item.type],
      targetHwid: item.id,
      targetTitle: item.title.consumer,
      navIndex: index + 1,
      navItems: gallery.topics.length,
    }

    this.insights.trackEvent(insightsObj)

    this.setState({ currentSlide: index }, () => {
      // this focuses the slide on click, for accessibility/screen reader purposes
      this.slide.focus()
    })

    // fire props callback
    this.props.onThumbnailClick(index + 1, item)
  }

  onSlideSelected(index, item) {
    // fire props callback
    this.props.onSlideSelected(index, item)
  }

  render() {
    const { item, mediaHash, mediaServiceUrl, mediaToken } = this.props
    const onThumbnailClick = this.onThumbnailClick
    const onSlideSelected = this.onSlideSelected
    let itemList = item

    if (item && item.topics) {
      let slides = []
      let thumbnails = []

      const currentSlide =
        itemList.topics.length > this.state.currentSlide ? this.state.currentSlide : 0

      itemList.topics.forEach((item, i) => {
        const activeThumbnail = currentSlide === i ? styles.activeThumbnail : ''
        const userIndex = i + 1

        switch (item.type) {
          case 'hwVideo':
            thumbnails.push(
              <li key={i}>
                <button
                  type="button"
                  aria-controls="hwGallery_slide"
                  className={`${styles.thumbnail} ${activeThumbnail}`}
                  onClick={() => {
                    onThumbnailClick(i, item)
                  }}
                >
                  <img
                    src={item.thumbnail}
                    alt={`load video, ${userIndex} of ${itemList.topics.length} items`}
                  />
                  <svg
                    role="presentation"
                    focusable="false"
                    className={styles.videoThumbnailOverlay}
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect fillOpacity="0.8" fill="#017ACD" x="0" y="0" width="40" height="40" />
                      <g transform="translate(12.5, 12.5)" fill="#FAFAFA">
                        <polygon points="5 3.125 5 11.875 11.875 7.5" />
                      </g>
                    </g>
                  </svg>
                </button>
              </li>
            )
            slides.push(
              <div className={styles.slide} key={i}>
                <MediaServiceVideo
                  hideDisclaimer
                  item={item}
                  mediaServiceUrl={mediaServiceUrl}
                  mediaHash={mediaHash}
                  mediaToken={mediaToken}
                />
              </div>
            )
            break

          case 'hwSlideshow':
            let slideshowThumbSrc = this.getUrlFromDomString(item.html)

            thumbnails.push(
              <li key={i}>
                <button
                  type="button"
                  aria-controls="hwGallery_slide"
                  className={`${styles.thumbnail} ${activeThumbnail}`}
                  onClick={() => {
                    onThumbnailClick(i, item)
                  }}
                >
                  <img
                    src={slideshowThumbSrc}
                    alt={`load slideshow, ${userIndex} of ${itemList.topics.length} items`}
                  />
                </button>
              </li>
            )
            slides.push(
              <div className={styles.slide} key={i}>
                <Slideshow hideDisclaimer item={item} onSlideSelected={onSlideSelected} />
              </div>
            )
            break

          case 'hwMedia':
            let mediaThumbSrc = this.getUrlFromDomString(item.html)

            thumbnails.push(
              <li key={i}>
                <button
                  type="button"
                  aria-controls="hwGallery_slide"
                  className={`${styles.thumbnail} ${activeThumbnail}`}
                  onClick={() => {
                    onThumbnailClick(i, item)
                  }}
                >
                  {/* eslint-disable-next-line react-app/jsx-a11y/img-redundant-alt */}
                  <img
                    src={mediaThumbSrc}
                    alt={`load image, ${userIndex} of ${itemList.topics.length} items`}
                  />
                </button>
              </li>
            )
            slides.push(
              <div className={styles.slide} key={i}>
                <Image hideDisclaimer item={item} />
              </div>
            )
            break

          default:
        }
      })

      return (
        <section className={styles.gallery}>
          <ul className={styles.list}>{thumbnails}</ul>

          <div
            id="hwGallery_slide"
            aria-live="polite"
            tabIndex="-1"
            ref={div => {
              this.slide = div
            }}
          >
            {slides[currentSlide]}
          </div>
        </section>
      )
    } else {
      return null
    }
  }
}

MediaGallery.propTypes = {
  item: PropTypes.object.isRequired,
  onThumbnailClick: PropTypes.func,
  mediaServiceUrl: PropTypes.string,
  mediaHash: PropTypes.string,
  mediaToken: PropTypes.string,
  onSlideSelected: PropTypes.func,
}

MediaGallery.defaultProps = {
  onThumbnailClick: function() {},
  onSlideSelected: function() {},
}

export default MediaGallery
